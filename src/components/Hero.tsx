import React from 'react';
import { ShieldCheck, Cpu, Flame, ArrowRight } from 'lucide-react';

interface HeroProps {
  // Props are now empty
}

export default function Hero({}: HeroProps) {
  const stats = [
    { label: 'Established In', val: '2001', desc: 'Book publishing & printing' },
    { label: 'Qualified Team', val: '50+ Experts', desc: 'Skilled professionals' },
    { label: 'Continuous Power', val: '130KV Generator', desc: 'Guaranteed prompt delivery' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Background Hero Image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/workshop pic (12).jpg"
          alt="Heavy-Duty Commercial Offset Press Machine in Action"
          className="w-full h-full object-cover opacity-35 scale-105 motion-safe:animate-[pulse_10s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-full text-slate-300 font-mono text-xs tracking-wider uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Ethiopia's Premier Book & Offset Press
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Where Precision Meets <br />
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                High-Volume Book Mastery
              </span>
            </h1>

            <p className="font-sans text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Mankusa Printing and Publishing (Print House) is Addis Ababa's leading commercial press with over 50 qualified professionals. Since 2001, we have undertaken all printing-related assignments—including books, catalogs, brochures, folders, packaging boxes, newsletters, envelopes, forms, and calendars—guaranteeing competitive rates and excellent quality.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans text-sm font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all w-full sm:w-auto cursor-pointer"
              >
                Initiate Project Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#machinery"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-sans text-sm font-semibold rounded-lg border border-slate-700 backdrop-blur transition-all w-full sm:w-auto cursor-pointer"
              >
                Explore Production Fleet
              </a>
            </div>

            {/* Key credentials bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-8 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                130KV Generator Backup
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-pink-400" />
                Prompt Service Delivery
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-yellow-400" />
                50+ Qualified Employees
              </div>
            </div>
          </div>

          {/* CMYK Interactive overlapping display card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[26rem] flex items-center justify-center">
              
              {/* Radial backdrop light */}
              <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 to-transparent blur-3xl rounded-full" />

              {/* Offset Simulation Rings */}
              <div className="absolute top-8 left-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-[1px] flex items-center justify-center group hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-500">
                <span className="absolute top-2 font-mono text-[9px] text-cyan-400 tracking-wider">CYAN / C</span>
              </div>

              <div className="absolute top-8 right-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-pink-500/30 bg-pink-500/5 backdrop-blur-[1px] flex items-center justify-center group hover:border-pink-400 hover:bg-pink-500/10 transition-all duration-500">
                <span className="absolute top-2 font-mono text-[9px] text-pink-400 tracking-wider">MAGENTA / M</span>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-[1px] flex items-center justify-center group hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-500">
                <span className="absolute bottom-2 font-mono text-[9px] text-yellow-400 tracking-wider">YELLOW / Y</span>
              </div>

              {/* Central high precision dot matrix alignment chart */}
              <div className="absolute w-20 h-20 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-2xl z-20 group hover:border-cyan-400 hover:scale-105 transition-all">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <span className="absolute w-10 h-0.5 bg-slate-700 animate-[spin_12s_linear_infinite]" />
                  <span className="absolute h-10 w-0.5 bg-slate-700 animate-[spin_12s_linear_infinite]" />
                  <div className="w-4 h-4 bg-slate-950 border border-slate-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="absolute text-[8px] font-mono font-bold text-slate-500 -top-4">ALIGN / K</span>
                </div>
              </div>

              {/* Tiny floating info bubbles */}
              <div className="absolute bottom-12 right-2 sm:right-6 bg-slate-900/90 border border-slate-800 p-3 rounded-lg shadow-xl backdrop-blur max-w-[140px] z-30">
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wide">Heavy stock</div>
                <div className="text-xs text-white font-semibold mt-0.5">Up to 400 gsm</div>
              </div>

              <div className="absolute top-16 left-0 sm:-left-4 bg-slate-900/90 border border-slate-800 p-3 rounded-lg shadow-xl backdrop-blur max-w-[140px] z-30">
                <div className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-wide">Plates feed</div>
                <div className="text-xs text-white font-semibold mt-0.5">Continuous auto</div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-xl hover:border-slate-700/80 hover:bg-slate-900/80 transition-all flex flex-col justify-between"
            >
              <div className="text-sm font-sans font-medium text-slate-400">{stat.label}</div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-2 mb-1">
                {stat.val}
              </div>
              <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
