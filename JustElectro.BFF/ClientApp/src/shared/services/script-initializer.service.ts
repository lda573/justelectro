import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const WOW: any;
declare const Swiper: any;

@Injectable({ providedIn: 'root' })
export class ScriptInitializerService {
  private router = inject(Router);

  init(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        // Mică întârziere ca Angular să termine render-ul DOM
        setTimeout(() => this.reinitialize(), 100);
      });
  }

  private reinitialize(): void {
    // WOW.js — animații scroll
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }

    // Swiper — testimoniale
    if (typeof Swiper !== 'undefined') {
      new Swiper('.testimonial-slider .swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        },
      });
    }
  }
}
