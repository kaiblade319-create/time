'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { rolesConfig } from '@/config/roles';
import { Award, Zap, ShieldCheck, Users, Play, Code, CheckCircle } from 'lucide-react';

export function AboutSection() {
  const { portfolioMode, activeRole, t } = usePortfolio();
  const roleData = rolesConfig[activeRole] || rolesConfig['full-stack'];
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const roleKey = portfolioMode === 'generalist' ? 'generalist' : activeRole;
  const roleTrans = t?.roleDetails?.[roleKey];

  const videoTitle = roleTrans?.videoTitle || t.about.videoTitle || 'Personal Portfolio Briefing';
  const videoBadge = roleTrans?.videoBadge || '2:15 Min • Video Pitch';
  const videoCaption = roleTrans?.videoCaption || `"Hi, I'm Kai. Watch this 2-minute overview covering my system architecture philosophy and key case study outcomes."`;

  const stats = [
    { metric: '42%', label: 'Avg Patient Wait Time Reduction', desc: 'Achieved in Smart Hospital Triage Platform' },
    { metric: '0.91', label: 'XGBoost Churn Prediction ROC-AUC', desc: '60-day early warning accuracy score' },
    { metric: '$480k', label: 'Net Saved Enterprise Revenue ARR', desc: 'Prevented account cancellations in pilot' },
    { metric: '99.99%', label: 'System Uptime Across Microservices', desc: 'Zero downtime during production releases' },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & System Design',
      desc: 'Deep diving into business objectives, data schemas, API contracts, and user security requirements.',
    },
    {
      step: '02',
      title: 'Agile Implementation',
      desc: 'Building modular React components, typed Node.js/FastAPI routes, and optimized SQL schemas.',
    },
    {
      step: '03',
      title: 'Verification & Performance Tuning',
      desc: 'Rigorous unit testing, Redis query caching, model ONNX quantization, and K6 stress benchmarks.',
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      desc: 'Containerized deployment to Google Cloud Run with automated CI/CD and continuous telemetry.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#070A10] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-sky-400 font-semibold text-sm mt-2">{t.about.subtitle}</p>
        </div>

        {/* Bio & Intro Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-xl">
              <h3 className="text-base sm:text-xl font-bold text-white mb-3 flex items-start sm:items-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-snug">
                  Engineering Philosophy{' '}
                  <span className="text-slate-400 text-xs sm:text-sm font-medium block xs:inline mt-0.5 xs:mt-0">
                    ({roleData.badge})
                  </span>
                </span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {roleData.aboutBio}
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Whether architecting full-stack web platforms or training clinical neural networks, I believe in measurable results, clean codebases, and developer-first documentation.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production-First Code Quality</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-100ms Query Latencies</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Machine Learning</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agile Leadership & Mentorship</span>
              </div>
            </div>
          </motion.div>

          {/* Intro Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="p-4 rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232D3F] gap-2">
                <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2 min-w-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
                  <span className="truncate">{videoTitle}</span>
                </span>
                <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono shrink-0 whitespace-nowrap">
                  {videoBadge}
                </span>
              </div>

              <div className="relative aspect-video rounded-xl bg-slate-900 border border-[#232D3F] overflow-hidden flex items-center justify-center group">
                {!isPlayingVideo ? (
                  <>
                    <img
                      src="https://picsum.photos/seed/kai-briefing/600/350"
                      alt="Portfolio Video Briefing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform"
                        aria-label="Play Portfolio Briefing"
                      >
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </button>
                      <span className="text-xs font-semibold text-white tracking-wide">
                        Click to Play Video Overview
                      </span>
                    </div>
                  </>
                ) : (
                  <video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <p className="text-xs text-slate-300 mt-3 italic leading-relaxed">
                {videoCaption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Impact By The Numbers Cards */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{t.about.impactTitle}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] hover:border-sky-500/40 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 mb-2 group-hover:scale-105 transition-transform origin-left">
                  {s.metric}
                </div>
                <div className="font-semibold text-xs text-slate-200 mb-1">{s.label}</div>
                <div className="text-[11px] text-slate-400">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How I Work & Collaborate Workflow */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <span>{t.about.workflowTitle}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((w, idx) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0C1018] border border-[#232D3F] relative overflow-hidden"
              >
                <div className="text-3xl font-black font-mono text-slate-700/60 mb-3">
                  {w.step}
                </div>
                <h4 className="font-bold text-sm text-white mb-2">{w.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
