import { SanityImage, LocalizedString, LocalizedText, LocalizedStringArray } from './about.models';

export interface ServiceBenefit {
  _key: string;
  icon: SanityImage;
  title: LocalizedString;
  description: LocalizedText;
}

export interface ServiceContentBlock {
  heading: LocalizedString;
  body1: LocalizedText;
  body2?: LocalizedText;
  points: LocalizedStringArray;
  image1: SanityImage;
  image2: SanityImage;
  counterValue: number;
  counterLabel: LocalizedString;
}

export interface ServiceFaq {
  _key: string;
  question: LocalizedString;
  answer: LocalizedText;
}

export interface ServiceDto {
  _id: string;
  slug: { current: string };
  order: number;
  icon: SanityImage;
  image: SanityImage;
  title: LocalizedString;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  fullDescriptionExtra?: LocalizedText;
  keyPoints: LocalizedStringArray;
  benefits: ServiceBenefit[];
  contentBlock: ServiceContentBlock;
  faqs: ServiceFaq[];
}
