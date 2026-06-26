import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem, PortfolioCategory } from '../types';
import { Layers, Palette, Eye, ArrowRight, Activity, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'all'>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredPortfolio = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === selectedCategory);

  const categories: { label: string; val: PortfolioCategory | 'all' }[] = [
    { label: 'All Projects', val: 'all' },
    { label: 'Bespoke Publishing', val: 'publishing' },
    { label: 'Custom Packaging', val: 'packaging' },
    { label: 'Promotional & Large', val: 'promotional' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-cyan-600 font-bold uppercase tracking-widest">Tangible Craft</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            Workplace & Portfolio Gallery
          </p>
          <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
            Browse through active press room runs, finished master copies, and our high-calibration color management pre-press environments.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Portfolio Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.val}
              onClick={() => setSelectedCategory(cat.val)}
              className={`px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.val
                  ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all flex flex-col md:grid md:grid-cols-12"
            >
              {/* Image Area */}
              <div className="relative h-64 md:h-full md:col-span-5 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent md:bg-none" />
              </div>

              {/* Text Area */}
              <div className="p-6 md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-600 font-semibold uppercase tracking-wider block">
                    {item.category === 'publishing' ? 'Editorial Publishing' : item.category === 'packaging' ? 'Luxury Packaging' : 'Promotional & Branding'}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                  <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Specs used block */}
                <div className="mt-5 pt-4 border-t border-slate-200/80">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider mb-2">Production Blueprint</h4>
                  <div className="space-y-1.5 text-xs font-sans text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-slate-800">Media:</strong> {item.specsUsed.paperStock}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-slate-800">Press:</strong> {item.specsUsed.pressUsed}</span>
                    </div>
                  </div>

                  {/* Finishes badges */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.specsUsed.specialFinishes.map((finish, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-cyan-50 text-cyan-700 text-[9px] font-mono font-bold rounded border border-cyan-100"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* WORKPLACE & FACILITY HIGHLIGHT: Bento Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Facility Image */}
            <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/src/assets/images/prepress_proofing_station_1782462376789.jpg"
                alt="Color Proofing Calibration Station"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest">Calibration Standard</span>
                <h4 className="text-sm font-sans font-bold mt-0.5">D50 Color Control Station</h4>
              </div>
            </div>

            {/* Workplace Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-600 animate-pulse" />
                <span className="font-mono text-xs text-slate-500 uppercase font-semibold">Active Workplace & Standard</span>
              </div>
              
              <h3 className="font-display text-2xl font-extrabold text-slate-900 leading-tight">
                Step Inside Our High-Fidelity Color-Calibrated Facility
              </h3>

              <p className="font-sans text-xs text-slate-600 leading-relaxed font-light">
                A pristine printed result begins long before plates strike raw paper. Our workspace carries automated workflow standards where every file undergoes preflight checks, ink profiling, and proof verification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-slate-200/60 rounded-xl">
                  <h4 className="text-xs font-sans font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Pre-Press Calibration
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Closed-loop digital pre-flighting aligns customer PDF files directly to ICC v4 color output targets, minimizing alignment errors.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200/60 rounded-xl">
                  <h4 className="text-xs font-sans font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    Post-Press Bindery
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Features automated programmable cutting tables, folder-gluers, saddle stitchers, and flatbed packaging die-cutters.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2.5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-600 hover:text-cyan-700 hover:underline"
                >
                  Schedule a Physical Facility Tour
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
