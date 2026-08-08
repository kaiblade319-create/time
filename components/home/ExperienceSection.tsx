'use client';

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { experienceData } from '@/config/experience';
import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export function ExperienceSection() {
  const { portfolioMode, activeRole, t } = usePortfolio();

  return (
    <section id="experience" className="py-12 sm:py-24 bg-[#05070A] border-t border-[#1B2330] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-sky-400 font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2">{t.experience.subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#232D3F] -translate-x-1/2" />

          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute left-2.5 top-0 bottom-0 w-0.5 bg-[#232D3F]" />

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isTargetMatch = portfolioMode === 'targeted' && item.roleRelevance.includes(activeRole);

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
                  <div
                    className={`hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-2 transition-all items-center justify-center ${
                      isTargetMatch
                        ? 'border-sky-400 bg-sky-400 shadow-lg shadow-sky-500/50 scale-125'
                        : 'border-[#232D3F] bg-[#05070A]'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isTargetMatch ? 'bg-white' : 'bg-sky-400'}`} />
                  </div>

                  {/* Mobile Timeline Node Indicator */}
                  <div
                    className={`md:hidden absolute left-[3px] top-6 z-10 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      isTargetMatch
                        ? 'border-sky-400 bg-sky-400 shadow-lg shadow-sky-500/50 scale-110'
                        : 'border-[#232D3F] bg-[#05070A]'
                    }`}
                  />

                  {/* Alternating Card Wrapper */}
                  <div
                    className={`w-full pl-6 sm:pl-8 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-10 md:mr-auto' : 'md:pl-10 md:ml-auto'
                    }`}
                  >
                    {/* Experience Card */}
                    <div
                      className={`p-4 sm:p-8 rounded-2xl bg-[#0C1018] border transition-all relative ${
                        isTargetMatch
                          ? 'border-[#232D3F] hover:border-sky-500/50 shadow-xl shadow-sky-500/5'
                          : 'border-[#1B2330] opacity-90 hover:opacity-100 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                            <span className="text-base sm:text-xl font-bold text-white">{item.role}</span>
                            {isTargetMatch && (
                              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 flex items-center gap-1 shrink-0">
                                <Sparkles className="w-3 h-3" /> Target Match
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-sky-400 flex items-center gap-1.5 sm:gap-2">
                            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400 font-mono mt-1 sm:mt-0">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#1B2330] text-slate-200 border border-[#232D3F] shrink-0">
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 shrink-0" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 text-xs sm:text-sm text-slate-300">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-[#232D3F]">
                        {item.techs.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-md bg-[#151D2A] text-slate-300 border border-[#232D3F]"
                          >
                            {tech}
                          </span>
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
