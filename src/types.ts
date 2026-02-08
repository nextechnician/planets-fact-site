export type ContentBlock = {
   content: string;
   source: string;
};

export type Images = {
   planet: string;
   internal: string;
   geology: string;
};

export type Planet = {
   name: string;
   overview: ContentBlock;
   structure: ContentBlock;
   geology: ContentBlock;
   rotation: string;
   revolution: string;
   radius: string;
   temperature: string;
   images: Images;
};

export type PlanetSection = 'overview' | 'structure' | 'geology';
