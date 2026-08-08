'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { resumesData } from '@/config/resumes';
import { TargetRole } from '@/types';
import { downloadFile } from '@/lib/utils';
import { FileText, Video, Download, Sparkles, CheckCircle2, Mail, Phone, MapPin, Linkedin, Github, Play } from 'lucide-react';

export function ResumeSection() {
  const { portfolioMode, activeRole, setMode, setRole, showToast, t } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'text' | 'video'>('text');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const activeResumeKey = portfolioMode === 'generalist' ? 'generalist' : activeRole;
  const currentResume = resumesData[activeResumeKey] || resumesData['full-stack'];
  const { textResume, videoResume } = currentResume;

  const handleDownloadTextResume = () => {
    const formattedContent = `
${textResume.title.toUpperCase()}
Target Role: ${currentResume.roleTitle}

CONTACT INFORMATION
Email: ${textResume.contactInfo.email}
Phone: ${textResume.contactInfo.phone}
Location: ${textResume.contactInfo.location}
LinkedIn: ${textResume.contactInfo.linkedin}
GitHub: ${textResume.contactInfo.github}

EXECUTIVE SUMMARY
${textResume.summary}

PROFESSIONAL HIGHLIGHTS
${currentResume.highlights.map((h) => `- ${h}`).join('\n')}

TOP SKILLS
${textResume.skills.join(', ')}

EXPERIENCE
${textResume.experience
  .map(
    (exp) => `
${exp.title} | ${exp.company} (${exp.period})
${exp.details.map((d) => `  * ${d}`).join('\n')}`
  )
  .join('\n')}

PROJECT HIGHLIGHTS
${textResume.projects
  .map((p) => `- ${p.name}: ${p.description} [Tech: ${p.tech}]`)
  .join('\n')}
    `.trim();

    downloadFile(formattedContent, `Kai_Blade_Resume_${activeRole}.txt`, 'text/plain');
    showToast('Resume PDF Downloaded', t.toast.resumeDownload, 'download');
  };

  const handleDownloadVideoResume = () => {
    showToast('Video Resume Package', t.toast.videoDownload, 'download');
  };

  const roleOptions: { id: TargetRole; label: string }[] = [
    { id: 'full-stack', label: t.roles['full-stack'] },
    { id: 'ai-ml', label: t.roles['ai-ml'] },
    { id: 'tech-lead', label: t.roles['tech-lead'] },
    { id: 'data-scientist', label: t.roles['data-scientist'] },
  ];

  return (
    <section id="resume" className="py-24 bg-[#05070A] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.resumeHub.title}
          </h2>
          <p className="text-sky-400 font-semibold text-sm mt-2">{t.resumeHub.subtitle}</p>
        </div>

        {/* Mode & Role Switcher Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setMode('generalist')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              portfolioMode === 'generalist'
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                : 'bg-[#0C1018] text-slate-300 border border-[#232D3F] hover:border-sky-500/40'
            }`}
          >
            {portfolioMode === 'generalist' && <Sparkles className="w-3.5 h-3.5" />}
            <span>🌐 Generalist Overview</span>
          </button>

          {roleOptions.map((r) => {
            const isSelected = portfolioMode === 'targeted' && activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => {
                  setMode('targeted');
                  setRole(r.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-[#0C1018] text-slate-300 border border-[#232D3F] hover:border-purple-500/40'
                }`}
              >
                {isSelected && <Sparkles className="w-3.5 h-3.5" />}
                <span>{r.label}</span>
              </button>
            );
          })}
        </div>

        {/* Resume View Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl overflow-hidden">
          {/* Header Controls */}
          <div className="p-6 border-b border-[#232D3F] bg-[#070A10]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 bg-[#121824] p-1 rounded-xl border border-[#232D3F]">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'text'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>{t.resumeHub.textResume}</span>
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'video'
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>{t.resumeHub.videoResume}</span>
              </button>
            </div>

            {activeTab === 'text' ? (
              <button
                onClick={handleDownloadTextResume}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold hover:bg-sky-500/30 transition-all shadow-md shadow-sky-500/10"
              >
                <Download className="w-4 h-4" />
                <span>{t.resumeHub.download}</span>
              </button>
            ) : (
              <button
                onClick={handleDownloadVideoResume}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold hover:bg-purple-500/30 transition-all shadow-md shadow-purple-500/10"
              >
                <Download className="w-4 h-4" />
                <span>{t.resumeHub.downloadVideo}</span>
              </button>
            )}
          </div>

          {/* Text Resume Tab */}
          {activeTab === 'text' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 text-slate-300 space-y-8"
            >
              {/* Resume Header Info */}
              <div className="border-b border-[#232D3F] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Kai Blade</h3>
                  <p className="text-sm font-semibold text-sky-400 mt-0.5">{currentResume.roleTitle}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    {textResume.contactInfo.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    {textResume.contactInfo.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {textResume.contactInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    {textResume.contactInfo.linkedin}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  Executive Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#070A10] p-4 rounded-xl border border-[#232D3F]">
                  {textResume.summary}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                  Target Role Core Highlights
                </h4>
                <div className="space-y-2">
                  {currentResume.highlights.map((hl) => (
                    <div key={hl} className="p-3 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                  Professional Experience
                </h4>
                <div className="space-y-4">
                  {textResume.experience.map((exp) => (
                    <div key={exp.title} className="p-4 rounded-xl bg-[#070A10] border border-[#232D3F]">
                      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                        <span>{exp.title} - {exp.company}</span>
                        <span className="font-mono text-slate-400">{exp.period}</span>
                      </div>
                      <ul className="space-y-1.5 mt-2 text-xs text-slate-300">
                        {exp.details.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-sky-400">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Skills Tag Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Top Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentResume.topSkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1 rounded-lg bg-[#1B2330] border border-[#232D3F] text-xs font-semibold text-sky-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Video Resume Tab */}
          {activeTab === 'video' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#232D3F] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{videoResume.title}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Duration: {videoResume.duration}
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Target Role: {currentResume.roleTitle}
                </span>
              </div>

              {/* Player Container */}
              <div className="relative aspect-video rounded-xl bg-slate-900 border border-[#232D3F] overflow-hidden flex items-center justify-center group">
                {!isPlayingVideo ? (
                  <>
                    <img
                      src="https://picsum.photos/seed/video-pitch/800/450"
                      alt="Video Resume Pitch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/30 group-hover:scale-110 transition-transform"
                        aria-label="Play video pitch"
                      >
                        <Play className="w-8 h-8 fill-white ml-1" />
                      </button>
                      <span className="text-xs font-semibold text-white tracking-wide">
                        Play Tailored Video Pitch ({currentResume.roleTitle})
                      </span>
                    </div>
                  </>
                ) : (
                  <video
                    src={videoResume.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Transcript Summary */}
              <div className="p-4 rounded-xl bg-[#070A10] border border-[#232D3F]">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  Transcript Briefing Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {videoResume.transcriptSummary}
                </p>
              </div>

              {/* Key points */}
              <div>
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">
                  Video Key Takeaways
                </h4>
                <div className="space-y-2">
                  {videoResume.keyPoints.map((kp) => (
                    <div key={kp} className="p-3 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-start gap-2 text-xs text-slate-300">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{kp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
