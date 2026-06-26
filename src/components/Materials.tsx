import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data';
import { MaterialCategory, MaterialItem } from '../types';
import { Scale, Ruler, DollarSign, Eye, EyeOff, PackageCheck } from 'lucide-react';

export default function Materials() {
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory | 'all'>('all');
  
  // Calculator States
  const [calcMaterialId, setCalcMaterialId] = useState(MATERIALS_DATA[0].id);
  const [calcQuantity, setCalcQuantity] = useState(1000);
  const [calcSize, setCalcSize] = useState<'A4' | 'A3' | 'B2' | 'Full'>('B2');

  const filteredMaterials = selectedCategory === 'all'
    ? MATERIALS_DATA
    : MATERIALS_DATA.filter(m => m.category === selectedCategory);

  const categories: { label: string; val: MaterialCategory | 'all' }[] = [
    { label: 'All Stocks', val: 'all' },
    { label: 'Heavy Cardstock', val: 'cardstock' },
    { label: 'Fine Papers', val: 'fine-paper' },
    { label: 'Synthetics & Vinyl', val: 'vinyl-packaging' },
    { label: 'Specialty Boards', val: 'specialty' }
  ];

  // Calculations for paper weight & stack thickness
  const selectedCalcMaterial = MATERIALS_DATA.find(m => m.id === calcMaterialId) || MATERIALS_DATA[0];
  
  // Extracts numeric GSM value from weight string (e.g., "350 gsm" -> 350)
  const gsmValue = parseInt(selectedCalcMaterial.weight) || 300;
  // Extracts numeric mm thickness value (e.g., "0.38 mm" -> 0.38)
  const mmThickness = parseFloat(selectedCalcMaterial.thickness) || 0.35;

  // Sheet Area in square meters
  const sizeMultiplier = {
    A4: 0.062,    // 210 x 297 mm
    A3: 0.125,    // 297 x 420 mm
    B2: 0.350,    // 500 x 707 mm
    Full: 0.700,  // 700 x 1000 mm (Full Offset Sheet)
  };

  const currentArea = sizeMultiplier[calcSize];
  
  // Total weight = GSM * area * quantity / 1000 (g to kg)
  const totalWeightKg = (gsmValue * currentArea * calcQuantity) / 1000;
  
  // Total thickness = mmThickness * quantity / 1000 (mm to meters)
  const totalThicknessM = (mmThickness * calcQuantity) / 1000;

  // Base price
  const basePricePer1000 = selectedCalcMaterial.basePricePer1000;
  const estimatedCost = (calcQuantity / 1000) * basePricePer1000 * (calcSize === 'A4' ? 0.4 : calcSize === 'A3' ? 0.7 : calcSize === 'B2' ? 1.0 : 1.5);

  return (
    <section id="materials" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-cyan-600 font-bold uppercase tracking-widest">Premium Substrates</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
            Materials & Media Inventory
          </p>
          <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
            We inventory a catalog of certified fine papers, rigid raw cardboards, waterproof synthetic vinyls, and light-catching mineral cards to match your creative layout.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.val}
              onClick={() => setSelectedCategory(cat.val)}
              className={`px-3.5 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                selectedCategory === cat.val
                  ? 'bg-slate-900 border-slate-800 text-white shadow'
                  : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Substrate Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white border border-slate-200/80 rounded-xl p-6 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <span className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-mono font-bold uppercase rounded">
                    {material.weight} / {material.thickness}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold ${
                    material.stockLevel === 'In Stock'
                      ? 'text-emerald-600'
                      : material.stockLevel === 'Limited Stock'
                      ? 'text-amber-600'
                      : 'text-indigo-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      material.stockLevel === 'In Stock'
                        ? 'bg-emerald-500'
                        : material.stockLevel === 'Limited Stock'
                        ? 'bg-amber-500'
                        : 'bg-indigo-500'
                    }`} />
                    {material.stockLevel}
                  </span>
                </div>

                {/* Substrate Name */}
                <h3 className="font-display text-lg font-bold text-slate-900">{material.name}</h3>
                <span className="text-[11px] font-mono text-cyan-600 block mt-0.5">{material.finish}</span>
                
                <p className="font-sans text-xs text-slate-500 mt-2.5 leading-relaxed font-light">
                  {material.description}
                </p>
              </div>

              {/* Specs bullet points lists */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {material.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] font-sans rounded-md border border-slate-100"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
                
                {/* Micro CTA to add to estimator */}
                <button
                  onClick={() => setCalcMaterialId(material.id)}
                  className="mt-4 w-full text-center text-[11px] font-mono font-bold text-cyan-600 hover:text-cyan-700 hover:underline flex items-center justify-center gap-1 cursor-pointer"
                >
                  <PackageCheck className="w-3.5 h-3.5" />
                  Load into Paper Stats Calculator
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* INTERACTIVE COMPONENT: Paper Weight & Stack Volume Calculator */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Side */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div>
                <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Interactive Spec Calculator</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Physical Stock & Weight Simulator</h3>
                <p className="font-sans text-xs text-slate-400 mt-1 font-light">
                  Offset printing runs consume heavy raw paper stocks. Simulate the exact physical tonnage, stack height, and raw material baseline cost.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Select Material */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1.5">Substrate</label>
                  <select
                    value={calcMaterialId}
                    onChange={(e) => setCalcMaterialId(e.target.value)}
                    className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-sans text-white focus:outline-none focus:border-cyan-400"
                  >
                    {MATERIALS_DATA.map((mat) => (
                      <option key={mat.id} value={mat.id}>
                        {mat.name} ({mat.weight})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preset Sheet Sizes */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1.5">Sheet Size</label>
                  <select
                    value={calcSize}
                    onChange={(e) => setCalcSize(e.target.value as any)}
                    className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-sans text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="A4">A4 (210 x 297 mm)</option>
                    <option value="A3">A3 (297 x 420 mm)</option>
                    <option value="B2">B2 Format (500 x 707 mm)</option>
                    <option value="Full">Full Offset Sheet (700 x 1000 mm)</option>
                  </select>
                </div>

                {/* Quantity Input */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-slate-400 uppercase font-semibold mb-1.5">Run Quantity</label>
                  <input
                    type="number"
                    min="100"
                    max="100000"
                    step="500"
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(Math.max(100, parseInt(e.target.value) || 0))}
                    className="p-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Slider for convenience */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1.5">
                  <span>Fine Adjust Run Volume</span>
                  <span className="text-cyan-400 font-bold">{calcQuantity.toLocaleString()} Sheets</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={calcQuantity}
                  onChange={(e) => setCalcQuantity(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Results Output Board */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex flex-col space-y-4">
                <h4 className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-3">
                  Simulation Output Metrics
                </h4>

                {/* Stat 1: Physical Weight */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-sans font-medium text-slate-200">Total Shipment Weight</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">GSM × Area × Quantity</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono font-bold text-white">
                      {totalWeightKg.toFixed(1)} kg
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {(totalWeightKg * 2.20462).toFixed(1)} lbs
                    </div>
                  </div>
                </div>

                {/* Stat 2: Stack Height */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/15 flex items-center justify-center text-pink-400">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-sans font-medium text-slate-200">Total Stack Height</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Caliper caliper height</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono font-bold text-white">
                      {totalThicknessM.toFixed(2)} meters
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {(totalThicknessM * 3.28084).toFixed(1)} feet
                    </div>
                  </div>
                </div>

                {/* Stat 3: Material Cost */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-sans font-medium text-slate-200">Substrate Baseline Cost</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Estimated sheet price</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-mono font-bold text-emerald-400">
                      ${estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">
                      ${(estimatedCost / calcQuantity).toFixed(4)} per sheet
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded text-[10px] font-sans text-slate-500 leading-normal border border-slate-800 mt-2">
                  *This baseline simulator provides a structural material reference. Final billing will account for press setup fees, plate generation, color alignments, and cutting labor.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
