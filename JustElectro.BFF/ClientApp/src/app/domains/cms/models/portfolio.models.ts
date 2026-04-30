import { SanityImage, LocalizedString, LocalizedText } from './about.models';

export interface PortfolioItemDto {
  _id: string;
  slug: { current: string };
  order: number;
  category: string;
  coverImage: SanityImage;
  gallery?: SanityImage[];
  title: LocalizedString;
  description: LocalizedText;
}
