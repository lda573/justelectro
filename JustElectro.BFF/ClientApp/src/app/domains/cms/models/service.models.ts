import { SanityImage } from './about.models';

export interface ServiceBenefit {
  _key: string;
  icon: SanityImage;
  title: string;
  description: string;
}

export interface ServiceContentBlock {
  heading: string;
  body1: string;
  body2?: string;
  points: string[];
  image1: SanityImage;
  image2: SanityImage;
  counterValue: number;
  counterLabel: string;
}

export interface ServiceFaq {
  _key: string;
  question: string;
  answer: string;
}

export interface ServiceDto {
  slug: { current: string };
  order: number;
  icon: SanityImage;
  image: SanityImage;
  title: string;
  shortDescription: string;
  fullDescription: string;
  fullDescriptionExtra?: string;
  strategyPoints: string[];
  benefits: ServiceBenefit[];
  contentBlock: ServiceContentBlock;
  faqs: ServiceFaq[];
}
