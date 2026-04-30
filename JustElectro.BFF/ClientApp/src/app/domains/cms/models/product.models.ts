import { SanityImage, LocalizedString, LocalizedText, LocalizedStringArray } from './about.models';

export interface ProductSpec {
  _key: string;
  label: string;
  value: string;
}

export interface ProductDto {
  _id: string;
  slug: { current: string };
  order: number;
  coverImage: SanityImage;
  gallery?: SanityImage[];
  category: string;
  title: LocalizedString;
  shortDescription: LocalizedText;
  specs: ProductSpec[];
  about: {
    description: LocalizedText;
    descriptionExtra?: LocalizedText;
    points: LocalizedStringArray;
  };
  durability: {
    title: LocalizedString;
    description: LocalizedText;
    descriptionExtra?: LocalizedText;
    points: LocalizedStringArray;
    image: SanityImage;
  };
}
