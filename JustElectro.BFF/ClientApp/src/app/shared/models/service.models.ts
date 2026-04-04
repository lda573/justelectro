export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDto {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  // detaliu
  fullDescription?: string;
  fullDescriptionExtra?: string;
  image?: string;
  // why choose us
  whyChooseDescription?: string;
  whyChoosePoints?: string[];
  whyChooseVideoUrl?: string;
  whyChooseVideoImage?: string;
  // benefits
  benefits?: BenefitItem[];
  // strategy
  strategyImage?: string;
  strategyTitle?: string;
  strategyDescription?: string;
  strategyDescriptionExtra?: string;
  strategyPoints?: string[];
  // faqs
  faqs?: FaqItem[];
}
