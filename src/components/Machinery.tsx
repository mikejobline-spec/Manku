import React, { useState } from 'react';
import { MACHINERY_DATA } from '../data';
import { MachineCategory, MachineryItem } from '../types';
import { Settings2, Zap, Scaling, CheckSquare, Layers } from 'lucide-react';

export default function Machinery() {
  const [selectedCategory, setSelectedCategory] = useState<MachineCategory | 'all'>('all');

  const filteredMachinery = selectedCategory === 'all'
    ? MACHINERY_DATA
    : MACHINERY_DATA.filter(m => m.category === selectedCategory);

  const categories: { label: string; val: MachineCategory | 'all' }[] = [
    { label: 'All Equipment', val: 'all' },
    { label: 'Offset Presses', val: 'offset' },
    { label: 'Post-Press & Binding', val: 'post-press' },
    { label: 'Pre-Press & Support', val: 'pre-press' },
  ];

  return (
    <section id="machinery" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">Advanced Infrastructure</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            Our Machinery & Production Fleet
          </p>
          <p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
            Industrial-grade mechanical setups combined with smart color calibration systems ensure uncompromising consistency and speed across runs of any scale.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 mx-auto rounded-full mt-5" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.val}
              onClick={() => setSelectedCategory(cat.val)}
              className={`px-4 py-2.5 rounded-lg font-sans text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.val
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMachinery.map((machine) => (
            <div
              key={machine.id}
              className="bg-slate-800/50 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-slate-500/50 hover:bg-slate-800 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Image & Category Tag */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent" />
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-slate-900/90 backdrop-blur text-cyan-400 border border-slate-700 font-mono text-[10px] font-semibold uppercase rounded-full">
                  {machine.category === 'offset' 
                    ? 'Sheet-fed Offset' 
                    : machine.category === 'post-press'
                      ? 'Post-Press / Finishing'
                      : 'Pre-Press / Support'}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {machine.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 mt-2 leading-relaxed">
                    {machine.description}
                  </p>
                </div>

                {/* Technical specs block */}
                <div className="my-6 p-4 bg-slate-900/80 rounded-xl border border-slate-700/40">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <Zap className="w-3 h-3 text-cyan-400" /> Print Speed
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-200 mt-0.5">
                        {machine.specs.speed}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <Scaling className="w-3 h-3 text-pink-400" /> Max Sheet Size
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-200 mt-0.5">
                        {machine.specs.maxSheetSize}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <CheckSquare className="w-3 h-3 text-yellow-400" /> Resolution
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-200 mt-0.5">
                        {machine.specs.resolution}
                      </span>
                    </div>
                    <div className="flex flex-col col-span-2 mt-1 border-t border-slate-800/60 pt-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <Settings2 className="w-3 h-3 text-cyan-400" /> Key Innovation
                      </span>
                      <span className="text-xs font-mono text-cyan-300 mt-0.5">
                        {machine.specs.keyFeature}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Use capacity indicator */}
                <div className="flex gap-2.5 items-start">
                  <Layers className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wide">Production Application</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-light">{machine.capacity}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
