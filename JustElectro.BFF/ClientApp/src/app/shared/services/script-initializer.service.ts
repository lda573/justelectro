import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const WOW: any;
declare const Swiper: any;
declare const $: any;
declare const Isotope: any;

@Injectable({ providedIn: 'root' })
export class ScriptInitializerService {
  private router = inject(Router);

  init(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.reinitialize(), 150);
      });
  }

  private reinitialize(): void {
    // WOW.js
    if (typeof WOW !== 'undefined') {
      new WOW({ live: false }).init();
    }

    // Swiper — testimoniale
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-slider .swiper')) {
      new Swiper('.testimonial-slider .swiper', {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        },
      });
    }

    // SlickNav — distruge instanța veche și re-inițializează
    if (typeof $ !== 'undefined' && $.fn && $.fn.slicknav) {
      const $menu = $('#menu');
      if ($menu.length) {
        // Dacă SlickNav a fost deja inițializat, distruge-l
        if ($menu.data('slicknav')) {
          $menu.slicknav('destroy');
        }
        // Golește responsive-menu și re-inițializează exact ca în function.js
        $('.responsive-menu').empty();
        $menu.slicknav({
          label: '',
          prependTo: '.responsive-menu',
        });
      }
    }

    // Magnific Popup — galerie imagini
    if (typeof $ !== 'undefined' && $.fn && $.fn.magnificPopup && $('.gallery-items').length) {
      $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element: any) {
            return element.find('img');
          },
        },
      });
    }

    // Isotope — filtrare portofoliu
    if (typeof Isotope !== 'undefined' && document.querySelector('#portofoliu-grid')) {
      const iso = new Isotope('#portofoliu-grid', {
        itemSelector: '.project-item-box',
        layoutMode: 'fitRows',
      });

      const filterBtns = document.querySelectorAll('.project-item-boxes .project-item-box[data-filter]');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function (this: HTMLElement) {
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          iso.arrange({ filter: this.getAttribute('data-filter') ?? '*' });
        });
      });

      // Activează primul buton (Toate)
      const firstBtn = filterBtns[0] as HTMLElement | undefined;
      if (firstBtn) firstBtn.classList.add('active');
    }
  }
}
