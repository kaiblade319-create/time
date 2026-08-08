'use client';

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { technicalSkills, softSkills, languageSkills, techArsenal } from '@/config/skills';
import { Cpu, Users, Globe2, Terminal, Check, Sparkles } from 'lucide-react';

export function SkillsSection() {
  const { portfolioMode, activeRole, t } = usePortfolio();

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'advanced':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'intermediate':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'beginner':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCEFRBadgeColor = (cefr: string) => {
    switch (cefr) {
      case 'C2':
      case 'C1':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'B2':
      case 'B1':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-24 bg-[#070A10] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-sky-400 font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2">{t.skills.subtitle}</p>
        </div>

        {/* Technical Skills & Soft Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-4 sm:p-8 rounded-2xl bg-[#0C1018] border border-[#232D3F]"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
              <span>{t.skills.technicalTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {technicalSkills.map((sk) => {
                const isTargetRole = portfolioMode === 'targeted' && sk.roleRelevance?.includes(activeRole);

                return (
                  <div
                    key={sk.id}
                    className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
                      isTargetRole
                        ? 'bg-[#121824] border-sky-500/40 shadow-lg shadow-sky-500/5'
                        : 'bg-[#070A10] border-[#232D3F]'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isTargetRole ? 'bg-sky-400 animate-pulse' : 'bg-slate-600'
                        }`}
                      />
                      <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-slate-200 leading-snug break-words">
                        {sk.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isTargetRole && (
                        <span className="hidden sm:inline-flex items-center text-[10px] font-mono text-sky-400 font-semibold px-1.5 py-0.5 rounded bg-sky-500/10">
                          Target
                        </span>
                      )}
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLevelBadgeColor(
                          sk.level
                        )}`}
                      >
                        {t.skills.levels[sk.level]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft & Leadership Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 p-4 sm:p-8 rounded-2xl bg-[#0C1018] border border-[#232D3F] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                <span>{t.skills.softTitle}</span>
              </h3>

              <div className="space-y-2.5">
                {softSkills.map((sk) => (
                  <div
                    key={sk.id}
                    className="p-3 rounded-xl bg-[#070A10] border border-[#232D3F] flex items-center justify-between gap-2"
                  >
                    <span className="text-xs font-semibold text-slate-300 leading-snug">{sk.name}</span>
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${getLevelBadgeColor(
                        sk.level
                      )}`}
                    >
                      {t.skills.levels[sk.level]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Proficiency Section */}
            <div className="mt-8 pt-6 border-t border-[#232D3F]">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-emerald-400" />
                <span>{t.skills.languagesTitle}</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {languageSkills.map((lang) => (
                  <div
                    key={lang.id}
                    className="px-3 py-1.5 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-center gap-2 text-xs"
                  >
                    <span className="font-semibold text-slate-200">
                      {lang.name} {lang.nativeName ? `(${lang.nativeName})` : ''}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-extrabold px-1.5 py-0.2 rounded border ${getCEFRBadgeColor(
                        lang.cefr
                      )}`}
                    >
                      {lang.cefr}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Arsenal & Tools (Plain List without arbitrary badges) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#0C1018] border border-[#232D3F]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-sky-400" />
              <span>{t.skills.techArsenalTitle}</span>
            </h3>
            <p className="text-xs text-slate-400 italic">{t.skills.note}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techArsenal.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-[#070A10] border border-[#232D3F] text-xs font-mono font-medium text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
