import { Injectable } from '@angular/core';
import { ProgramFinantareDto } from '../models/program-finantare.models';

@Injectable({ providedIn: 'root' })
export class ProgrameFinantareDataService {
  private programs: ProgramFinantareDto[] = [

    {
      slug: 'casa-verde-fotovoltaice',
      titleRo: 'Casa Verde Fotovoltaice',
      titleEn: 'Casa Verde Photovoltaics',
      aboutLabel: 'despre program',
      aboutTitle: '30.000 lei finanțare nerambursabilă pentru panouri solare',
      aboutDescription: 'Programul Casa Verde Fotovoltaice, administrat de Administrația Fondului pentru Mediu (AFM), oferă persoanelor fizice finanțare nerambursabilă de până la 30.000 lei pentru instalarea de sisteme fotovoltaice. Programul acoperă un sistem de 3 kW + baterie de stocare, cu contribuție proprie de la 3.000 lei.',
      aboutPoints: [
        '30.000 lei finanțare nerambursabilă AFM',
        'Sistem fotovoltaic + baterie de stocare inclusă',
        'Contribuție proprie de la 3.000 lei',
        'Garanție 30 ani echipamente Huawei & JinkoSolar',
      ],
      aboutImage: 'assets/images/why-choose-img-1.jpg',
      strategyTitle: 'Casa Verde Fotovoltaice 2024',
      strategyDescription: 'Programul se adresează persoanelor fizice care dețin o locuință în România și doresc să instaleze un sistem fotovoltaic. JustElectro este instalator autorizat AFM și te ghidează prin fiecare pas al procesului.',
      strategyDescriptionExtra: 'Ne ocupăm de toată documentația necesară depunerii dosarului, de la evaluarea amplasamentului până la dosarul AFM complet și racordarea la rețea.',
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyProcessTitle: 'Cum accesezi finanțarea Casa Verde',
      strategyPoints: [
        'Înregistrare și depunere dosar AFM',
        'Aprobare finanțare și semnare contract',
        'Instalare sistem fotovoltaic + baterie',
        'Racordare rețea și decontare AFM',
      ],
      whyUsLabel: 'pachete disponibile',
      whyUsTitle: 'Pachete Casa Verde 2024 — contribuție proprie',
      whyUsDescription: 'Oferim pachete complete cu echipamente premium Huawei și JinkoSolar, cu prețuri fixe pentru contribuția proprie. Toate prețurile includ proiectare, instalare, mentenanță și suport tehnic.',
      projects: [
        { image: 'assets/images/project-1.jpg', title: 'Sistem 4.4 kWp + baterie 5 kW', category: '3.000 lei contribuție proprie' },
        { image: 'assets/images/project-2.jpg', title: 'Sistem 5 kW + baterie 5 kW', category: '3.300 lei contribuție proprie' },
        { image: 'assets/images/project-3.jpg', title: 'Sistem 6 kW + baterie 5 kW', category: '4.000 lei contribuție proprie' },
        { image: 'assets/images/project-4.jpg', title: 'Sistem trifazat 8 kW + baterie 5 kW', category: '6.500 lei contribuție proprie' },
      ],
      qualityTitle: 'Echipamente Certificate — Huawei & JinkoSolar',
      qualityDescription: 'Toate pachetele Casa Verde includ invertoare Huawei, panouri JinkoSolar și acumulatoare Huawei LUNA2000 — branduri de top cu garanții extinse și performanță dovedită.',
      qualityDescriptionExtra: 'Lucrăm exclusiv cu echipamente certificate și furnizori autorizați, asigurând conformitatea cu cerințele programului AFM și performanță maximă pe termen lung.',
      qualityPoints: [
        'Invertoare Huawei cu garanție 10 ani',
        'Panouri JinkoSolar certificare internațională',
        'Acumulatoare Huawei LUNA2000',
        'Garanție sistem 30 ani',
      ],
      qualityImage1: 'assets/images/company-benefit-img-1.jpg',
      qualityImage2: 'assets/images/company-benefit-img-2.jpg',
      qualityCounter: 30000,
      qualityCounterLabel: 'lei finanțare nerambursabilă',
    },

    {
      slug: 'repowereu',
      titleRo: 'RePowerEU',
      titleEn: 'RePowerEU',
      aboutLabel: 'despre program',
      aboutTitle: 'Vouchere de 5.000 euro din fonduri europene PNRR',
      aboutDescription: 'Programul RePowerEU oferă vouchere de 5.000 euro (aproximativ 25.000 lei) pentru instalarea de panouri fotovoltaice și baterii de stocare, finanțate din Planul Național de Redresare și Reziliență (PNRR). JustElectro este instalator înrolat în program.',
      aboutPoints: [
        'Voucher 5.000 euro fonduri europene PNRR',
        'Panouri fotovoltaice min. 3 kW + baterie min. 5 kW',
        'Componenta A — populație vulnerabilă',
        'Componenta B — persoane cu sistem solar existent',
      ],
      aboutImage: 'assets/images/why-choose-img-2.jpg',
      strategyTitle: 'RePowerEU — Etape și Componente',
      strategyDescription: 'Programul RePowerEU se desfășoară în două etape. Etapa 1 are două componente: Componenta A pentru populație vulnerabilă și Componenta B pentru persoanele care dețin deja panouri fotovoltaice de minimum 3 kW și doresc să adauge baterie de stocare.',
      strategyDescriptionExtra: 'Etapa 2 se adresează populației generale care nu deține niciun sistem și se deschide în martie 2025, cu un buget de peste 310 milioane euro.',
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyProcessTitle: 'Etapele Programului RePowerEU',
      strategyPoints: [
        'Etapa 1A — populație vulnerabilă (panouri + baterie)',
        'Etapa 1B — deținători sistem solar min. 3 kW (doar baterie)',
        'Etapa 2 — populație generală (martie 2025)',
        'Depunere proiecte: 02 dec. 2024 – 03 feb. 2025',
      ],
      whyUsLabel: 'pachete repowereu',
      whyUsTitle: 'Pachete baterii de stocare cu voucher RePowerEU',
      whyUsDescription: 'Cu un voucher RePowerEU de 5.000 euro, poți instala o baterie de stocare Huawei LUNA2000 de înaltă capacitate. JustElectro îți oferă pachete complete cu instalare și punere în funcțiune inclusă.',
      projects: [
        { image: 'assets/images/project-5.jpg', title: 'Acumulator LUNA2000 — 10 kW', category: 'GRATUIT cu 1 voucher' },
        { image: 'assets/images/project-6.jpg', title: 'Acumulator LUNA2000 — 14 kW', category: '8.000 lei cu 1 voucher' },
        { image: 'assets/images/project-7.jpg', title: 'Acumulator LUNA2000 — 15 kW', category: '9.000 lei cu 1 voucher' },
        { image: 'assets/images/project-8.jpg', title: 'Back-up Box monofazat', category: 'Opțional — 4.500 lei' },
      ],
      qualityTitle: 'Documente necesare pentru RePowerEU',
      qualityDescription: 'Procesul de înscriere este simplu și rapid. Ai nevoie de câteva documente de bază, iar echipa JustElectro se ocupă de tot restul procesului birocratic.',
      qualityDescriptionExtra: 'Pentru Componenta B (deținători sistem solar existent), este necesar suplimentar certificatul de racordare care dovedește existența unui sistem de minimum 3 kW.',
      qualityPoints: [
        'Act de identitate beneficiar',
        'Extras de carte funciară (max. 60 zile)',
        'Certificat racordare sistem solar — doar Comp. B',
        'JustElectro se ocupă de restul documentației',
      ],
      qualityImage1: 'assets/images/company-benefit-img-1.jpg',
      qualityImage2: 'assets/images/company-benefit-img-2.jpg',
      qualityCounter: 5000,
      qualityCounterLabel: 'euro voucher PNRR',
    },

    {
      slug: 'start-up-nation',
      titleRo: 'Start-Up Nation 2024',
      titleEn: 'Start-Up Nation 2024',
      aboutLabel: 'despre program',
      aboutTitle: '200.000 lei finanțare nerambursabilă pentru IMM-uri',
      aboutDescription: 'Programul Start-Up Nation 2024 oferă finanțare nerambursabilă de până la 200.000 lei pentru întreprinderi mici și mijlocii nou create, acoperind până la 95% din cheltuielile eligibile. Instalarea de panouri fotovoltaice și pompe de căldură sunt cheltuieli eligibile în cadrul programului.',
      aboutPoints: [
        'Finanțare nerambursabilă până la 200.000 lei',
        'Acoperă până la 95% cheltuieli eligibile',
        'Panouri fotovoltaice și pompe de căldură eligibile',
        'Cofinanțare proprie minimum 10%',
      ],
      aboutImage: 'assets/images/why-choose-img-1.jpg',
      strategyTitle: 'Start-Up Nation 2024 — Cei Doi Piloni',
      strategyDescription: 'Programul este structurat pe doi piloni: Pilonul I se adresează persoanelor de peste 30 de ani, șomerilor și grupurilor dezavantajate, cu un buget de 150,4 milioane euro. Pilonul II este destinat tinerilor între 18 și 30 de ani, cu un buget de 295,75 milioane euro.',
      strategyDescriptionExtra: 'JustElectro te sprijină în accesarea finanțării Start-Up Nation pentru achiziția și instalarea sistemelor fotovoltaice și a pompelor de căldură, componente esențiale ale oricărei afaceri moderne.',
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyProcessTitle: 'Pașii pentru accesarea Start-Up Nation',
      strategyPoints: [
        'Înregistrare platformă și curs antreprenorial',
        'Elaborare și depunere plan de afaceri',
        'Evaluare și selecție proiect',
        'Implementare în 12 luni de la aprobare',
      ],
      whyUsLabel: 'ce poate finanța',
      whyUsTitle: 'Ce poți achiziționa cu finanțarea Start-Up Nation',
      whyUsDescription: 'Finanțarea Start-Up Nation poate acoperi investițiile în energie regenerabilă necesare afacerii tale. JustElectro îți oferă consultanță gratuită și soluții complete pentru a maximiza valoarea finanțării.',
      projects: [
        { image: 'assets/images/project-1.jpg', title: 'Sisteme fotovoltaice comerciale', category: 'Eligibil Start-Up Nation' },
        { image: 'assets/images/project-2.jpg', title: 'Pompe de căldură', category: 'Eligibil Start-Up Nation' },
        { image: 'assets/images/project-3.jpg', title: 'Stații de încărcare EV', category: 'Eligibil Start-Up Nation' },
        { image: 'assets/images/project-4.jpg', title: 'Instalații electrice complete', category: 'Eligibil Start-Up Nation' },
      ],
      qualityTitle: 'Condiții de Eligibilitate',
      qualityDescription: 'Pentru a beneficia de finanțare Start-Up Nation, firma trebuie să fie nou creată și să angajeze cel puțin două persoane. Este necesar un curs de competențe antreprenoriale și o cofinanțare proprie de minimum 10%.',
      qualityDescriptionExtra: 'Echipa JustElectro îți oferă consultanță gratuită pentru a înțelege exact ce condiții trebuie îndeplinite și cum poți maximiza valoarea finanțării pentru investițiile în energie.',
      qualityPoints: [
        'Firmă nou creată cu min. 2 angajați',
        'Curs competențe antreprenoriale obligatoriu',
        'Cofinanțare proprie minimum 10%',
        'Consultanță gratuită JustElectro',
      ],
      qualityImage1: 'assets/images/company-benefit-img-1.jpg',
      qualityImage2: 'assets/images/company-benefit-img-2.jpg',
      qualityCounter: 200000,
      qualityCounterLabel: 'lei finanțare nerambursabilă',
    },

  ];

  getAll(): ProgramFinantareDto[] {
    return this.programs;
  }

  getBySlug(slug: string): ProgramFinantareDto | undefined {
    return this.programs.find(p => p.slug === slug);
  }
}
