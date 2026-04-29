export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number; width: number; height: number };
  alt?: string;
}

export interface LocalizedString {
  ro: string;
  en: string;
}

export interface LocalizedText {
  ro: string;
  en: string;
}

export interface LocalizedStringArray {
  ro: string[];
  en: string[];
}

export interface QualityItem {
  _key: string;
  icon: SanityImage;
  title: LocalizedString;
}

export interface LocalizedBulletPoint {
  _key: string;
  ro: string;
  en: string;
}

export interface Certification {
  _id: string;
  order: number;
  logo: SanityImage;
  name: LocalizedString;
  number?: string;
  description: LocalizedString;
}

export interface PartnerSocial {
  _key: string;
  icon: string;
  url: string;
}

export interface Partner {
  _id: string;
  order: number;
  logo: SanityImage;
  name?: string;
  role?: string;
  socials?: PartnerSocial[];
}

export interface Expertise {
  heading: LocalizedString;
  body: LocalizedText;
  skills: LocalizedStringArray;
  image: SanityImage;
  clientCount: number;
}

export interface AboutPage {
  story: {
    heading: LocalizedString;
    body: LocalizedText;
    yearsExperience: number;
    image1: SanityImage;
    image2: SanityImage;
    qualityItems: QualityItem[];
    bulletPoints: LocalizedBulletPoint[];
  };
  expertise: Expertise;
}
