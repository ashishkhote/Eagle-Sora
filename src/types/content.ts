export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  impact: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface ProductOffering {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  keyFeatures: string[];
}

export interface MatrixRow {
  feature: string;
  eagleSora: boolean;
  zoho: boolean;
  wipro: boolean;
  notes?: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  milestones: string[];
  status: 'active' | 'upcoming' | 'planned';
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  nationality: string;
  bio: string;
  quote: string;
  image?: string;
}

export interface SiteContent {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    heroTagline: string;
    motto: string;
    mission: string;
    vision: string;
    aboutParagraph: string;
    location: string;
    address: string;
    email: string;
    phone: string;
    website: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    subtitle: string;
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    badges: {
      id: string;
      label: string;
      iconName: string;
    }[];
  };
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  quickCapabilities: Capability[];
  challenges: Challenge[];
  solutions: Solution[];
  services: ServiceDetail[];
  products: ProductOffering[];
  competitorMatrix: MatrixRow[];
  roadmap: RoadmapPhase[];
  stpAnalysis: {
    segmentation: {
      industries: string[];
      techNeeds: string[];
      geography: string[];
    };
    targeting: string[];
    positioning: string[];
  };
  capitalAllocation: {
    category: string;
    amountInr: string;
    percentage: number;
    description: string;
  }[];
  leaders: Leader[];
  faq: {
    question: string;
    answer: string;
  }[];
}
