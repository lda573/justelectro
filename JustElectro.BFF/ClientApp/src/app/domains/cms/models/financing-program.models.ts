import { SanityImage } from './about.models';

export interface FinancingProject {
  _key: string;
  image: SanityImage;
  title: string;
  category: string;
}

export interface FinancingProgramDto {
  slug: { current: string };
  order: number;
  icon: SanityImage;
  about: {
    label: string;
    title: string;
    description: string;
    points: string[];
    image: SanityImage;
  };
  strategy: {
    title: string;
    description: string;
    descriptionExtra?: string;
    image: SanityImage;
    processTitle: string;
    points: string[];
  };
  whyUs: {
    label: string;
    title: string;
    description: string;
    projects: FinancingProject[];
  };
  quality: {
    title: string;
    description: string;
    descriptionExtra?: string;
    points: string[];
    image1: SanityImage;
    image2: SanityImage;
    counterValue: number;
    counterLabel: string;
  };
}
