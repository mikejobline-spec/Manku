export type MachineCategory = 'offset' | 'post-press' | 'pre-press';

export interface MachineryItem {
  id: string;
  name: string;
  category: MachineCategory;
  image: string;
  description: string;
  specs: {
    speed: string;
    maxSheetSize: string;
    resolution: string;
    keyFeature: string;
  };
  capacity: string;
}

export type MaterialCategory = 'cardstock' | 'fine-paper' | 'specialty' | 'vinyl-packaging';

export interface MaterialItem {
  id: string;
  name: string;
  category: MaterialCategory;
  weight: string;
  thickness: string;
  description: string;
  finish: string;
  features: string[];
  stockLevel: 'In Stock' | 'Limited Stock' | 'Special Order';
  basePricePer1000: number; // base price for 1000 sheets
}

export type PortfolioCategory = 'corporate' | 'packaging' | 'publishing' | 'promotional';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
  specsUsed: {
    paperStock: string;
    pressUsed: string;
    specialFinishes: string[];
  };
}

export interface ClientInquiry {
  id: string;
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  subject: string;
  materialId: string;
  size: string;
  quantity: number;
  customMessage: string;
  status: 'Received' | 'Assigned to Estimator' | 'Quote Generated';
  createdAt: string;
}
