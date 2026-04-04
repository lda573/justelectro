export interface ProgramFinantareDto {
  slug: string;
  titleRo: string;
  titleEn: string;
  // Despre program (why choose + strategy)
  aboutLabel: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutPoints: string[];
  aboutImage: string;
  strategyTitle: string;
  strategyDescription: string;
  strategyDescriptionExtra: string;
  strategyImage: string;
  strategyProcessTitle: string;
  strategyPoints: string[];
  // De ce sa ne alegi (our projects style)
  whyUsLabel: string;
  whyUsTitle: string;
  whyUsDescription: string;
  projects: { image: string; title: string; category: string }[];
  // Calitate (warranties style)
  qualityTitle: string;
  qualityDescription: string;
  qualityDescriptionExtra: string;
  qualityPoints: string[];
  qualityImage1: string;
  qualityImage2: string;
  qualityCounter: number;
  qualityCounterLabel: string;
}
