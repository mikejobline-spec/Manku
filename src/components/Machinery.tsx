import React, { useState } from 'react';
import { MACHINERY_DATA } from '../data';
import { MachineCategory } from '../types';
import { Settings2, Zap, Scaling, CheckSquare, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getAssetUrl } from '../utils';

export default function Machinery() {
  const { isDarkMode } = useTheme();
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
    <section id="machinery" className={`py-24 sm:py-32 lg:py-40 transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-white border-t border-slate-900' : 'bg-white text-slate-800 border-t border-slate-100'}`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Advanced Infrastructure</h2>
          <p className={`font-display text-3xl sm:text-4xl font-extrabold mt-2 mb-4 tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Machinery & Production Fleet
          </p>
          <p className={`font-sans text-sm mt-2 mb-4 leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Industrial-grade mechanical setups combined with smart color calibration systems ensure uncompromising consistency and speed across runs of any scale.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-5" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.val}
              onClick={() => setSelectedCategory(cat.val)}
              className={`px-4 py-2.5 rounded-lg font-sans text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                selectedCategory === cat.val
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/15'
                  : isDarkMode
                    ? 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachinery.map((machine) => (
            <div
              key={machine.id}
              className={`border rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-none'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl shadow-sm'
              }`}
            >
              {/* Image & Category Tag */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={getAssetUrl(machine.image)}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-slate-900/50' : 'from-white/20'} via-transparent to-transparent`} />
                <span className={`absolute top-4 right-4 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-slate-950/90 text-cyan-400 border-slate-800'
                    : 'bg-white/90 backdrop-blur text-cyan-600 border-slate-200'
                }`}>
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
                  <h3 className={`font-display text-xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-950 group-hover:text-cyan-600'
                  }`}>
                    {machine.name}
                  </h3>
                  <p className={`font-sans text-xs mt-2 leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {machine.description}
                  </p>
                </div>

                {/* Technical specs block */}
                <div className={`my-6 p-4 rounded-xl border transition-colors duration-300 ${
                  isDarkMode ? 'bg-slate-950/50 border-slate-850' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-mono uppercase flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Zap className="w-3 h-3 text-cyan-500" /> Print Speed
                      </span>
                      <span className={`text-xs font-mono font-medium mt-0.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {machine.specs.speed}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-mono uppercase flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Scaling className="w-3 h-3 text-pink-500" /> Max Sheet Size
                      </span>
                      <span className={`text-xs font-mono font-medium mt-0.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {machine.specs.maxSheetSize}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[10px] font-mono uppercase flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <CheckSquare className="w-3 h-3 text-amber-500" /> Resolution
                      </span>
                      <span className={`text-xs font-mono font-medium mt-0.5 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {machine.specs.resolution}
                      </span>
                    </div>
                    <div className={`flex flex-col col-span-2 mt-1 border-t pt-2 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-200/60'}`}>
                      <span className={`text-[10px] font-mono uppercase flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <Settings2 className="w-3 h-3 text-cyan-500" /> Key Innovation
                      </span>
                      <span className={`text-xs font-mono mt-0.5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        {machine.specs.keyFeature}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Use capacity indicator */}
                <div className="flex gap-2.5 items-start">
                  <Layers className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                  <div>
                    <h4 className={`text-[10px] font-mono uppercase font-bold tracking-wide ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Production Application</h4>
                    <p className={`text-xs mt-0.5 leading-relaxed font-light ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{machine.capacity}</p>
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
