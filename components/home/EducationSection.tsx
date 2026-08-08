'use client';

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { educationData } from '@/config/education';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export function EducationSection() {
  const { t } = usePortfolio();

  return (
    <section id="education" className="py-12 sm:py-24 bg-[#070A10] border-t border-[#1B2330] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-sky-400 font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2">{t.education.subtitle}</p>
        </div>

        {/* Education Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#232D3F] -translate-x-1/2" />

          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute left-2.5 top-0 bottom-0 w-0.5 bg-[#232D3F]" />

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Desktop Timeline Center Node Indicator */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-2 border-[#232D3F] bg-[#05070A] items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>

                  {/* Mobile Timeline Node Indicator */}
                  <div className="md:hidden absolute left-[3px] top-6 z-10 w-3.5 h-3.5 rounded-full border-2 border-[#232D3F] bg-[#05070A]" />

                  {/* Alternating Card Wrapper */}
                  <div
                    className={`w-full pl-6 sm:pl-8 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-10 md:mr-auto' : 'md:pl-10 md:ml-auto'
                    }`}
                  >
                    {/* Education Card */}
                    <div className="p-4 sm:p-8 rounded-2xl bg-[#0C1018] border border-[#232D3F] hover:border-sky-500/40 transition-all shadow-xl">
                      <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#1B2330] text-slate-300 border border-[#232D3F] flex items-center gap-1.5 shrink-0">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{item.degree}</h3>
                      <div className="text-xs sm:text-sm font-semibold text-sky-400 mb-1">{item.institution}</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1 mb-4 sm:mb-6">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      {/* Highlights List */}
                      <div className="space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-[#232D3F]">
                        {item.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

