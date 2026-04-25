import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../shared/services/language.service';
import { AboutPage, Certification, Partner } from '../models/about.models';
import { ServiceDto } from '../models/service.models';
import { FinancingProgramDto } from '../models/financing-program.models';
import { PortfolioItemDto } from '../models/portfolio.models';
import { ProductDto } from '../models/product.models';

@Injectable({ providedIn: 'root' })
export class CmsApiService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);

  private readonly projectId = environment.sanity.projectId;
  private readonly dataset = environment.sanity.dataset;
  private readonly apiVersion = environment.sanity.apiVersion;
  private readonly baseUrl = `https://${environment.sanity.projectId}.api.sanity.io/v${environment.sanity.apiVersion}/data/query/${environment.sanity.dataset}`;

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

  getAboutPage(): Observable<AboutPage> {
    return this.query<AboutPage>('*[_type == "aboutPage"][0]');
  }

  getServices(): Observable<ServiceDto[]> {
    return this.query<ServiceDto[]>('*[_type == "service"] | order(order asc)');
  }

  getServiceBySlug(slug: string): Observable<ServiceDto> {
    return this.query<ServiceDto>(
      '*[_type == "service" && slug.current == $slug][0]',
      { slug }
    );
  }

  getFinancingPrograms(): Observable<FinancingProgramDto[]> {
    return this.query<FinancingProgramDto[]>('*[_type == "financingProgram"] | order(order asc)');
  }

  getFinancingProgramBySlug(slug: string): Observable<FinancingProgramDto> {
    return this.query<FinancingProgramDto>(
      '*[_type == "financingProgram" && slug.current == $slug][0]',
      { slug }
    );
  }

  getPortfolioItems(): Observable<PortfolioItemDto[]> {
    return this.query<PortfolioItemDto[]>('*[_type == "portfolioItem"] | order(order asc)');
  }

  getPortfolioItemBySlug(slug: string): Observable<PortfolioItemDto> {
    return this.query<PortfolioItemDto>(
      '*[_type == "portfolioItem" && slug.current == $slug][0]',
      { slug }
    );
  }

  getProducts(): Observable<ProductDto[]> {
    return this.query<ProductDto[]>('*[_type == "product"] | order(order asc)');
  }

  getProductBySlug(slug: string): Observable<ProductDto> {
    return this.query<ProductDto>(
      '*[_type == "product" && slug.current == $slug][0]',
      { slug }
    );
  }

  getCertifications(): Observable<Certification[]> {
    return this.query<Certification[]>('*[_type == "aboutPage"][0].certifications');
  }

  getPartners(): Observable<Partner[]> {
    return this.query<Partner[]>('*[_type == "aboutPage"][0].partners');
  }
}
