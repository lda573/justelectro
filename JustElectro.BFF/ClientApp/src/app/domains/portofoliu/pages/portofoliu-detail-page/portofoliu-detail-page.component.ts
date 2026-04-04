import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { CtaBannerComponent } from '../../../../shared/components/cta-banner/cta-banner.component';

interface ProiectDto {
  slug: string;
  titleRo: string;
  image: string;
  categorie: string;
  date: string;
  autor: string;
}

const PROIECTE: ProiectDto[] = [
  {
    slug: 'panouri-solare-rezidentiale-cluj',
    titleRo: 'Panouri Solare Rezidențiale Cluj',
    image: 'assets/images/project-1.jpg',
    categorie: 'Solar',
    date: '12 Ianuarie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'turbine-eoliene-dobrogea',
    titleRo: 'Turbine Eoliene Dobrogea',
    image: 'assets/images/project-2.jpg',
    categorie: 'Wind',
    date: '24 Februarie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'sistem-fotovoltaic-industrial-brasov',
    titleRo: 'Sistem Fotovoltaic Industrial Brașov',
    image: 'assets/images/project-3.jpg',
    categorie: 'Solar',
    date: '05 Martie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'microcentrale-hidro-bistrita',
    titleRo: 'Microcentrale Hidro Bistrița',
    image: 'assets/images/project-4.jpg',
    categorie: 'Power',
    date: '18 Martie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'sistem-hibrid-solar-eolian-constanta',
    titleRo: 'Sistem Hibrid Solar-Eolian Constanța',
    image: 'assets/images/project-5.jpg',
    categorie: 'Hybrid',
    date: '27 Martie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'parc-solar-timisoara',
    titleRo: 'Parc Solar Timișoara',
    image: 'assets/images/project-6.jpg',
    categorie: 'Solar',
    date: '01 Aprilie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'ferma-eoliana-tulcea',
    titleRo: 'Fermă Eoliană Tulcea',
    image: 'assets/images/project-7.jpg',
    categorie: 'Wind',
    date: '03 Aprilie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'statie-electrica-iasi',
    titleRo: 'Stație Electrică Iași',
    image: 'assets/images/project-8.jpg',
    categorie: 'Power',
    date: '07 Aprilie 2026',
    autor: 'JustElectro'
  },
  {
    slug: 'sistem-hibrid-off-grid-maramures',
    titleRo: 'Sistem Hibrid Off-Grid Maramureș',
    image: 'assets/images/project-9.jpg',
    categorie: 'Hybrid',
    date: '10 Aprilie 2026',
    autor: 'JustElectro'
  }
];

@Component({
  selector: 'app-portofoliu-detail-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    CtaBannerComponent,
    RouterLink,
  ],
  templateUrl: './portofoliu-detail-page.component.html',
})
export class PortofoliuDetailPageComponent implements OnInit {
  private route = inject(ActivatedRoute);

  proiect = signal<ProiectDto | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.proiect.set(PROIECTE.find((item) => item.slug === slug));
      window.scrollTo(0, 0);
    });
  }
}
