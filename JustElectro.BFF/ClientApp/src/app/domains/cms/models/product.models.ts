import { SanityImage } from './about.models';

export interface ProductSpec {
  _key: string;
  label: string;
  value: string;
}

export interface ProductDto {
  slug: { current: string };
  order: number;
  coverImage: SanityImage;
  gallery?: SanityImage[];
  category: string;
  title: string;
  shortDescription: string;
  specs: ProductSpec[];
  about: {
    description: string;
    descriptionExtra?: string;
    points: string[];
  };
  durability: {
    title: string;
    description: string;
    descriptionExtra?: string;
    points: string[];
    image: SanityImage;
  };
}
