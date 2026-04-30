import { SanityImage, LocalizedString, LocalizedText, LocalizedStringArray } from './about.models';

export interface FinancingProject {
  _key: string;
  image: SanityImage;
  title: LocalizedString;
  category: LocalizedString;
}

export interface FinancingProgramDto {
  _id: string;
  slug: { current: string };
  order: number;
  icon: SanityImage;
  about: {
    label: LocalizedString;
    title: LocalizedString;
    description: LocalizedText;
    points: LocalizedStringArray;
    image: SanityImage;
  };
  strategy: {
    title: LocalizedString;
    description: LocalizedText;
    descriptionExtra?: LocalizedText;
    image: SanityImage;
    processTitle: LocalizedString;
    points: LocalizedStringArray;
  };
  whyUs: {
    label: LocalizedString;
    title: LocalizedString;
    description: LocalizedText;
    projects: FinancingProject[];
  };
  quality: {
    title: LocalizedString;
    description: LocalizedText;
    descriptionExtra?: LocalizedText;
    points: LocalizedStringArray;
    image1: SanityImage;
    image2: SanityImage;
    counterValue: number;
    counterLabel: LocalizedString;
  };
}
