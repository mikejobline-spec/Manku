import { MachineryItem, MaterialItem, PortfolioItem } from './types';

export const MACHINERY_DATA: MachineryItem[] = [
  {
    id: 'm1',
    name: 'Heidelberg Speedmaster MOZP',
    category: 'offset',
    image: '/images/MoZp Two unit printing machine.jpg',
    description: 'Two-unit heavy-duty offset printing press equipped with straight and perfector capabilities. It is the workhorse of our book publication and commercial lines.',
    specs: {
      speed: '5,000 sheets/day',
      maxSheetSize: '50x70 cm & 42x60 cm',
      resolution: 'Fine Lithographic Line Screen',
      keyFeature: '16-page output for B5 & 16-page output for A5 format per sheet back & front'
    },
    capacity: 'High-quality textbooks, corporate reports, newsletters, magazines, and double-sided brochures.'
  },
  {
    id: 'm2',
    name: 'Miller Two-Unit Press',
    category: 'offset',
    image: '/images/Miller two unit printing machine.jpg',
    description: 'High-volume two-unit offset press with automatic back & front sheet perfecting. It handles large-scale paper inputs for optimal signature creation.',
    specs: {
      speed: '5,000 sheets/day',
      maxSheetSize: 'Full A1 Paper Input Size',
      resolution: 'Crisp Uniform Density',
      keyFeature: '32-page signature output for A5 size printing back & front simultaneously'
    },
    capacity: 'Massive book printing campaigns, folded catalogs, school booklets, and heavy-duty manual publications.'
  },
  {
    id: 'm3',
    name: 'Heidelberg GTO 52',
    category: 'offset',
    image: '/images/Gto 52 printing machine.jpg',
    description: 'An extremely reliable single-unit offset machine, highly optimized for colored spot prints, numbering work, and high-contrast letterforms.',
    specs: {
      speed: '5,000 prints/day',
      maxSheetSize: '36 x 52 cm',
      resolution: 'Superb Dot Alignment',
      keyFeature: 'Color & Black printing with built-in sequential numbering options'
    },
    capacity: 'Custom receipt books, invoices, official agency forms, envelopes, and single-unit color leaflets.'
  },
  {
    id: 'm4',
    name: 'Heidelberg KORD 64',
    category: 'offset',
    image: '/images/Kord 64 printing machine.jpg',
    description: 'A classic and robust single-color offset lithography press. Highly efficient in maintaining consistent black-ink density for continuous typography layers.',
    specs: {
      speed: '4,500 sheets/day',
      maxSheetSize: '46 x 64 cm',
      resolution: 'Sharp Ink Retention',
      keyFeature: 'Extremely cost-effective single-color print sweeps'
    },
    capacity: 'Internal book pages, black-and-white booklets, newsletters, legal forms, and fine writing pad structures.'
  },
  {
    id: 'm5',
    name: 'Platin letterpress & Offset',
    category: 'offset',
    image: '/images/Platine printing machine.jpg',
    description: 'A specialized single-unit offset and letterpress machine. Perfect for unique letterpress prints, custom-positioned numbering, and rigid media cutting.',
    specs: {
      speed: '5,000 prints/day',
      maxSheetSize: 'A4 Format Max',
      resolution: 'Deep Letterpress Indentation',
      keyFeature: 'Black letterpress print output with inline numbering & A4 die-cutting capabilities'
    },
    capacity: 'Visiting cards, invitations, die-cut specialty stationery, numbered certificates, and custom hangtags.'
  },
  {
    id: 'm6',
    name: 'Polar 115 CM / 115 EMC-Monitor',
    category: 'post-press',
    image: '/images/Polar 115 cm cutting machine.jpg',
    description: 'High-speed heavy-duty programmatic cutting system. Cuts thick stacks of paper with micro-millimeter precision guided by a computerized digital monitor.',
    specs: {
      speed: 'Automatic computerized cycling',
      maxSheetSize: 'Cuts paper up to 115 cm width',
      resolution: '0.01 mm precision digital control',
      keyFeature: 'EMC Monitor profile storage for repeat cuts'
    },
    capacity: 'Trimming books, squaring leaflet stacks, prepping cover boards, and sizing raw sheets before press runs.'
  },
  {
    id: 'm7',
    name: 'COMO 92 Programmable Cutter',
    category: 'post-press',
    image: '/images/Como 92 cutting machine.jpg',
    description: 'Compact automatic cutting system featuring fully digital programmatic control, ensuring fast setup and high safety standards.',
    specs: {
      speed: 'Fast automatic knife stroke',
      maxSheetSize: 'Cuts paper up to 92 cm width',
      resolution: 'Digital precision alignment',
      keyFeature: 'Programmable cutting sequences for instant batch transitions'
    },
    capacity: 'High-volume poster cutting, visiting card separation, custom booklet trimmings, and stationery packaging.'
  },
  {
    id: 'm8',
    name: 'Wohlenberg Rapid Trimmer',
    category: 'post-press',
    image: '/images/Wohlenberg three knife cutting machine.jpg',
    description: 'Heavy-duty industrial book-block trimmer with support for both manual feeds and automatic inline operations.',
    specs: {
      speed: '5,000 to 6,000 copy trimming/hour',
      maxSheetSize: 'Universal book formats',
      resolution: 'Clean three-knife simultaneous edges',
      keyFeature: 'Dual mode automatic and manual control configuration'
    },
    capacity: 'Perfect-bound novels, heavy booklets, corporate catalogues, academic textbooks, and calendars.'
  },
  {
    id: 'm9',
    name: 'MBO Automatic Folding Machine',
    category: 'post-press',
    image: '/images/MBO folding machine quantity two.jpg',
    description: 'Extremely fast automatic folding press designed to structure raw printed paper sheets into pristine folded book signatures.',
    specs: {
      speed: 'Folding 50,000 pages per day',
      maxSheetSize: 'Accepts sheets from A2 down to A5',
      resolution: 'Fully automatic roller configuration',
      keyFeature: 'High-speed multiple fold options (parallel, cross, and booklet folds)'
    },
    capacity: 'Signature folders, leaflets, newsletters, promotional booklets, and packaging box pre-folders.'
  },
  {
    id: 'm10',
    name: 'Muller Martini Five Clamp Perfect Binder',
    category: 'post-press',
    image: '/images/Muller Martini five clamp quantity.jpg',
    description: 'Continuous industrial perfect binding machine. Glues paper signatures with specialized hot side-glues to produce flat-laying novel and manual spines.',
    specs: {
      speed: 'Binds 4,000 to 5,000 books per day',
      maxSheetSize: 'Up to 50 mm block thickness',
      resolution: 'Tight spine hot melt coating',
      keyFeature: 'Five continuous clamps with specialized side glue nozzles'
    },
    capacity: 'Perfect-bound paperbacks, textbook runs, corporate catalogues, literature volumes, and annual reports.'
  },
  {
    id: 'm11',
    name: 'Ishida Japan Book Sewing',
    category: 'post-press',
    image: '/images/Ishida Japan book sewing machín.jpg',
    description: 'Premium automatic book-block thread section sewing machine imported from Japan. Provides robust and durable sewing for heavy archival books.',
    specs: {
      speed: 'High-speed automatic loop stitching',
      maxSheetSize: 'Up to 17.5" x 12.5" signature size',
      resolution: 'Intricate section tension control',
      keyFeature: 'Built-in Ditto Feeder for automatic section sequencing'
    },
    capacity: 'Hardcover book spines, premium archival manuals, school textbooks, and heavy-volume heritage publications.'
  },
  {
    id: 'm12',
    name: 'Agrafix Wire Stitching Machine',
    category: 'post-press',
    image: '/images/agrafix Wire stitching machine.jpg',
    description: 'High-speed industrial wire stitching unit. Staples brochure spines with extreme rapidity and deep structural holds.',
    specs: {
      speed: 'Up to 170 stitches per minute',
      maxSheetSize: 'Stitching thickness 0–25 mm (up to 40 mm with open staples)',
      resolution: 'Staple back length is 14 mm',
      keyFeature: 'Supports round wire n°21-30 or flat wire n°0-V'
    },
    capacity: 'Saddle-stitched magazines, office documents, official forms, financial booklets, and folders.'
  },
  {
    id: 'm13',
    name: 'Uninterrupted 130KV Generator Backup',
    category: 'pre-press',
    image: '/images/130KV Generator.jpg',
    description: 'Heavy industrial grade backup generator supplying continuous energy. Safeguards the entire facility against power fluctuations, guaranteeing 100% production uptime.',
    specs: {
      speed: 'Instant 100% load startup',
      maxSheetSize: 'Powers entire Mankusa press room',
      resolution: 'Stable voltage calibration',
      keyFeature: '130KV capacity for completely uninterrupted printing cycles'
    },
    capacity: 'Ensuring 100% prompt deliveries and absolute zero downtime for urgent book runs.'
  },
  {
    id: 'm14',
    name: 'Heidelberg Speedmaster 4-Color Press',
    category: 'offset',
    image: '/images/Heidelberg Speedmaster.jpg',
    description: 'High-fidelity 4-color offset printing press. Ideal for premium color-saturated book covers, luxury packaging folding cartons, and high-end advertising.',
    specs: {
      speed: '15,000 sheets/hour',
      maxSheetSize: '72 x 102 cm',
      resolution: 'Ultra-fine line screens & spectrophotometer calibration',
      keyFeature: 'CPC electronic control console for computerized inking and register'
    },
    capacity: 'Premium coffee table books, vibrant magazine covers, multi-color marketing brochures, and catalog runs.'
  },
  {
    id: 'm15',
    name: 'CTP Plate Making Machine',
    category: 'pre-press',
    image: '/images/PLATE MAKING machine.jpg',
    description: 'High-resolution Computer-to-Plate laser exposing system. Solidifies precise digital dots directly onto metal offset plates with zero mechanical loss.',
    specs: {
      speed: '24 Plates per hour',
      maxSheetSize: '80 x 103 cm',
      resolution: '2400 DPI thermal laser',
      keyFeature: 'Direct electronic-to-plate exposure bypassing film steps'
    },
    capacity: 'Imprinting high-accuracy halftone layouts for complex text, books, and fine multi-color catalogs.'
  },
  {
    id: 'm16',
    name: 'Plate Processor & Chemical Developer',
    category: 'pre-press',
    image: '/images/PLATE Procesor machine.jpg',
    description: 'Automated inline developer that rinses, gum-coats, and bakes aluminum offset plates. Prepares plates for heavy mechanical friction on the offset fleet.',
    specs: {
      speed: '1.2 meters per minute',
      maxSheetSize: '105 cm chemical chamber width',
      resolution: 'Precision temperature chemical bath',
      keyFeature: 'Eco-rinse water conservation system'
    },
    capacity: 'Baking and protective coating of plates to support continuous, high-volume lithographic production runs.'
  },
  {
    id: 'm17',
    name: 'High-Speed Perforating & Creasing Machine',
    category: 'post-press',
    image: '/images/Perforating machine.jpg',
    description: 'Applies precise linear micro-perforations and fold-crease indentations to cardstock, preventing fiber tearing during booklet folding.',
    specs: {
      speed: '8,000 sheets/hour',
      maxSheetSize: '52 x 74 cm',
      resolution: 'Adjustable depth micro-pins',
      keyFeature: 'Interchangeable steel perforation wheels'
    },
    capacity: 'Removable voucher slips, tear-away ticket stubs, official administrative booklets, and heavy folded card covers.'
  },
  {
    id: 'm18',
    name: 'Heavy-Duty Industrial Thermal Laminator',
    category: 'post-press',
    image: '/images/Laminating machine.jpg',
    description: 'High-pressure hot-roller laminating press. Coats book covers and presentation leaflets with waterproof, scratch-proof matte or gloss premium films.',
    specs: {
      speed: '25 meters per minute',
      maxSheetSize: '72 cm input width',
      resolution: 'Double-sided thermal pressure rollers',
      keyFeature: 'Anti-curl flattening system'
    },
    capacity: 'High-durability textbook covers, corporate folders, luxury catalog covers, and calendars.'
  },
  {
    id: 'm19',
    name: 'Precision Hydraulic Guillotine Blade Grinder',
    category: 'pre-press',
    image: '/images/Knife GRINDER Machine.jpg',
    description: 'Ensures all heavy hydraulic trimmer and guillotine blades remain perfectly razor-sharp, maintaining zero-fiber page cuts across book bundles.',
    specs: {
      speed: 'Automated reciprocating wet grind',
      maxSheetSize: 'Supports blades up to 150 cm',
      resolution: '0.01 mm edge sharpening angle',
      keyFeature: 'Integrated coolant recirculator preventing heat damage to steel'
    },
    capacity: 'In-house mechanical blade support keeping our Polar and Como cutter fleets continuously sharp.'
  },
  {
    id: 'm20',
    name: 'RISO SF 5350 EII High-Speed Duplicator',
    category: 'offset',
    image: '/images/RISO SF 5350 EII.jpg',
    description: 'Digital Risograph duplicator. Offers incredibly fast and inexpensive single-color document copying for educational and corporate materials.',
    specs: {
      speed: '130 impressions per minute',
      maxSheetSize: 'A4 / Legal size paper',
      resolution: '300 x 600 DPI',
      keyFeature: 'Ultra-efficient ink-fusing stencil drum technology'
    },
    capacity: 'School textbooks supplementary materials, examination forms, administrative leaflets, and newsletters.'
  },
  {
    id: 'm21',
    name: 'RISO SF 9350 Ledger Digital Duplicator',
    category: 'offset',
    image: '/images/RISO SF 9350.jpg',
    description: 'High-capacity ledger-size Risograph printing system. Prints high-frequency booklets and double-page brochures at negligible running costs.',
    specs: {
      speed: '150 impressions per minute',
      maxSheetSize: 'A3 / Ledger size paper',
      resolution: '600 x 600 DPI',
      keyFeature: 'Integrated print master imaging unit'
    },
    capacity: 'Double-page newsletters, school pamphlets, maps, administrative booklets, and custom single-color sheets.'
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
    features: ['Vibrant color holdout', 'Heavy-weight cover rigidity', 'Perfect for Spot UV', 'Excellent folding strength'],
    stockLevel: 'In Stock',
    basePricePer1000: 180
  },
  {
    id: 'mat2',
    name: 'Classic Linen Text Paper',
    category: 'fine-paper',
    weight: '120 gsm',
    thickness: '0.15 mm',
    description: 'Woven with an elegant, traditional linen texture that provides a tactile sense of prestige and heritage. Excellent for luxury corporate stationery and premium brand collateral.',
    finish: 'Tactile Cross-Weave Linen',
    features: ['Rich tactile feel', 'Elegant texture look', 'High opacity level', 'Deep ink absorption'],
    stockLevel: 'In Stock',
    basePricePer1000: 125
  },
  {
    id: 'mat3',
    name: 'Eco-Kraft Raw Unbleached Board',
    category: 'specialty',
    weight: '320 gsm',
    thickness: '0.45 mm',
    description: 'An organic, rustic-brown board crafted from recycled unbleached wood pulp. Offers outstanding structural strength and a warm, natural aesthetic for sustainable packaging designs.',
    finish: 'Natural Matte Textured Raw',
    features: ['Eco-friendly material', 'High burst strength', 'Unique organic look', 'Completely chlorine-free'],
    stockLevel: 'In Stock',
    basePricePer1000: 150
  },
  {
    id: 'mat4',
    name: 'Heavy Premium Book Cover Board',
    category: 'cardstock',
    weight: '400 gsm',
    thickness: '0.48 mm',
    description: 'High-density rigid grey and white cardstock. Engineered to withstand laminating and embossing pressures without warping, ideal for hardbacks and luxury corporate boxes.',
    finish: 'Rigid High-Density Matte',
    features: ['Exceptional spine rigidity', 'Perfect for hard cover cases', 'Supports heavy embossing', 'Tear-proof structural core'],
    stockLevel: 'In Stock',
    basePricePer1000: 210
  },
  {
    id: 'mat5',
    name: 'Premium Removable Matte Vinyl',
    category: 'vinyl-packaging',
    weight: '220 gsm',
    thickness: '0.22 mm',
    description: 'Heavy-duty poly-synthetic vinyl material with a weather-resistant matte face. Features a specialized pressure-sensitive adhesive that holds strong yet peels away clean without residue.',
    finish: 'Smooth Weatherproof Matte',
    features: ['UV-resistant pigments', 'Tear-proof substrate', '100% Waterproof', 'Clean-release adhesive'],
    stockLevel: 'In Stock',
    basePricePer1000: 240
  },
  {
    id: 'mat6',
    name: 'Fine Bookwove Printing Bond',
    category: 'fine-paper',
    weight: '80 gsm',
    thickness: '0.10 mm',
    description: 'Standard lightweight fine book-wove paper optimized for high-volume offset printing. Delivers outstanding text readability and zero ink bleed-through for double-sided prints.',
    finish: 'Cream Bookwove Offset',
    features: ['Acid-free longevity', 'High opacity text printing', 'Smooth sheet feeder run', 'Comfortable reading tone'],
    stockLevel: 'In Stock',
    basePricePer1000: 95
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Bespoke Academic Textbook - Volume 1',
    category: 'publishing',
    image: '/images/Book 1.webp',
    description: 'A premium, high-volume book publication project featuring dense black lithography typography layers and robust binding.',
    specsUsed: {
      paperStock: 'Fine Bookwove 80 gsm & Premium Silk Coated 350 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Perfect Spine Binding', 'Matte Celloglaze Cover Lamination']
    }
  },
  {
    id: 'p2',
    title: 'Literary Novel - Volume 2',
    category: 'publishing',
    image: '/images/Book 2.webp',
    description: 'A beautiful collection of literary works printed with rich ink holdouts and precise signature alignments.',
    specsUsed: {
      paperStock: 'Classic Cream 80 gsm & High-Density Cover Board 400 gsm',
      pressUsed: 'Miller Two-Unit Offset',
      specialFinishes: ['Automatic Section Thread Sewing', 'MBO Folding and signature grouping']
    }
  },
  {
    id: 'p3',
    title: 'Cultural Heritage Publication - Volume 3',
    category: 'publishing',
    image: '/images/Book 3.webp',
    description: 'Premium color-calibrated printing displaying rich cultural heritage illustration layouts.',
    specsUsed: {
      paperStock: 'Fine Bookwove 80 gsm & Premium Silk Coated 350 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Perfect Spine Binding', 'Matte Celloglaze Cover Lamination']
    }
  },
  {
    id: 'p4',
    title: 'Educational Study Guide - Volume 4',
    category: 'publishing',
    image: '/images/Book 4.webp',
    description: 'High-volume school booklet printing featuring crisp black letterforms for optimal readability.',
    specsUsed: {
      paperStock: 'Fine Bookwove Printing Bond 80 gsm',
      pressUsed: 'Heidelberg KORD 64 Single Color Press',
      specialFinishes: ['Agrafix Wire Stitching', 'Polar 115 Precision Cut Margin trim']
    }
  },
  {
    id: 'p5',
    title: 'Poetry & Prose Collection - Volume 5',
    category: 'publishing',
    image: '/images/Book 5.webp',
    description: 'Elegant cream paper interiors combined with robust high-density binding for local poetry works.',
    specsUsed: {
      paperStock: 'Classic Cream 80 gsm & High-Density Cover Board 400 gsm',
      pressUsed: 'Miller Two-Unit Offset',
      specialFinishes: ['Automatic Section Thread Sewing', 'MBO Folding and signature grouping']
    }
  },
  {
    id: 'p6',
    title: 'Historical Biography - Volume 6',
    category: 'publishing',
    image: '/images/Book 6.webp',
    description: 'A deep look at local historical figures, featuring durable perfect bind spine finishing.',
    specsUsed: {
      paperStock: 'Fine Bookwove 80 gsm & Premium Silk Coated 350 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Perfect Spine Binding', 'Matte Celloglaze Cover Lamination']
    }
  },
  {
    id: 'p7',
    title: 'Corporate Annual Review - Volume 7',
    category: 'corporate',
    image: '/images/Book 7.webp',
    description: 'An expansive annual report with rich ink density and high-contrast corporate colors.',
    specsUsed: {
      paperStock: 'Premium Silk Coated Cardstock 350 gsm',
      pressUsed: 'Miller Two-Unit Offset Machine',
      specialFinishes: ['High-gloss Spot UV coating', 'MBO Folding parallel folds']
    }
  },
  {
    id: 'p8',
    title: 'Institutional Training Manual - Volume 8',
    category: 'corporate',
    image: '/images/Book 8.webp',
    description: 'A robust tactical handbook built for intensive, daily reference and durable field handling.',
    specsUsed: {
      paperStock: 'Premium Silk Coated 350 gsm (Cover) & 80 gsm bond (Inners)',
      pressUsed: 'Heidelberg KORD 64 Single Color Press',
      specialFinishes: ['Agrafix Wire Stitching staple binding', 'Polar 115 Precision Cut Margin trim']
    }
  },
  {
    id: 'p9',
    title: 'Technical Guidebook - Volume 9',
    category: 'corporate',
    image: '/images/Book 9.webp',
    description: 'Industrial machinery and hardware operating manual printed with extreme graphic precision.',
    specsUsed: {
      paperStock: 'Fine Bookwove Printing Bond 80 gsm',
      pressUsed: 'Heidelberg GTO 52',
      specialFinishes: ['Heidelberg Sequential Document Numbering', 'Inline Perforating']
    }
  },
  {
    id: 'p10',
    title: 'Public Agency Directory - Volume 10',
    category: 'corporate',
    image: '/images/Book 10.webp',
    description: 'Comprehensive directory of public institutions, bound with an elegant and scuff-resistant layout.',
    specsUsed: {
      paperStock: 'Fine Bookwove 80 gsm & Premium Silk Coated 350 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Perfect Spine Binding with Muller Martini', 'Matte Cover Lamination']
    }
  },
  {
    id: 'p11',
    title: 'Regional Development Report - Volume 11',
    category: 'corporate',
    image: '/images/Book 11.webp',
    description: 'Large-scale statistical publications highlighting developmental milestones with clear graphics.',
    specsUsed: {
      paperStock: 'Premium Silk Coated Cardstock 350 gsm',
      pressUsed: 'Miller Two-Unit Offset Machine',
      specialFinishes: ['High-gloss Spot UV coating', 'MBO Folding parallel folds']
    }
  },
  {
    id: 'p12',
    title: 'Luxury Portfolio Showcase - Volume 12',
    category: 'packaging',
    image: '/images/Book 12.webp',
    description: 'Bespoke leatherette and high-density board presentation showcase of local hospitality work.',
    specsUsed: {
      paperStock: 'Eco-Kraft Raw Unbleached Board 320 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Platin Letterpress Die-Cutting', 'High-Gloss spot varnish overlays']
    }
  },
  {
    id: 'p13',
    title: 'Spirits Presentation Catalog - Volume 13',
    category: 'packaging',
    image: '/images/Book 13.webp',
    description: 'Custom outer display box book catalog featuring dynamic brand layouts.',
    specsUsed: {
      paperStock: 'Eco-Kraft Raw Unbleached Board 320 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Platin Letterpress Die-Cutting', 'High-Gloss spot varnish overlays']
    }
  },
  {
    id: 'p14',
    title: 'Custom Stationery Collection - Volume 14',
    category: 'packaging',
    image: '/images/Book 14.webp',
    description: 'Bespoke packaging and luxury paper sample binder showcasing high-density texture cardstocks.',
    specsUsed: {
      paperStock: 'Eco-Kraft Raw Unbleached Board 320 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Platin Letterpress Die-Cutting', 'High-Gloss spot varnish overlays']
    }
  },
  {
    id: 'p15',
    title: 'Giftware Box Catalog - Volume 15',
    category: 'packaging',
    image: '/images/Book 15.webp',
    description: 'Exquisite color-printed catalog highlighting modern product boxing configurations.',
    specsUsed: {
      paperStock: 'Eco-Kraft Raw Unbleached Board 320 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Platin Letterpress Die-Cutting', 'High-Gloss spot varnish overlays']
    }
  },
  {
    id: 'p16',
    title: 'Luxury Cardboard Box Spec - Volume 16',
    category: 'packaging',
    image: '/images/Book 16.webp',
    description: 'Heavy duty, rigid premium custom sample book displaying diverse laminations and textures.',
    specsUsed: {
      paperStock: 'Heavy Premium Book Cover Board 400 gsm',
      pressUsed: 'Heidelberg Speedmaster MOZP',
      specialFinishes: ['Platin Letterpress Die-Cutting', 'Matte Celloglaze Cover Lamination']
    }
  }
];
