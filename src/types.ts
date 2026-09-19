export interface ApartmentSpec {
  icon: string;
  label: string;
  value: string;
  detail: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'living' | 'suite' | 'gourmet' | 'lazer' | 'fachada';
  url: string;
  description: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export interface FloorPlan {
  id: string;
  name: string;
  area: string;
  bedrooms: string;
  suites: string;
  parking: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
