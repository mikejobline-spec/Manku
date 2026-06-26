import React from 'react';
import { History, Award, CheckCircle, Leaf, Sparkles, Building2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Precision CMYK Fidelity',
      desc: 'Our Heidelberg spectrophotometers scan color density in real-time, holding Delta-E color variation within an undetectable range of 0.8.'
    },
    {
      icon: Leaf,
      title: 'Eco-Minded Footprint',
      desc: 'We exclusive utilize soy- and vegetable-based inks, zero-chemical aluminum plates, and carry full FSC® certification across all stocked media.'
    },
    {
      icon: Sparkles,
      title: 'Structural Luxury Finishing',
      desc: 'We pair high-volume offset with luxury custom finishing, including hot gold foil stamping, blind embossing, and computer-guided structural die-cutting.'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Founding Litho Press', desc: 'Began as a 2-color letterpress boutique in the historic district, serving local publishing houses.' },
    { year: '2008', title: 'Offset Integration', desc: 'Commissioned our first automated Heidelberg press, scaling volume to million-sheet print runs.' },
    { year: '2018', title: 'Carbon Neutral Standard', desc: 'Eliminated heavy chemical cleaning agents and transitioned entirely to soy inks and FSC-certified media.' },
    { year: '2024', title: 'Next-Gen Expansion', desc: 'Integrated inline color measurement spectrophotometers and instant UV-LED curing lines.' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-cyan-600 font-bold uppercase tracking-widest">Our Heritage & Integrity</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            Crafting Tangible Excellence Since 1998
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Corporate Summary & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-900 leading-snug">
              Providing enterprise-level printing with a boutique focus on finish and ink density.
            </h3>
            
            <p className="font-sans text-slate-600 leading-relaxed font-light">
              Founded over two decades ago on the principles of mechanical precision and color fidelity, our press house has grown from a local boutique workshop to a full-scale industrial printing press provider. We specialized in high-speed, sheet-fed <strong>offset printing services</strong>.
            </p>
            
            <p className="font-sans text-slate-600 leading-relaxed font-light">
              Unlike digital-only outfits, offset offers continuous ink density and seamless smooth solids that do not crack at folds or rub away under humidity. Our equipment portfolio allows us to service orders of any scale, from 500 bespoke presentation binders to 500,000 corporate catalogs, delivered on time, with perfect registration.
            </p>

            {/* Quick figures */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-lg font-bold text-slate-900">12,500 sq ft</div>
                  <div className="text-xs text-slate-500 font-mono uppercase">Facility Area</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-lg font-bold text-slate-900">30 Million+</div>
                  <div className="text-xs text-slate-500 font-mono uppercase">Impressions Printed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values side panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col space-y-6">
              <h4 className="font-display text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <History className="w-5 h-5 text-cyan-500" />
                Our Foundational Pillars
              </h4>

              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-cyan-600 flex-shrink-0 border border-slate-100 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-sans text-sm font-semibold text-slate-900">{val.title}</h5>
                      <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Milestones timeline grid */}
        <div className="mt-20">
          <h4 className="font-mono text-xs text-slate-500 font-semibold tracking-wider text-center uppercase mb-10">Our History & Evolution</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute top-[1.375rem] left-8 right-8 h-0.5 bg-slate-200 z-0" />
            
            {milestones.map((stone, idx) => (
              <div key={idx} className="relative bg-white border border-slate-100 rounded-xl p-5 hover:border-cyan-200 hover:shadow-lg transition-all z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold rounded-full">
                    {stone.year}
                  </span>
                  <div className="w-4 h-4 rounded-full bg-cyan-100 border-2 border-cyan-500 hidden md:block" />
                </div>
                <h5 className="font-sans text-sm font-bold text-slate-900">{stone.title}</h5>
                <p className="font-sans text-xs text-slate-500 mt-1.5 leading-relaxed">{stone.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
