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

export interface LocalizedBulletPoint {
  _key: string;
  _type: 'localizedBulletPoint';
  ro: string;
  en: string;
}

export interface QualityItem {
  _key: string;
  icon?: SanityImage;
  title: LocalizedString;
}

export interface Certification {
  _key: string;
  logo: SanityImage;
  name: string;
  number?: string;
  description: string;
}

export interface Partner {
  _key: string;
  logo: SanityImage;
  name?: string;
}

export interface AboutPage {
  story: {
    heading: LocalizedString;
    body: LocalizedString;
    yearsExperience: number;
    image1: SanityImage;
    image2: SanityImage;
    qualityItems: QualityItem[];
    bulletPoints: LocalizedBulletPoint[];
  };
  certifications: Certification[];
  partners: Partner[];
}
