import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Layers, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Sliders, 
  CheckCircle,
  BookOpen,
  Info,
  Award,
  Settings,
  Eye,
  Activity
} from 'lucide-react';

interface WorkshopPhoto {
  id: string;
  src: string;
  fallbackUrl: string;
  title: string;
  category: 'pressroom' | 'prepress' | 'bindery' | 'logistics';
  categoryLabel: string;
  description: string;
  machinery: string;
  standards: string;
  resolution: string;
}

export default function WorkshopGallery() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<WorkshopPhoto | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // The 13 real pictures uploaded by the user to public/images/workshop pic (X).jpg
  const photos: WorkshopPhoto[] = [
    {
      id: 'pic-1',
      src: '/images/workshop pic (1).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1200',
      title: 'Manual Collation & Book Assembly Desk',
      category: 'bindery',
      categoryLabel: 'Post-Press & Bindery',
      description: 'Our team of skilled bindery specialists collating, aligning, and sorting booklet signatures. Precision manual handling ensures perfect sheet registration before passing book blocks to the sewing and perfect-binding lines.',
      machinery: 'Ergonomic signature collating workbenches',
      standards: '100% manual tactile quality check for sequence',
      resolution: 'Ensures zero-defect double-sheet and folded page compliance'
    },
    {
      id: 'pic-2',
      src: '/images/workshop pic (2).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      title: 'Central Production Floor & Signatures Staging',
      category: 'pressroom',
      categoryLabel: 'Offset Pressroom',
      description: 'A comprehensive wide-angle look across our expansive main workshop. Multi-tier staging platforms store freshly folded publication signatures and textbook bundles in a clean, dust-controlled staging environment.',
      machinery: 'Heavy-duty material racking & industrial signature staging tables',
      standards: 'ISO 9001 workflow layout & clear operator pathways',
      resolution: 'Optimized material flow minimizes staging-to-binding latency'
    },
    {
      id: 'pic-3',
      src: '/images/workshop pic (3).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
      title: 'Offset Roller Calibrations & Micrometer Setup',
      category: 'pressroom',
      categoryLabel: 'Offset Pressroom',
      description: 'Technicians conducting precision setup and micrometer adjustments on the Heidelberg press roller cylinder. Fine tuning dampening and ink levels ensures high fidelity halftone dots across extended print runs.',
      machinery: 'Heidelberg Speedmaster Cylinder Fleet',
      standards: 'Under 0.02mm roller clearance alignment standards',
      resolution: 'Ultra-sharp halftone dot reproducibility with zero register drift'
    },
    {
      id: 'pic-4',
      src: '/images/workshop pic (4).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
      title: 'Bindery Line & Logistics Corridor',
      category: 'bindery',
      categoryLabel: 'Post-Press & Bindery',
      description: 'Staging avenue flanking the heavy-duty folding and adhesive binding machinery. Heavy raw materials, strap wraps, and book board supplies are organized cleanly adjacent to hydraulic lifters.',
      machinery: 'Automated pneumatic strapping guides & heavy lifters',
      standards: 'Clean corridor safety and strict material hazard compliance',
      resolution: 'Fast-access setup allows efficient post-press execution'
    },
    {
      id: 'pic-5',
      src: '/images/workshop pic (5).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      title: 'Heidelberg Feed & Plate Cylinders',
      category: 'pressroom',
      categoryLabel: 'Offset Pressroom',
      description: 'Close-up look at the mechanical gripper assembly and plate cylinders. Steel gripper shafts pull paper stock at speeds of up to 15,000 double-sided impressions per hour with absolute accuracy.',
      machinery: 'Synchronized mechanical gripper shafts & plates',
      standards: 'Zero mechanical backlash under high rotational speeds',
      resolution: 'Perfect multi-color overlay within 0.05mm register precision'
    },
    {
      id: 'pic-6',
      src: '/images/workshop pic (6).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200',
      title: 'Industrial Guillotine Trimmer Station',
      category: 'bindery',
      categoryLabel: 'Post-Press & Bindery',
      description: 'Heavy-duty paper trimmer area. Raw book signatures and multi-page catalogs are square-trimmed here. A dedicated scrap extraction bin captures all trimmings for immediate standard recycling.',
      machinery: 'Polar Mohr Programmable Hydraulic Guillotines',
      standards: 'Precise computerized cutting sequences & safety light barriers',
      resolution: 'Clean, perfect fiber-free book edges with 0.1mm accuracy'
    },
    {
      id: 'pic-7',
      src: '/images/workshop pic (7).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
      title: 'High-Volume Cutting & Trimming Setup',
      category: 'bindery',
      categoryLabel: 'Post-Press & Bindery',
      description: 'A detailed view of the massive hydraulic cutting blade and backgauge setup. Electronic memory recall lets operators trim entire bundles of books or flyers in automated, sequential passes.',
      machinery: 'Heidelberg CPC Master Control Guillotine Console',
      standards: 'ISO 12647-2 page trimming line compliance',
      resolution: 'High pressure clamping prevents page slippage during high-speed cuts'
    },
    {
      id: 'pic-8',
      src: '/images/workshop pic (8).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1200',
      title: 'Plate Mounting & Staging Area',
      category: 'prepress',
      categoryLabel: 'Pre-Press & Plates',
      description: 'Staging table where high-resolution aluminum printing plates are curated and verified before mounting onto the cylinder press. Plates are checked for scratch-free coating and laser exposure perfection.',
      machinery: 'Computer-to-Plate (CTP) thermal imaging platesetter',
      standards: 'Laser-imaged high fidelity halftone screen lines',
      resolution: '2400 DPI plate image exposure for fine microtext rendering'
    },
    {
      id: 'pic-9',
      src: '/images/workshop pic (9).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
      title: 'Bulk Packaging & Distribution Ward',
      category: 'logistics',
      categoryLabel: 'Logistics & Admin',
      description: 'Active staging area inside our high-volume shipping hangar. Bundled publication cartons are securely strapped, palletized, and shrink-wrapped for safe transit to distributors.',
      machinery: 'Heavy palletizers, strapping gear & forklift corridors',
      standards: 'Export-grade dual-walled protective packaging guidelines',
      resolution: 'Integrated tracking for secure dispatch of high-volume runs'
    },
    {
      id: 'pic-10',
      src: '/images/workshop pic (10).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200',
      title: 'Manual Counting & Crease Assembly',
      category: 'bindery',
      categoryLabel: 'Post-Press & Bindery',
      description: 'Close-up of manual signature sorting benches. Craftsmen verify precise page counts and crease line alignments on bulk orders, ensuring quality consistency that automated machinery cannot match.',
      machinery: 'Vibrating air-jogging desks & counting scales',
      standards: 'Dual-check manual auditing for textbook page integrity',
      resolution: '100% verification of complex pagination and fold configurations'
    },
    {
      id: 'pic-11',
      src: '/images/workshop pic (11).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
      title: 'High Mezzanine Pressroom Perspective',
      category: 'pressroom',
      categoryLabel: 'Offset Pressroom',
      description: 'An overhead view looking down from our secure mezzanine walkways. This perspective highlights the continuous industrial layout of our high-volume press fleet and high-density material staging rooms.',
      machinery: 'Multi-color offset units & heavy-duty warehouse racking',
      standards: 'ISO 14001 air ventilation and worker space hygiene',
      resolution: 'Clean ventilation prevents offset spray powder from settling'
    },
    {
      id: 'pic-12',
      src: '/images/workshop pic (12).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      title: 'Offset Fleet Grid Overview',
      category: 'pressroom',
      categoryLabel: 'Offset Pressroom',
      description: 'A comprehensive structural wide view showcasing our main heavy-industrial hangar. Robust structural steel columns, overhead crane rails, and wide transport tracks allow rapid pallet moving.',
      machinery: '130KV dedicated backup power generator and structural trusses',
      standards: 'Heavy industrial load bearing foundations & earth safety',
      resolution: 'Heavy vibration-absorbing floor slabs maintain perfect register'
    },
    {
      id: 'pic-13',
      src: '/images/workshop pic (13).jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      title: 'Mankusa Executive Boardroom',
      category: 'logistics',
      categoryLabel: 'Logistics & Admin',
      description: 'Our modern, wood-paneled executive offices and meeting rooms in Addis Ababa. Featuring customized wood-engraved branding, color-calibrated screens, and proof-viewing tables for client consultations.',
      machinery: 'Enterprise Resource Planning & high-spec digital proofing',
      standards: 'ISO 9001 quality system for client contract & order review',
      resolution: 'Direct coordination with workshop managers for live progress updates'
    }
  ];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const filtered = getFilteredPhotos();
    const currentIndex = filtered.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setSelectedPhoto(filtered[prevIndex]);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const filtered = getFilteredPhotos();
    const currentIndex = filtered.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setSelectedPhoto(filtered[nextIndex]);
  };

  const handleImageError = (photoId: string) => {
    setImgErrors(prev => ({ ...prev, [photoId]: true }));
  };

  const getFilteredPhotos = () => {
    if (activeTab === 'all') return photos;
    return photos.filter(photo => photo.category === activeTab);
  };

  const filteredPhotos = getFilteredPhotos();

  // Handle escape keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowLeft') {
        const filtered = getFilteredPhotos();
        const currentIndex = filtered.findIndex(p => p.id === selectedPhoto.id);
        const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
        setSelectedPhoto(filtered[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const filtered = getFilteredPhotos();
        const currentIndex = filtered.findIndex(p => p.id === selectedPhoto.id);
        const nextIndex = (currentIndex + 1) % filtered.length;
        setSelectedPhoto(filtered[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, activeTab]);

  return (
    <section id="workshop" className="py-24 bg-slate-900 text-slate-100 border-t border-slate-950 relative overflow-hidden">
      
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Facility Gallery
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-3 leading-relaxed font-light">
            Step through our active print floor areas in Addis Ababa, Ethiopia, covering prepress, sheet-fed offset printing, and post-press finishing.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-slate-800 pb-6 mb-10">
          {[
            { id: 'all', label: 'All Operations', count: 13 },
            { id: 'pressroom', label: 'Offset Pressroom', count: 5 },
            { id: 'prepress', label: 'Pre-Press & Plates', count: 1 },
            { id: 'bindery', label: 'Post-Press & Bindery', count: 5 },
            { id: 'logistics', label: 'Logistics & Admin', count: 2 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-sans text-xs font-medium rounded-xl border transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 font-semibold shadow-md shadow-cyan-950/25'
                  : 'bg-slate-800/40 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
              <span className={`px-1.5 py-0.5 text-[9px] font-mono rounded-md ${
                activeTab === tab.id ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-500'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              const hasError = imgErrors[photo.id];
              const displaySrc = hasError ? photo.fallbackUrl : photo.src;

              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-cyan-950/20 hover:border-slate-700 transition-all cursor-pointer relative"
                >
                  
                  {/* Category Label Overlay */}
                  <span className="absolute top-3 left-3 z-10 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono text-cyan-400 uppercase tracking-wider rounded-lg border border-slate-800/80">
                    {photo.categoryLabel}
                  </span>

                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={displaySrc}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(photo.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Visual dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Quick Expand Button overlay */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Text Description Block */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {photo.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-light">
                        {photo.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-end">
                      <span className="font-mono text-[9px] text-cyan-500 font-semibold uppercase tracking-wider bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-950">
                        {photo.categoryLabel}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Interactive Modal */}
      <AnimatePresence>
        {selectedPhoto && (() => {
          const hasError = imgErrors[selectedPhoto.id];
          const displaySrc = hasError ? selectedPhoto.fallbackUrl : selectedPhoto.src;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-md"
              onClick={() => setSelectedPhoto(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:scale-105 transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:scale-105 transition-all cursor-pointer"
                title="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:scale-105 transition-all cursor-pointer"
                title="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Content Frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-slate-900 rounded-3xl border border-slate-800 max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Image Frame */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-auto md:h-[500px] relative bg-slate-950 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-slate-800">
                  <img
                    src={displaySrc}
                    alt={selectedPhoto.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(selectedPhoto.id)}
                    className="max-w-full max-h-full object-contain select-none"
                  />
                </div>

                {/* Info and Specifications block */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[500px] overflow-y-auto">
                  
                  <div>
                    {/* Category Overlay */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-950 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                        {selectedPhoto.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white tracking-tight leading-snug">
                      {selectedPhoto.title}
                    </h3>
                    
                    <p className="font-sans text-xs text-slate-400 mt-3 leading-relaxed font-light">
                      {selectedPhoto.description}
                    </p>


                  </div>

                  {/* Navigation Tip */}
                  <div className="mt-6 pt-4 border-t border-slate-800 text-center md:text-left">
                    <span className="text-[10px] font-sans text-slate-500">
                      Use Arrow Keys or Click outside to return.
                    </span>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
