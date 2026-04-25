import { SanityImage } from './about.models';

export interface PortfolioItemDto {
  slug: { current: string };
  order: number;
  category: string;
  coverImage: SanityImage;
  gallery?: SanityImage[];
  title: string;
  description: string;
}
