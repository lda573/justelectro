import { Injectable } from '@angular/core';
import { ProgramFinantareDto } from '../models/program-finantare.models';

@Injectable({ providedIn: 'root' })
export class ProgrameFinantareDataService {
  private programs: ProgramFinantareDto[] = [
    {
      slug: 'fotovoltaice-casa-verde',
      titleRo: 'Casa Verde Fotovoltaice',
      titleEn: 'Casa Verde Photovoltaics',
      aboutLabel: 'despre program',
      aboutTitle: 'Un impact pozitiv pentru casa ta și planetă',
      aboutDescription: 'Programul Casa Verde Fotovoltaice oferă finanțare nerambursabilă pentru instalarea sistemelor fotovoltaice. Cu dedicare față de energia curată, suntem alături de tine în fiecare pas al procesului.',
      aboutPoints: ['Expertiză și Experiență', 'Consultanță Gratuită', 'Produse Solare de Calitate', 'Servicii Complete End-to-End'],
      aboutImage: 'assets/images/why-choose-img-1.jpg',
      strategyTitle: 'Planificare & Strategie',
      strategyDescription: 'Procesul nostru de aplicare este simplu și eficient. Echipa noastră te ghidează prin fiecare etapă, de la documentație până la instalare.',
      strategyDescriptionExtra: 'Ne asigurăm că dosarul tău de finanțare este complet și corect pentru a maximiza șansele de aprobare.',
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyProcessTitle: 'Procesul nostru de Planificare & Strategie',
      strategyPoints: ['Analiză și consultanță inițială', 'Pregătire documentație dosar', 'Depunere cerere finanțare', 'Instalare și recepție sistem'],
      whyUsLabel: 'de ce să ne alegi',
      whyUsTitle: 'Explorează cele mai recente proiecte solare',
      whyUsDescription: 'Credem în puterea energiei regenerabile pentru a crea un viitor mai sustenabil. Cu pasiune pentru energia curată și angajament față de clienții noștri.',
      projects: [
        { image: 'assets/images/project-1.jpg', title: 'Instalație Rezidențială', category: 'Casa Verde' },
        { image: 'assets/images/project-2.jpg', title: 'Parc Solar Industrial', category: 'Comercial' },
        { image: 'assets/images/project-3.jpg', title: 'Sistem Hibrid', category: 'Rezidențial' },
        { image: 'assets/images/project-4.jpg', title: 'Instalație Agricolă', category: 'Agri-Solar' },
      ],
      qualityTitle: 'Calitate Garantată',
      qualityDescription: 'Panourile solare sunt fabricate din sticlă securizată, construite să reziste la grindină și vreme aspră.',
      qualityDescriptionExtra: 'Oferim garanție extinsă pe producție și performanță, asigurând că investiția ta este protejată pe termen lung.',
      qualityPoints: ['Garanție pe performanță panou', 'Monitorizare producție inclusă', 'Service și întreținere', 'Suport tehnic 24/7'],
      qualityImage1: 'assets/images/company-benefit-img-1.jpg',
      qualityImage2: 'assets/images/company-benefit-img-2.jpg',
      qualityCounter: 80,
      qualityCounterLabel: 'parteneri în toată lumea',
    },
    {
      slug: 'energie-regenerabila-imm',
      titleRo: 'Energie Regenerabilă IMM',
      titleEn: 'Renewable Energy SME',
      aboutLabel: 'despre program',
      aboutTitle: 'Finanțare pentru întreprinderi mici și mijlocii',
      aboutDescription: 'Programul de finanțare pentru IMM-uri oferă sprijin financiar pentru tranziția la energie verde. Reduceri semnificative ale facturilor și independență energetică.',
      aboutPoints: ['Finanțare până la 90%', 'Procesare rapidă dosar', 'Instalatori certificați', 'Garanție extinsă'],
      aboutImage: 'assets/images/why-choose-img-2.jpg',
      strategyTitle: 'Planificare & Strategie IMM',
      strategyDescription: 'Procesul de accesare a finanțării pentru IMM-uri este adaptat nevoilor specifice ale fiecărei afaceri.',
      strategyDescriptionExtra: 'Echipa noastră specializată asigură o tranziție fluidă și eficientă spre energia regenerabilă.',
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyProcessTitle: 'Procesul de Planificare pentru IMM',
      strategyPoints: ['Audit energetic inițial', 'Dimensionare sistem optim', 'Dosarul de finanțare', 'Implementare și monitorizare'],
      whyUsLabel: 'de ce să ne alegi',
      whyUsTitle: 'Proiecte realizate pentru IMM-uri',
      whyUsDescription: 'Zeci de afaceri locale au beneficiat deja de soluțiile noastre de energie solară cu finanțare nerambursabilă.',
      projects: [
        { image: 'assets/images/project-1.jpg', title: 'Fabrică de Producție', category: 'Industrial' },
        { image: 'assets/images/project-2.jpg', title: 'Complex Hotelier', category: 'HoReCa' },
        { image: 'assets/images/project-3.jpg', title: 'Depozit Logistic', category: 'Logistică' },
        { image: 'assets/images/project-4.jpg', title: 'Showroom Auto', category: 'Retail' },
      ],
      qualityTitle: 'Calitate Certificată',
      qualityDescription: 'Toate echipamentele utilizate sunt certificate conform standardelor europene și internaționale.',
      qualityDescriptionExtra: 'Garanțiile noastre acoperă atât echipamentele cât și performanța sistemului pe termen lung.',
      qualityPoints: ['Certificate CE și TÜV', 'Garanție echipamente 10 ani', 'Garanție performanță 25 ani', 'Monitorizare online inclusă'],
      qualityImage1: 'assets/images/company-benefit-img-1.jpg',
      qualityImage2: 'assets/images/company-benefit-img-2.jpg',
      qualityCounter: 120,
      qualityCounterLabel: 'IMM-uri finanțate',
    },
  ];

  getAll(): ProgramFinantareDto[] {
    return this.programs;
  }

  getBySlug(slug: string): ProgramFinantareDto | undefined {
    return this.programs.find(p => p.slug === slug);
  }
}
