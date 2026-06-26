import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Machinery from './components/Machinery';
import Materials from './components/Materials';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Printer, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Globe } from 'lucide-react';

export default function App() {
  
  // Smooth scroll to the interactive calculator on materials section
  const handleOpenEstimator = () => {
    const section = document.getElementById('materials');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Find the calculator panel and add a temporary highlight/pulse
      setTimeout(() => {
        const calculator = section.querySelector('.bg-slate-900');
        if (calculator) {
          calculator.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-4', 'ring-offset-slate-900');
          setTimeout(() => {
            calculator.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-4', 'ring-offset-slate-900');
          }, 2000);
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between select-none">
      
      {/* Header Navigation */}
      <Navbar onOpenEstimator={handleOpenEstimator} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenEstimator={handleOpenEstimator} />
        <About />
        <Machinery />
        <Materials />
        <Portfolio />
        <Contact />
      </main>

      {/* Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
        
        {/* Top visual CMYK border bar representing print alignment channels */}
        <div className="h-2 w-full flex">
          <span className="h-full w-1/4 bg-cyan-500" />
          <span className="h-full w-1/4 bg-pink-500" />
          <span className="h-full w-1/4 bg-yellow-400" />
          <span className="h-full w-1/4 bg-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand & Certification */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-cyan-400/80 blend-multiply" />
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-pink-400/80 blend-multiply" />
                  <span className="absolute bottom-0.5 left-0.5 w-4 h-4 rounded-full bg-yellow-400/80 blend-multiply" />
                  <span className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-slate-950/80 flex items-center justify-center z-10">
                    <Printer className="w-2.5 h-2.5 text-white" />
                  </span>
                </div>
                <span className="font-display text-lg font-bold text-white tracking-tight">
                  AeroPress Printing
                </span>
              </div>
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                High-volume, state-of-the-art sheet-fed offset and digital printing press operations. Certified for FSC® paper chain of custody and ISO 12647-2 color management.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                FSC® C104928 Certified
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Capability Indexes
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">Our Print Heritage</a>
                </li>
                <li>
                  <a href="#machinery" className="hover:text-white transition-colors">Offset & Flatbed Machinery</a>
                </li>
                <li>
                  <a href="#materials" className="hover:text-white transition-colors">Paper Substrate Stocks</a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">Completed Master Gallery</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Inquiries & Quote Estimations</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Channels */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Direct Channels
              </h4>
              <ul className="space-y-3.5 text-xs font-sans text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span>
                    4480 Industrial Press Parkway<br />
                    Grand Rapids, MI 49503
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span>+1 (616) 555-0190</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a href="mailto:quotes@aeropressprinting.com" className="hover:text-white transition-colors">
                    quotes@aeropressprinting.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Telegram & Social Links */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Global Network
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-normal mb-4 font-light">
                Submit raw design package files directly on our Telegram channel or request sample booklet portfolios.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://t.me/aeropress_offset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-mono font-bold rounded border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Telegram Channels
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Design Credit */}
          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
            <div>
              © 2026 AeroPress Printing Press Co. All operational rights reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Standard Calibration</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              <span className="text-slate-500 pl-1">ISO 12647-2</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
