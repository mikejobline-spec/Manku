import React, { useState, useEffect } from 'react';
import { MATERIALS_DATA } from '../data';
import { ClientInquiry } from '../types';
import { Phone, Mail, Send, MapPin, Clock, History, FileText, CheckCircle2, Trash2, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDarkMode } = useTheme();
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
    <section id="contact" className={`py-24 sm:py-32 lg:py-40 transition-colors duration-300 scroll-mt-10 border-t ${
      isDarkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-800 border-slate-100'
    }`}>
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Connect & Request</h2>
          <p className={`font-display text-3xl sm:text-4xl font-extrabold mt-2 mb-4 tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Contact & Custom Inquiries
          </p>
          <p className={`font-sans text-sm mt-3 leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Our estimation team delivers precise, custom quotes within 4 business hours. Submit your design specs or get in touch.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & History Panel */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Card */}
            <div className={`transition-colors duration-300 border rounded-2xl p-6 sm:p-8 ${
              isDarkMode ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <h3 className={`font-display text-lg font-bold border-b pb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
              }`}>
                Mankusa Headquarters
              </h3>
              
              <div className="mt-6 space-y-6">
                
                {/* Physical Location */}
                <div className="flex gap-4 items-start">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-900 text-cyan-400 border-slate-800' : 'bg-cyan-50 text-cyan-600 border-cyan-100'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Facility Location</h4>
                    <p className={`text-sm mt-1 leading-normal font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Around Mekanisa Abo church<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-900 text-pink-400 border-slate-800' : 'bg-pink-50 text-pink-600 border-pink-100'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Press Room Hotline</h4>
                    <p className={`text-sm mt-1 leading-normal font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      +251 118 346305 <span className="text-xs text-slate-400 font-mono">(Direct)</span><br />
                      +251 911 624910 <span className="text-xs text-slate-400 font-mono">(Quotes Dept)</span>
                    </p>
                  </div>
                </div>

                {/* Digital / Telegram */}
                <div className="flex gap-4 items-start">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-900 text-yellow-400 border-slate-800' : 'bg-yellow-50 text-amber-500 border-yellow-100'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Digital & Telegram Support</h4>
                    <p className={`text-sm mt-1 leading-normal font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <a href="mailto:quotes@mankusaprinting.com" className={`transition-colors ${isDarkMode ? 'hover:text-cyan-400 text-slate-300' : 'hover:text-cyan-600 text-slate-750'}`}>quotes@mankusaprinting.com</a>
                    </p>
                    <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Telegram: <a href="https://t.me/mankusa_printing" target="_blank" rel="noopener noreferrer" className={`font-semibold transition-colors ${isDarkMode ? 'text-cyan-400 hover:underline' : 'text-cyan-600 hover:underline'}`}>@mankusa_printing</a>
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className={`flex gap-4 items-start border-t pt-4 transition-colors duration-300 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-500 border-slate-200'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono uppercase font-bold tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Press Operations Hours</h4>
                    <p className={`text-xs mt-0.5 font-light leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Mon – Fri: 24 Hours <span className="text-slate-400 font-mono">(Continuous run)</span><br />
                      Sat: 8:00 AM – 4:00 PM <span className="text-slate-400 font-mono">(Maintenance)</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PERSISTENT STORAGE PANEL: Client Inquiries History */}
            {inquiries.length > 0 && (
              <div className={`border rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${
                isDarkMode ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                <h3 className={`font-display text-sm font-bold flex items-center gap-2 border-b pb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white border-slate-800' : 'text-slate-950 border-slate-200'
                }`}>
                  <History className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  Your Active Inquiries ({inquiries.length})
                </h3>

                <div className="mt-4 space-y-4 max-h-80 overflow-y-auto pr-1">
                  {inquiries.map((inq) => {
                    return (
                      <div
                        key={inq.id}
                        className={`p-4 border rounded-xl transition-all flex flex-col justify-between duration-300 ${
                          isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-slate-400">{inq.createdAt}</span>
                            <h4 className={`text-xs font-bold mt-0.5 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                              Inquiry by {inq.clientName}
                            </h4>
                            {inq.companyName && (
                              <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{inq.companyName}</span>
                            )}
                          </div>
                          
                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="p-1 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                            title="Remove inquiry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Status row */}
                        <div className={`mt-3 pt-3 border-t flex items-center justify-between transition-colors duration-300 ${isDarkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 uppercase block leading-none">Status</span>
                            <span className={`inline-block px-1.5 py-0.5 border font-mono text-[8px] font-bold uppercase rounded mt-0.5 transition-colors duration-300 ${
                              isDarkMode
                                ? 'bg-cyan-950/40 text-cyan-400 border-cyan-900'
                                : 'bg-cyan-50 text-cyan-700 border-cyan-100'
                            }`}>
                              {inq.status}
                            </span>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-400 uppercase block leading-none text-right">Contact</span>
                            <span className={`text-[11px] font-sans font-medium transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-750'}`}>
                              {inq.phone}
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Inquiry Submission Form Area */}
          <div className="lg:col-span-7">
            <div className={`border rounded-2xl p-6 sm:p-10 transition-colors duration-300 relative ${
              isDarkMode ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              
              {/* Overlay success dialog if submitted */}
              {successInquiry && (
                <div className={`absolute inset-0 backdrop-blur rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center z-30 transition-all duration-300 ${
                  isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'
                }`}>
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-600 mb-4 animate-[bounce_1.5s_infinite]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <span className="font-mono text-[10px] text-cyan-600 font-bold uppercase tracking-widest">Inquiry Successfully Sent</span>
                  <h3 className={`font-display text-2xl font-bold mt-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Inquiry Submitted</h3>
                  
                  <p className="font-sans text-xs text-slate-500 mt-2 max-w-md leading-relaxed">
                    Thank you, <strong className={isDarkMode ? 'text-slate-200' : 'text-slate-850'}>{successInquiry.clientName}</strong>! Your inquiry has been successfully sent to our estimation team under ID <code className={`font-mono px-1.5 py-0.5 rounded text-[10px] ${isDarkMode ? 'bg-slate-950 text-cyan-400' : 'bg-slate-100 text-cyan-700'}`}>{successInquiry.id}</code>. We will get in touch with you shortly.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <button
                      onClick={() => setSuccessInquiry(null)}
                      className={`px-5 py-2.5 font-sans text-xs font-semibold rounded-lg border cursor-pointer transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      Send Another Inquiry
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

              <h3 className={`font-display text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Send an Inquiry
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1 font-light leading-relaxed">
                Provide your project specifications below to get a custom estimation from our team.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                
                {/* Client Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className={`font-mono text-[10px] uppercase font-bold mb-1.5 flex items-center gap-1 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Mike Jobline"
                      className={`p-3 border rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-850 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={`font-mono text-[10px] uppercase font-bold mb-1.5 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Company Name <span className="text-slate-400 font-light">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Enterprise Pubs"
                      className={`p-3 border rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-850 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className={`font-mono text-[10px] uppercase font-bold mb-1.5 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mikejobline@gmail.com"
                      className={`p-3 border rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-850 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className={`font-mono text-[10px] uppercase font-bold mb-1.5 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 019-2834"
                      className={`p-3 border rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-850 text-white placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans text-sm font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/10 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
