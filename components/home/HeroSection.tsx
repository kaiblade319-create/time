'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { rolesConfig, generalistRoleConfig } from '@/config/roles';
import { TargetRole } from '@/types';
import {
  FileText,
  Sparkles,
  Compass,
  Target,
  CheckCircle2,
  Cpu,
  Zap,
  Globe,
  Award,
  Users
} from 'lucide-react';

export function HeroSection() {
  const { portfolioMode, activeRole, setMode, setRole, t } = usePortfolio();
  const [activeCardTab, setActiveCardTab] = useState<'stack' | 'metrics' | 'bio'>('stack');

  const baseRoleData = portfolioMode === 'generalist' ? generalistRoleConfig : (rolesConfig[activeRole] || rolesConfig['full-stack']);
  const roleKey = portfolioMode === 'generalist' ? 'generalist' : activeRole;
  const roleTrans = t?.roleDetails?.[roleKey];

  const roleData = {
    ...baseRoleData,
    badge: roleTrans?.badge || baseRoleData.badge,
    tagline: roleTrans?.tagline || baseRoleData.tagline,
    valueProp: roleTrans?.valueProp || baseRoleData.valueProp,
    aboutBio: roleTrans?.aboutBio || baseRoleData.aboutBio,
  };

  const roleOptions: { id: TargetRole; label: string; icon: string }[] = [
    { id: 'full-stack', label: t.roles['full-stack'] || 'Full-Stack Web', icon: '💻' },
    { id: 'ai-ml', label: t.roles['ai-ml'] || 'AI / Machine Learning', icon: '🧠' },
    { id: 'tech-lead', label: t.roles['tech-lead'] || 'Tech Lead / PM', icon: '🚀' },
    { id: 'data-scientist', label: t.roles['data-scientist'] || 'Data Analytics', icon: '📊' },
  ];

  const heroMetrics = [
    { value: '6+ Years', label: t.hero?.metrics?.exp || 'Engineering Exp.', icon: Award },
    { value: '50k+', label: t.hero?.metrics?.users || 'Active Users Served', icon: Globe },
    { value: '99.9%', label: t.hero?.metrics?.uptime || 'Platform Availability', icon: Zap },
    { value: '93.4%', label: t.hero?.metrics?.precision || 'AI Model Precision', icon: Cpu },
  ];

  return (
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-center py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Background Subtle Tech Mesh & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2d42_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Top Floating Control Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 p-3 sm:p-3.5 rounded-2xl bg-[#0C1018]/90 border border-[#232D3F] backdrop-blur-xl shadow-xl w-full"
        >
          {/* Mode Indicator & Role Switchers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            {portfolioMode === 'generalist' ? (
              <div className="flex items-center gap-2 text-xs text-slate-300 px-1 py-0.5 min-w-0">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
                <Compass className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-bold text-white shrink-0 text-xs sm:text-sm">{t.hero.generalistModeLabel || 'Generalist Mode'}:</span>
                <span className="text-slate-400 hidden lg:inline truncate max-w-xl text-xs">
                  {t.hero.generalistModeDesc || 'Showing full-spectrum engineering capabilities across Full-Stack, AI/ML, Data Science & Tech Lead.'}
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="hidden xs:inline">{t.hero.targetRoleLabel || 'Target Role Mode:'}</span>
                </span>
                {roleOptions.map((opt) => {
                  const isActive = activeRole === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setRole(opt.id)}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1 sm:gap-1.5 border shrink-0 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30 border-purple-400 text-purple-200 shadow-md shadow-purple-500/15 scale-[1.02]'
                          : 'bg-[#151D2A] border-[#232D3F] text-slate-400 hover:text-slate-200 hover:border-slate-600'
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Toggle Switch Button */}
          <button
            onClick={() => setMode(portfolioMode === 'generalist' ? 'targeted' : 'generalist')}
            className="flex items-center justify-center gap-2 px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/30 hover:border-sky-400 text-sky-300 text-xs font-semibold transition-all shrink-0 sm:ml-auto hover:shadow-lg hover:shadow-sky-500/10 whitespace-nowrap w-full sm:w-auto"
          >
            {portfolioMode === 'generalist' ? (
              <>
                <Target className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>{t.hero.switchToTargeted || 'Switch to Targeted Job Mode'}</span>
              </>
            ) : (
              <>
                <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{t.hero.switchToGeneralist || 'Switch to Generalist Mode'}</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Main Grid: Left Column Content & Right Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            key={`${portfolioMode}-${activeRole}`}
            initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 sm:gap-6"
          >
            {/* Top Status & Role Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-sky-500/15 to-indigo-500/15 border border-sky-500/30 text-sky-300 text-xs font-semibold shadow-sm shadow-sky-500/10">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
                <span className="leading-tight">{roleData.badge}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium shadow-sm shadow-emerald-500/5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="leading-tight">{t.hero.availability || 'Available for Staff & Senior Opportunities'}</span>
              </div>
            </div>

            {/* Headline Name & Title */}
            <div>
              <h2 className="text-slate-400 text-base sm:text-xl font-medium tracking-wide flex items-center gap-2">
                <span>{t.hero.greeting}</span>
                <span className="text-lg sm:text-xl">👋</span>
              </h2>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mt-1">
                Kai Blade
              </h1>
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-300 to-indigo-300 mt-2 leading-tight">
                {roleData.tagline}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl font-normal">
              {roleData.valueProp}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/resume"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                <span>{t.hero.viewResume}</span>
              </Link>

              <Link
                href="/profile"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold text-xs sm:text-sm hover:border-purple-400 hover:bg-purple-500/20 hover:text-white transition-all flex items-center gap-2 shadow-md shadow-purple-500/10"
              >
                <Users className="w-4 h-4 text-purple-400" />
                <span>{t.hero.connectHub || 'Connect Hub'}</span>
              </Link>
            </div>

            {/* Quick Impact Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {heroMetrics.map((m, i) => {
                const IconComponent = m.icon;
                return (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#0C1018]/80 border border-[#232D3F] flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-1.5 text-sky-400 font-extrabold text-lg sm:text-xl">
                      <IconComponent className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{m.value}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                      {m.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl relative overflow-hidden group hover:border-sky-500/40 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#232D3F] mb-4 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shrink-0 animate-pulse" />
                  <span
                    className="text-[11px] sm:text-xs font-mono font-bold text-sky-400 uppercase tracking-wider truncate"
                    title={portfolioMode === 'generalist' ? (t.hero.cardTitleGeneralist || 'Full Spectrum Engineering') : (t.hero.cardTitleTargeted || 'Target Role Highlights')}
                  >
                    {portfolioMode === 'generalist' ? (t.hero.cardTitleGeneralist || 'Full Spectrum Engineering') : (t.hero.cardTitleTargeted || 'Target Role Highlights')}
                  </span>
                </div>
                <span
                  className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 shrink-0 whitespace-nowrap shadow-sm"
                  title={t.hero.verifiedProduction || 'Verified Production'}
                >
                  {t.hero.verifiedProduction || 'Verified Production'}
                </span>
              </div>

              {/* Card Sub-Navigation Tabs */}
              <div className="grid grid-cols-3 rounded-xl bg-[#151D2A] p-1 border border-[#232D3F] mb-4 sm:mb-5 text-[10px] sm:text-xs font-medium gap-1">
                <button
                  onClick={() => setActiveCardTab('stack')}
                  title={t.hero.tabTechStack || 'Tech Stack'}
                  className={`py-1.5 px-1 rounded-lg font-semibold text-center transition-all flex items-center justify-center ${
                    activeCardTab === 'stack' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-[#1A2435]'
                  }`}
                >
                  <span className="truncate">{t.hero.tabTechStack || 'Tech Stack'}</span>
                </button>
                <button
                  onClick={() => setActiveCardTab('metrics')}
                  title={t.hero.tabAccomplishments || 'Key Accomplishments'}
                  className={`py-1.5 px-1 rounded-lg font-semibold text-center transition-all flex items-center justify-center ${
                    activeCardTab === 'metrics' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-[#1A2435]'
                  }`}
                >
                  <span className="hidden sm:inline truncate">{t.hero.tabAccomplishments || 'Key Accomplishments'}</span>
                  <span className="sm:hidden truncate">Key Wins</span>
                </button>
                <button
                  onClick={() => setActiveCardTab('bio')}
                  title={t.hero.tabRoleBio || 'Role Bio'}
                  className={`py-1.5 px-1 rounded-lg font-semibold text-center transition-all flex items-center justify-center ${
                    activeCardTab === 'bio' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-[#1A2435]'
                  }`}
                >
                  <span className="truncate">{t.hero.tabRoleBio || 'Role Bio'}</span>
                </button>
              </div>

              {/* Dynamic Content Body */}
              <AnimatePresence mode="wait">
                {activeCardTab === 'stack' && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 min-h-[90px] sm:min-h-[100px] items-start align-content-start">
                      {roleData.primaryTechs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#151D2A] border border-[#232D3F] text-[11px] sm:text-xs font-mono text-slate-200 hover:border-sky-400/50 hover:text-sky-300 transition-colors shadow-sm cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#151D2A]/80 border border-[#232D3F] text-[11px] sm:text-xs text-slate-300 flex flex-col xs:flex-row xs:items-center justify-between gap-1 sm:gap-2 shadow-inner min-w-0">
                      <span className="font-mono text-slate-400 shrink-0">{t.hero.coreExpertise || 'Core Expertise:'}</span>
                      <span className="font-bold text-sky-300 truncate" title={roleData.topSkills.join(' • ')}>
                        {roleData.topSkills.slice(0, 2).join(' • ')}
                      </span>
                    </div>
                  </motion.div>
                )}

                {activeCardTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 mb-2 text-xs"
                  >
                    <div className="p-2.5 rounded-lg bg-[#151D2A] border border-[#232D3F] text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t.hero.accomplishments?.a1 || '50k+ active users platform architecture with sub-100ms response times.'}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#151D2A] border border-[#232D3F] text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{t.hero.accomplishments?.a2 || 'Built PyTorch & FastAPI AI models with 93.4% diagnostic precision.'}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#151D2A] border border-[#232D3F] text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{t.hero.accomplishments?.a3 || '98% Agile sprint milestone delivery leading cross-functional teams.'}</span>
                    </div>
                  </motion.div>
                )}

                {activeCardTab === 'bio' && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 rounded-xl bg-[#151D2A]/80 border border-[#232D3F] text-xs text-slate-300">
                      <span className="font-semibold text-white block mb-1">
                        {portfolioMode === 'generalist' ? (t.modes?.generalist || 'Generalist Overview') : (t.modes?.targeted || 'Targeted Role Mode')}:
                      </span>
                      <p className="leading-relaxed text-slate-300">{roleData.aboutBio}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
