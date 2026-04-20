import { Injectable } from '@angular/core';
import { ProiectDto } from '../models/portofoliu.models';

@Injectable({ providedIn: 'root' })
export class PortofoliuDataService {
  private proiecte: ProiectDto[] = [
    {
      slug: 'panouri-solare-rezidentiale-cluj',
      titleRo: 'Panouri Solare Rezidențiale Cluj',
      image: 'assets/images/project-1.jpg',
      categorieLabel: 'Solar',
    },
    {
      slug: 'turbine-eoliene-dobrogea',
      titleRo: 'Turbine Eoliene Dobrogea',
      image: 'assets/images/project-2.jpg',
      categorieLabel: 'Wind',
    },
    {
      slug: 'sistem-fotovoltaic-industrial-brasov',
      titleRo: 'Sistem Fotovoltaic Industrial Brașov',
      image: 'assets/images/project-3.jpg',
      categorieLabel: 'Solar',
    },
    {
      slug: 'microcentrale-hidro-bistrita',
      titleRo: 'Microcentrale Hidro Bistrița',
      image: 'assets/images/project-4.jpg',
      categorieLabel: 'Power',
    },
    {
      slug: 'sistem-hibrid-solar-eolian-constanta',
      titleRo: 'Sistem Hibrid Solar-Eolian Constanța',
      image: 'assets/images/project-5.jpg',
      categorieLabel: 'Hybrid',
    },
    {
      slug: 'parc-solar-timisoara',
      titleRo: 'Parc Solar Timișoara',
      image: 'assets/images/project-6.jpg',
      categorieLabel: 'Solar',
    },
    {
      slug: 'ferma-eoliana-tulcea',
      titleRo: 'Fermă Eoliană Tulcea',
      image: 'assets/images/project-7.jpg',
      categorieLabel: 'Wind',
    },
    {
      slug: 'statie-electrica-iasi',
      titleRo: 'Stație Electrică Iași',
      image: 'assets/images/project-8.jpg',
      categorieLabel: 'Power',
    },
    {
      slug: 'sistem-hibrid-off-grid-maramures',
      titleRo: 'Sistem Hibrid Off-Grid Maramureș',
      image: 'assets/images/project-9.jpg',
      categorieLabel: 'Hybrid',
    },
  ];

  getAll(): ProiectDto[] {
    return this.proiecte;
  }

  getBySlug(slug: string): ProiectDto | undefined {
    return this.proiecte.find(p => p.slug === slug);
  }
}
