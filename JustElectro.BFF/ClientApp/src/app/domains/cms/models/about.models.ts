export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number; width: number; height: number };
  alt?: string;
}

export interface QualityItem {
  icon: SanityImage;
  title: string;
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
    heading: string;
    body: string;
    yearsExperience: number;
    image1: SanityImage;
    image2: SanityImage;
    qualityItems: QualityItem[];
    bulletPoints: string[];
  };
  certifications: Certification[];
  partners: Partner[];
}
