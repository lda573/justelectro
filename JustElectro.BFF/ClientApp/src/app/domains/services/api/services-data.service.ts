import { Injectable } from '@angular/core';
import { ServiceDto } from '../../../shared/models/service.models';

@Injectable({ providedIn: 'root' })
export class ServicesDataService {
  private services: ServiceDto[] = [
    {
      slug: 'solar-energy',
      title: 'solar energy',
      icon: 'assets/images/icon-services-1.svg',
      shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.',
      image: 'assets/images/service-img-1.jpg',
      fullDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      fullDescriptionExtra: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      whyChooseDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      whyChoosePoints: ['Experience and Expertise', 'Quality and Innovation', 'Customer Satisfaction', 'Comprehensive Solutions'],
      whyChooseVideoUrl: 'https://www.youtube.com/watch?v=Y-x0efG1seA',
      whyChooseVideoImage: 'assets/images/service-why-choose-img.jpg',
      benefits: [
        { icon: 'assets/images/icon-service-benefit-1.svg', title: 'solar renewable energy', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-2.svg', title: 'power energy saving', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-3.svg', title: 'customized solutions', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-4.svg', title: 'affordable prices services', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-5.svg', title: 'customer satisfaction', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-6.svg', title: 'environmentally responsible', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-7.svg', title: 'fast and efficient service', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
        { icon: 'assets/images/icon-service-benefit-8.svg', title: 'commitment to safety', description: 'Our team of experts has years of experience in the industry and a proven track record of success.' },
      ],
      strategyImage: 'assets/images/service-strategy-img.jpg',
      strategyTitle: 'Our Planning & Strategy Process',
      strategyDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      strategyDescriptionExtra: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took',
      strategyPoints: ['Research beyond the business plan', 'Marketing options and rates', 'The ability to turnaround consulting', 'It was popularised in the 1960s with the.'],
      faqs: [
        { question: 'What is Solar Energy?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
        { question: 'How does Solar Energy work?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
        { question: 'What is Renewable Energy?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
        { question: 'I have a bigger project. Can you handle it?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
        { question: 'How do you communicate?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.' },
      ],
    },
    // restul serviciilor rămân cu datele minime de mai înainte...
    { slug: 'hybrid-energy', title: 'hybrid energy', icon: 'assets/images/icon-services-2.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'wind-energy', title: 'wind energy', icon: 'assets/images/icon-services-3.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'renewable-energy', title: 'renewable energy', icon: 'assets/images/icon-services-4.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'solar-maintenance', title: 'solar maintenance', icon: 'assets/images/icon-services-5.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'solar-repair', title: 'solar repair', icon: 'assets/images/icon-services-6.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'power-storage', title: 'power storage', icon: 'assets/images/icon-services-7.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
    { slug: 'wind-maintenance', title: 'wind maintenance', icon: 'assets/images/icon-services-8.svg', shortDescription: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: 'assets/images/service-img-1.jpg' },
  ];

  getAll(): ServiceDto[] {
    return this.services;
  }

  getBySlug(slug: string): ServiceDto | undefined {
    return this.services.find((s) => s.slug === slug);
  }
}
