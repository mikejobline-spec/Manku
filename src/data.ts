import { MachineryItem, MaterialItem, PortfolioItem } from './types';

export const MACHINERY_DATA: MachineryItem[] = [
  {
    id: 'm1',
    name: 'Heidelberg Speedmaster XL 106',
    category: 'offset',
    image: '/src/assets/images/offset_press_cylinders_1782462345279.jpg',
    description: 'The peak of offset printing technology. A 6-color sheet-fed offset press featuring fully automated plate changes, color spectrophotometry calibration, and double-sided printing in a single pass.',
    specs: {
      speed: '18,000 sheets/hour',
      maxSheetSize: '750 x 1060 mm',
      resolution: '2,400 x 2,400 dpi equivalent',
      keyFeature: 'Prinect Inpress Control 3 inline color monitoring'
    },
    capacity: 'Heavy-volume publications, corporate reports, luxury catalogs, and premium marketing collateral.'
  },
  {
    id: 'm2',
    name: 'Komori Lithrone G40',
    category: 'offset',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    description: 'A 4-color press equipped with high-performance UV-LED curing technology. Sheets are dry instantly, allowing for immediate post-press binding and finishing on uncoated or non-porous media.',
    specs: {
      speed: '16,500 sheets/hour',
      maxSheetSize: '720 x 1030 mm',
      resolution: '1,200 x 2,400 dpi',
      keyFeature: 'H-UV curing for instant drying and vivid ink holdout'
    },
    capacity: 'Brochures, premium covers, packaging sleeves, synthetic stock materials, and fast-turnaround offset booklets.'
  },
  {
    id: 'm3',
    name: 'HP Indigo 12000 HD Digital Press',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=800',
    description: 'Bringing offset quality to digital scales. Ideal for customized variable data printing (VDP), short-run luxury catalogs, and highly detailed art prints with up to 7 color stations.',
    specs: {
      speed: '4,600 sheets/hour (B2 size)',
      maxSheetSize: '530 x 750 mm (B2)',
      resolution: '1,625 dpi (HD high-definition writing)',
      keyFeature: 'Liquid ElectroInk technology & variable data nesting'
    },
    capacity: 'Variable-data mailers, short-run bespoke art books, custom event invitations, and mockups.'
  },
  {
    id: 'm4',
    name: 'Kongsberg XP Auto Precision Cutter',
    category: 'post-press',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed computerized die-cutting and creasing table. Enables completely toolless cutting, creasing, and routing for prototypes, custom packaging shapes, and corrugated boards.',
    specs: {
      speed: '100 m/min cutting speed',
      maxSheetSize: '1680 x 3200 mm',
      resolution: '0.02 mm positioning accuracy',
      keyFeature: 'Continuous heavy-duty feeder & automated conveyor'
    },
    capacity: 'Bespoke packaging, point-of-sale displays, custom structural folders, and complex die-cuts.'
  },
  {
    id: 'm5',
    name: 'Océ Arizona 1380 GT flatbed plotter',
    category: 'large-format',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    description: 'High-precision flatbed inkjet plotter using UV-curable inks. Prints directly on rigid media like foam boards, acrylic, aluminum, and glass as well as standard roll-up vinyl.',
    specs: {
      speed: '52.8 m²/hour',
      maxSheetSize: '1250 x 2500 mm (Rigid Bed)',
      resolution: 'VariaDot grayscale printhead 1,200 dpi',
      keyFeature: 'White ink capability and multi-layer textured prints'
    },
    capacity: 'Trade show backdrops, outdoor canvas banners, acrylic display panels, and high-impact signage.'
  }
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'mat1',
    name: 'Premium Silk Coated Cardstock',
    category: 'cardstock',
    weight: '350 gsm',
    thickness: '0.38 mm',
    description: 'Features a luxurious, ultra-smooth satin surface that strikes a perfect balance between non-glare readability and high-contrast color vibrancy. Optimal ink density retention.',
    finish: 'Silk Matte Finish',
    features: ['FSC® Certified', 'Heavy-weight rigidity', 'Acid-free for durability', 'Compatible with spot UV'],
    stockLevel: 'In Stock',
    basePricePer1000: 180
  },
  {
    id: 'mat2',
    name: 'Classic Linen Text Paper',
    category: 'fine-paper',
    weight: '120 gsm',
    thickness: '0.15 mm',
    description: 'Woven with an elegant, traditional linen texture that provides an tactile sense of prestige and heritage. Excellent for luxury corporate stationery and premium brand collateral.',
    finish: 'Tactile Cross-Weave Linen',
    features: ['30% Post-Consumer Waste Recycled', 'Rich tactile finish', 'High opacity', 'Ink-absorbent depth'],
    stockLevel: 'In Stock',
    basePricePer1000: 125
  },
  {
    id: 'mat3',
    name: 'Eco-Kraft Raw Unbleached Board',
    category: 'specialty',
    weight: '320 gsm',
    thickness: '0.45 mm',
    description: 'An organic, rustic-brown board crafted from 100% recycled unbleached wood pulp. Offers outstanding structural strength and a warm, natural aesthetic for sustainable packaging designs.',
    finish: 'Natural Matte Textured Raw',
    features: ['100% Recycled & Biodegradable', 'High burst strength', 'Unique organic look', 'Completely chlorine-free'],
    stockLevel: 'In Stock',
    basePricePer1000: 150
  },
  {
    id: 'mat4',
    name: 'Fine Art Cotton Rag Canvas',
    category: 'specialty',
    weight: '380 gsm',
    thickness: '0.52 mm',
    description: 'A museum-grade 100% cotton canvas material with a pronounced matte surface texture. Engineered for high-end art reproductions and gallery-standard print results.',
    finish: 'Museum-Matte Rough Textile',
    features: ['Acid-free archival grade', 'OBA-free (No optical brighteners)', 'Extreme color gamut support', 'Water-resistant coat'],
    stockLevel: 'Special Order',
    basePricePer1000: 420
  },
  {
    id: 'mat5',
    name: 'Premium Removable Matte Vinyl',
    category: 'vinyl-packaging',
    weight: '220 gsm',
    thickness: '0.22 mm',
    description: 'Heavy-duty poly-synthetic vinyl material with a weather-resistant matte face. Features a specialized pressure-sensitive adhesive that holds strong yet peels away clean without residue.',
    finish: 'Smooth Weatherproof Matte',
    features: ['UV-resistant pigments', 'Tear-proof synthetic substrate', 'Waterproof', 'Clean-release adhesive'],
    stockLevel: 'In Stock',
    basePricePer1000: 240
  },
  {
    id: 'mat6',
    name: 'Metallic Pearl Shimmer Card',
    category: 'specialty',
    weight: '300 gsm',
    thickness: '0.36 mm',
    description: 'Infused with iridescent minerals that catch light beautifully, providing a subtle pearlescent metallic glow. Perfect for high-end cosmetics packaging, luxury envelopes, and event invitations.',
    finish: 'Iridescent Pearl Sheen',
    features: ['Reflective mineral coating', 'Scuff-resistant', 'Elegant light-catching glow', 'Ideal for hot foil stamping'],
    stockLevel: 'Limited Stock',
    basePricePer1000: 290
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Luminary Annual Design Anthology',
    category: 'publishing',
    image: '/src/assets/images/printed_portfolio_luxury_1782462359826.jpg',
    description: 'A 240-page limited edition design showcase. Featuring rich dark inks, sharp vector layout alignments, and pristine gold foil texturing on raw textured stocks.',
    specsUsed: {
      paperStock: 'Classic Linen 120 gsm (Inner pages) & Metallic Pearl 300 gsm (Cover)',
      pressUsed: 'Heidelberg Speedmaster XL 106 (6-Color Mode)',
      specialFinishes: ['Raised Gold Hot Foil Stamping', 'Thread-sewn open exposed binding']
    }
  },
  {
    id: 'p2',
    title: 'Verve Organics Premium Packaging Suite',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800',
    description: 'Eco-conscious box and sleeve packaging for a high-end skincare label. Crafted with structural folds and vegetable-based inks to emphasize organic corporate values.',
    specsUsed: {
      paperStock: 'Eco-Kraft Raw Unbleached Board 320 gsm',
      pressUsed: 'Komori Lithrone G40 (H-UV Instant Cure)',
      specialFinishes: ['Precision toolless Kongsberg Die-Cutting', 'Matte white ink printing overlays']
    }
  },
  {
    id: 'p3',
    title: 'Metropolis Architectural Monograph',
    category: 'publishing',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    description: 'An architectural photography layout with extreme shadow detail and heavy ink saturation. Uses H-UV curing technology to prevent dry-back and maintain ultra-sharp contrast.',
    specsUsed: {
      paperStock: 'Premium Silk Coated Cardstock 350 gsm',
      pressUsed: 'Heidelberg Speedmaster XL 106',
      specialFinishes: ['Precision flood matte varnish coating', 'Bespoke flat lay layflat binding']
    }
  },
  {
    id: 'p4',
    title: 'Chroma Exhibition Large Scale Signage',
    category: 'promotional',
    image: '/src/assets/images/prepress_proofing_station_1782462376789.jpg',
    description: 'A series of high-precision acrylic wall panels and giant canvas backdrops created for an international design expo, showing exquisite color calibration fidelity.',
    specsUsed: {
      paperStock: 'Fine Art Cotton Rag Canvas 380 gsm & Clear Acrylic Sheets',
      pressUsed: 'Océ Arizona 1380 GT flatbed plotter',
      specialFinishes: ['UV multi-layer textured varnish', 'Automated Kongsberg Routing']
    }
  }
];
