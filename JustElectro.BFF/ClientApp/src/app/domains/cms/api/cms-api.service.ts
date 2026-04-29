import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../shared/services/language.service';
import { AboutPage, Certification, Partner } from '../models/about.models';
import { ServiceDto } from '../models/service.models';
import { FinancingProgramDto } from '../models/financing-program.models';
import { PortfolioItemDto } from '../models/portfolio.models';
import { ProductDto } from '../models/product.models';

/** Cache TTL in milliseconds (default: 60 minutes). */
const CACHE_TTL_MS = 60 * 60 * 1000;
const CACHE_STORAGE_PREFIX = 'cms_cache:';

interface StoredCacheEntry<T> {
  data: T;
  expiresAt: number;
}

interface MemoryCacheEntry<T> {
  observable: Observable<T>;
  expiresAt: number;
}

@Injectable({ providedIn: 'root' })
export class CmsApiService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);

  private readonly projectId = environment.sanity.projectId;
  private readonly dataset = environment.sanity.dataset;
  private readonly apiVersion = environment.sanity.apiVersion;
  private readonly baseUrl = `https://${environment.sanity.projectId}.api.sanity.io/v${environment.sanity.apiVersion}/data/query/${environment.sanity.dataset}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly memoryCache = new Map<string, MemoryCacheEntry<any>>();

  get currentLang() {
    return this.languageService.currentLang();
  }

  private query<T>(groq: string, params?: Record<string, unknown>): Observable<T> {
    let httpParams = new HttpParams().set('query', groq);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        httpParams = httpParams.set(`$${key}`, JSON.stringify(value));
      }
    }
    return this.http
      .get<{ result: T }>(this.baseUrl, { params: httpParams })
      .pipe(map(response => response.result));
  }

  private cachedQuery<T>(cacheKey: string, groq: string, params?: Record<string, unknown>): Observable<T> {
    const now = Date.now();

    // 1. Check in-memory cache (fastest, deduplicates concurrent calls)
    const memEntry = this.memoryCache.get(cacheKey) as MemoryCacheEntry<T> | undefined;
    if (memEntry && now < memEntry.expiresAt) {
      return memEntry.observable;
    }

    // 2. Check localStorage (survives page refresh)
    try {
      const stored = localStorage.getItem(CACHE_STORAGE_PREFIX + cacheKey);
      if (stored) {
        const parsed: StoredCacheEntry<T> = JSON.parse(stored);
        if (now < parsed.expiresAt) {
          const observable = of(parsed.data).pipe(shareReplay(1));
          this.memoryCache.set(cacheKey, { observable, expiresAt: parsed.expiresAt });
          return observable;
        } else {
          localStorage.removeItem(CACHE_STORAGE_PREFIX + cacheKey);
        }
      }
    } catch {
      // localStorage unavailable or JSON parse error — fall through to HTTP
    }

    // 3. Fetch from network, persist to localStorage and memory
    const expiresAt = now + CACHE_TTL_MS;
    const observable = this.query<T>(groq, params).pipe(
      tap(data => {
        try {
          const entry: StoredCacheEntry<T> = { data, expiresAt };
          localStorage.setItem(CACHE_STORAGE_PREFIX + cacheKey, JSON.stringify(entry));
        } catch {
          // localStorage full or unavailable — skip persistence
        }
      }),
      shareReplay(1)
    );
    this.memoryCache.set(cacheKey, { observable, expiresAt });
    return observable;
  }

  /** Manually invalidate a specific cache entry or the entire cache. */
  invalidateCache(cacheKey?: string): void {
    if (cacheKey) {
      this.memoryCache.delete(cacheKey);
      localStorage.removeItem(CACHE_STORAGE_PREFIX + cacheKey);
    } else {
      this.memoryCache.clear();
      Object.keys(localStorage)
        .filter(k => k.startsWith(CACHE_STORAGE_PREFIX))
        .forEach(k => localStorage.removeItem(k));
    }
  }

  getAboutPage(): Observable<AboutPage> {
    return this.cachedQuery<AboutPage>('aboutPage', '*[_type == "aboutPage"][0]');
  }

  getServices(): Observable<ServiceDto[]> {
    return this.cachedQuery<ServiceDto[]>('services', '*[_type == "service"] | order(order asc)');
  }

  getServiceBySlug(slug: string): Observable<ServiceDto> {
    return this.cachedQuery<ServiceDto>(
      `service:${slug}`,
      '*[_type == "service" && slug.current == $slug][0]',
      { slug }
    );
  }

  getFinancingPrograms(): Observable<FinancingProgramDto[]> {
    return this.cachedQuery<FinancingProgramDto[]>('financingPrograms', '*[_type == "financingProgram"] | order(order asc)');
  }

  getFinancingProgramBySlug(slug: string): Observable<FinancingProgramDto> {
    return this.cachedQuery<FinancingProgramDto>(
      `financingProgram:${slug}`,
      '*[_type == "financingProgram" && slug.current == $slug][0]',
      { slug }
    );
  }

  getPortfolioItems(): Observable<PortfolioItemDto[]> {
    return this.cachedQuery<PortfolioItemDto[]>('portfolioItems', '*[_type == "portfolioItem"] | order(order asc)');
  }

  getPortfolioItemBySlug(slug: string): Observable<PortfolioItemDto> {
    return this.cachedQuery<PortfolioItemDto>(
      `portfolioItem:${slug}`,
      '*[_type == "portfolioItem" && slug.current == $slug][0]',
      { slug }
    );
  }

  getProducts(): Observable<ProductDto[]> {
    return this.cachedQuery<ProductDto[]>('products', '*[_type == "product"] | order(order asc)');
  }

  getProductBySlug(slug: string): Observable<ProductDto> {
    return this.cachedQuery<ProductDto>(
      `product:${slug}`,
      '*[_type == "product" && slug.current == $slug][0]',
      { slug }
    );
  }

  getCertifications(): Observable<Certification[]> {
    return this.cachedQuery<Certification[]>('certifications', '*[_type == "certification"] | order(order asc)');
  }

  getPartners(): Observable<Partner[]> {
    return this.cachedQuery<Partner[]>('partners', '*[_type == "partner"] | order(order asc)');
  }
}
