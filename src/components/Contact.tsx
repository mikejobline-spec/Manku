import React, { useState, useEffect } from 'react';
import { MATERIALS_DATA } from '../data';
import { ClientInquiry } from '../types';
import { Phone, Mail, Send, MapPin, Clock, History, FileText, CheckCircle2, Trash2, Globe } from 'lucide-react';

export default function Contact() {
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [materialId, setMaterialId] = useState(MATERIALS_DATA[0].id);
  const [size, setSize] = useState('B2 Format (500 x 707 mm)');
  const [quantity, setQuantity] = useState(1000);
  const [customMessage, setCustomMessage] = useState('');
  
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [successInquiry, setSuccessInquiry] = useState<ClientInquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('printing_press_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email || !phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Dynamic calculations for the inquiry submission
    const selectedMaterial = MATERIALS_DATA.find(m => m.id === materialId) || MATERIALS_DATA[0];
    
    // Offset standard costs
    const basePlateSetupCost = 250; // Offset plates setup
    const paperCost = (quantity / 1000) * selectedMaterial.basePricePer1000;
    const runLaborCost = (quantity / 5000) * 80; // $80 per 5000 sheets printing time
    
    const calculatedCost = basePlateSetupCost + paperCost + runLaborCost;
    
    // Estimated lead time based on volume
    const calculatedDays = quantity <= 1000 ? 3 : quantity <= 5000 ? 5 : 8;

    const newInquiry: ClientInquiry = {
      id: 'inq_' + Date.now(),
      clientName,
      companyName: companyName || undefined,
      email,
      phone,
      materialId,
      size,
      quantity,
      customMessage,
      status: 'Received',
      createdAt: new Date().toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      estimatedCost: calculatedCost,
      estimatedDays: calculatedDays
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('printing_press_inquiries', JSON.stringify(updated));

    setSuccessInquiry(newInquiry);
    setIsSubmitting(false);

    // Reset Form
    setClientName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setCustomMessage('');
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = inquiries.filter(i => i.id !== id);
    setInquiries(filtered);
    localStorage.setItem('printing_press_inquiries', JSON.stringify(filtered));
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">Connect & Request</h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            Contact & Custom Inquiries
          </p>
          <p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
            Our estimation team delivers precise, custom quotes within 4 business hours. Submit your design specs or get in touch.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & History Panel */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Card */}
            <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-display text-lg font-bold text-white border-b border-slate-850 pb-3">
                AeroPress Headquarters
              </h3>
              
              <div className="mt-6 space-y-6">
                
                {/* Physical Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 border border-cyan-500/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">Facility Location</h4>
                    <p className="text-sm text-slate-200 mt-1 leading-normal font-light">
                      4480 Industrial Press Parkway, Suite 100<br />
                      Grand Rapids, MI 49503
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 flex-shrink-0 border border-pink-500/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">Press Room Hotline</h4>
                    <p className="text-sm text-slate-200 mt-1 leading-normal font-light">
                      +1 (616) 555-0190 <span className="text-xs text-slate-500 font-mono">(Direct)</span><br />
                      +1 (616) 555-0195 <span className="text-xs text-slate-500 font-mono">(Quotes Dept)</span>
                    </p>
                  </div>
                </div>

                {/* Digital / Telegram */}
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 flex-shrink-0 border border-yellow-500/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">Digital & Telegram Support</h4>
                    <p className="text-sm text-slate-200 mt-1 leading-normal font-light">
                      <a href="mailto:quotes@aeropressprinting.com" className="hover:text-cyan-400 transition-colors">quotes@aeropressprinting.com</a>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Telegram: <a href="https://t.me/aeropress_offset" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@aeropress_offset</a>
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4 items-start border-t border-slate-800 pt-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0 border border-slate-700/60">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wide">Press Operations Hours</h4>
                    <p className="text-xs text-slate-300 mt-0.5 font-light leading-relaxed">
                      Mon – Fri: 24 Hours <span className="text-slate-500 font-mono">(Continuous run)</span><br />
                      Sat: 8:00 AM – 4:00 PM <span className="text-slate-500 font-mono">(Maintenance)</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PERSISTENT STORAGE PANEL: Client Inquiries History */}
            <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-display text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <History className="w-4 h-4 text-cyan-400" />
                Your Active Inquiries & Estimates ({inquiries.length})
              </h3>

              {inquiries.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500 font-sans">
                  No previous inquiries found in this browser session. Submitted quotes will populate here instantly.
                </div>
              ) : (
                <div className="mt-4 space-y-4 max-h-80 overflow-y-auto pr-1">
                  {inquiries.map((inq) => {
                    const material = MATERIALS_DATA.find(m => m.id === inq.materialId);
                    return (
                      <div
                        key={inq.id}
                        className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-slate-500">{inq.createdAt}</span>
                            <h4 className="text-xs font-bold text-white mt-0.5">
                              {inq.quantity.toLocaleString()} × {material?.name || 'Custom Material'}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{inq.size}</span>
                          </div>
                          
                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="p-1 text-slate-600 hover:text-rose-400 transition-colors"
                            title="Remove quote history"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Calculations summary row */}
                        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none">Estimate Range</span>
                            <span className="text-sm font-mono font-bold text-emerald-400">
                              ${inq.estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none text-right">Fulfillment</span>
                            <span className="text-[11px] font-sans font-medium text-slate-300">
                              {inq.estimatedDays} business days
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none text-right">Status</span>
                            <span className="inline-block px-1.5 py-0.5 bg-cyan-950/40 text-cyan-400 border border-cyan-800/60 font-mono text-[8px] font-bold uppercase rounded mt-0.5">
                              {inq.status}
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Inquiry Submission Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl relative">
              
              {/* Overlay success dialog if submitted */}
              {successInquiry && (
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center z-30 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mb-4 animate-[bounce_1.5s_infinite]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Inquiry Successfully Queued</span>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">Instant Offset Estimate Issued</h3>
                  
                  <p className="font-sans text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{successInquiry.clientName}</strong>! Your inquiry for <strong className="text-white">{successInquiry.quantity.toLocaleString()} sheets</strong> has been filed under ID <code className="text-cyan-300 font-mono bg-slate-950 px-1 py-0.5 rounded text-[10px]">{successInquiry.id}</code>.
                  </p>

                  {/* Calculations receipts panel */}
                  <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl w-full max-w-md my-6 text-left space-y-3">
                    <div className="text-xs text-slate-400 font-mono uppercase tracking-wide border-b border-slate-800 pb-2">
                      Dynamic Estimator Output
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Total Print Setup & Plate Cost:</span>
                      <span className="font-mono text-slate-200">$250.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Substrate Stock Cost:</span>
                      <span className="font-mono text-slate-200">
                        ${((successInquiry.estimatedCost - 250 - (successInquiry.quantity / 5000) * 80)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Press Labor & Drying:</span>
                      <span className="font-mono text-slate-200">
                        ${((successInquiry.quantity / 5000) * 80).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold border-t border-slate-800 pt-2.5">
                      <span className="text-white">Estimated Quote Sum:</span>
                      <span className="font-mono text-emerald-400">
                        ${successInquiry.estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
                      <span>Expected Press Delivery:</span>
                      <span className="font-sans text-slate-400">{successInquiry.estimatedDays} business days</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSuccessInquiry(null)}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-sans text-xs font-semibold rounded-lg border border-slate-700 cursor-pointer"
                    >
                      File Another Quote
                    </button>
                    <a
                      href="#site-header"
                      onClick={() => setSuccessInquiry(null)}
                      className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-sans text-xs font-semibold rounded-lg"
                    >
                      Return to Top
                    </a>
                  </div>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white">
                Initiate Custom Spec Inquiry
              </h3>
              <p className="font-sans text-xs text-slate-400 mt-1 font-light leading-relaxed">
                Provide your structural requirements below. This client form activates our custom calculation algorithms for instant blueprint receipt generation.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                
                {/* Client Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5 flex items-center gap-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Mike Jobline"
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                      Company Name <span className="text-slate-500 font-light">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Enterprise Pubs"
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mikejobline@gmail.com"
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Substrate & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                      Target Substrate Media
                    </label>
                    <select
                      value={materialId}
                      onChange={(e) => setMaterialId(e.target.value)}
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {MATERIALS_DATA.map((mat) => (
                        <option key={mat.id} value={mat.id}>
                          {mat.name} ({mat.weight})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                      Fulfillment Format Size
                    </label>
                    <select
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="B2 Format (500 x 707 mm)">B2 Format (500 x 707 mm)</option>
                      <option value="Full Offset Sheet (700 x 1000 mm)">Full Offset Sheet (700 x 1000 mm)</option>
                      <option value="A3 Booklet Spread (297 x 420 mm)">A3 Booklet Spread (297 x 420 mm)</option>
                      <option value="A4 Corporate Letter (210 x 297 mm)">A4 Corporate Letter (210 x 297 mm)</option>
                      <option value="Custom Packaging Box Die-cut">Custom Packaging Box Die-cut</option>
                    </select>
                  </div>
                </div>

                {/* Run Quantity Slider / Input */}
                <div className="flex flex-col bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                    <span>Desired Print Run Volume:</span>
                    <span className="text-cyan-400 font-bold">{quantity.toLocaleString()} sheets</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer mb-2"
                  />
                  <span className="text-[10px] font-sans text-slate-500 leading-normal">
                    *Offset setups are most cost-efficient at 1,000+ sheets. Per-unit cost drops up to 80% on volumes greater than 10,000 prints due to setup amortizations.
                  </span>
                </div>

                {/* Custom Message */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1.5">
                    Structural Requirements & Layout Notes
                  </label>
                  <textarea
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Specify bleed bounds, spot color codes, gold foil areas, structural packaging folds, and binding requirements..."
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans text-sm font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/10 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Calculating...' : 'Submit Spec & Generate Receipt Estimate'}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
