import React from 'react';
import { History, CheckCircle, Users, Heart, Target, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();

  const values = [
    {
      icon: Heart,
      title: 'Customer Respect & Faith',
      desc: 'We believe in treating every customer with deep respect, integrating honesty, integrity, and business ethics into all aspects of our functioning.'
    },
    {
      icon: Target,
      title: 'Our Ultimate Goal',
      desc: 'Delighted customers are key to our success, and we strive to achieve this every second. Printing is our passion and we deliver the most effective solutions.'
    },
    {
      icon: Sparkles,
      title: 'Creative Innovation',
      desc: 'We provide exceptional services by pursuing business through innovation and creativity that exceed the expectations of our esteemed customers.'
    }
  ];

  const milestones = [
    { year: '2001', title: 'Publishing Inception', desc: 'Started our journey by publishing premium books into print media, establishing a high reputation.' },
    { year: '2010', title: 'Printing Press Expansion', desc: 'Expanded into a full-scale physical printing press journey in Addis Ababa, Addis Ababa City.' },
    { year: '2018', title: 'Production Upgrade', desc: 'Commissioned heavy-duty Miller and Heidelberg perfecting systems to triple output capacity.' },
    { year: '2026', title: 'Ethiopia Leader', desc: 'Operating with over 50 highly qualified printing professionals and an uninterrupted 130KV generator setup.' }
  ];

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-t border-slate-800 text-white' : 'bg-slate-50 border-t border-slate-200 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Our Heritage & Integrity</h2>
          <p className={`font-display text-3xl sm:text-4xl font-extrabold mt-2 mb-4 tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Crafting Tangible Excellence Since 2001
          </p>
          <div className={`h-1 w-12 bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-500' : 'from-cyan-500 to-blue-500'} mx-auto rounded-full`} />
        </div>

        {/* Corporate Summary & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className={`font-display text-2xl font-bold leading-snug transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Mankusa Printing and Publishing — Addis Ababa's Trusted Partner for High Quality Products & Prompt Service.
            </h3>
            
            <p className={`font-sans leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Mankusa Printing and Publishing started its journey in <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>2001</strong> by publishing books into print media. Over the years, we expanded into a physical high-capacity printing press in <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>2010</strong>, creating a full-fledged pre-press, offset printing, and finishing workspace in Addis Ababa, Ethiopia.
            </p>
            
            <p className={`font-sans leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              We undertake all printing-related assignments with an unwavering customer commitment: working with you every step of the way to exceed expectations, utilizing friendly, skilled professionals. We guarantee highly competitive rates along with excellent & quality products across everything from books to commercial packaging.
            </p>

            {/* Quick figures */}
            <div className={`grid grid-cols-2 gap-4 pt-4 border-t transition-colors duration-300 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-start gap-3">
                <Users className={`w-5 h-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
                <div>
                  <div className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>50+ Qualified</div>
                  <div className={`text-xs font-mono uppercase transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Full-Time Staff</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className={`w-5 h-5 mt-1 flex-shrink-0 ${isDarkMode ? 'text-pink-400' : 'text-pink-500'}`} />
                <div>
                  <div className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ethiopia Core</div>
                  <div className={`text-xs font-mono uppercase transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Addis Ababa City</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values side panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`rounded-2xl p-6 sm:p-8 border flex flex-col space-y-6 transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-850 shadow-none border-slate-800'
                : 'bg-white rounded-2xl shadow-xl shadow-slate-200/50 border-slate-100'
            }`}>
              <h4 className={`font-display text-lg font-bold border-b pb-3 flex items-center gap-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-100'
              }`}>
                <History className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
                Our Foundational Pillars
              </h4>

              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors duration-300 ${
                      isDarkMode
                        ? 'bg-slate-900 border-slate-800 text-cyan-400'
                        : 'bg-slate-50 border-slate-100 text-cyan-600 shadow-sm'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className={`font-sans text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{val.title}</h5>
                      <p className={`font-sans text-xs mt-1 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Milestones timeline grid */}
        <div className="mt-20">
          <h4 className={`font-mono text-xs font-semibold tracking-wider text-center uppercase mb-10 transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Our History & Evolution</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Horizontal timeline line */}
            <div className={`hidden md:block absolute top-[1.375rem] left-8 right-8 h-0.5 z-0 transition-colors duration-300 ${isDarkMode ? 'bg-slate-850' : 'bg-slate-200'}`} />
            
            {milestones.map((stone, idx) => (
              <div
                key={idx}
                className={`relative border rounded-xl p-5 hover:shadow-lg transition-all z-10 duration-300 ${
                  isDarkMode
                    ? 'bg-slate-850 border-slate-800 hover:border-cyan-500/50 hover:shadow-none'
                    : 'bg-white border-slate-100 hover:border-cyan-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold rounded-full">
                    {stone.year}
                  </span>
                  <div className={`w-4 h-4 rounded-full border-2 hidden md:block transition-colors duration-300 ${
                    isDarkMode ? 'bg-cyan-950/40 border-cyan-400' : 'bg-cyan-100 border-cyan-500'
                  }`} />
                </div>
                <h5 className={`font-sans text-sm font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{stone.title}</h5>
                <p className={`font-sans text-xs mt-1.5 leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stone.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
