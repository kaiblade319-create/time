'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { resumesData } from '@/config/resumes';
import { TargetRole } from '@/types';
import { FileText, Video, Download, Sparkles, Play, ChevronRight } from 'lucide-react';

export function ResumeSection() {
  const { portfolioMode, activeRole, setMode, setRole, showToast, t } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'text' | 'video'>('text');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const targetDrivePreviewUrl = 'https://drive.google.com/file/d/1tndHsGGtzODaW_w6q3fScM_Zn79dIKt9/preview';
  const targetDriveViewUrl = 'https://drive.google.com/file/d/1tndHsGGtzODaW_w6q3fScM_Zn79dIKt9/view?usp=sharing';

  const activeResumeKey = portfolioMode === 'generalist' ? 'generalist' : activeRole;
  const currentResume = resumesData[activeResumeKey] || resumesData['full-stack'];
  const { videoResume } = currentResume;

  const handleDownloadTextResume = () => {
    window.open(targetDriveViewUrl, '_blank');
    showToast('Opening Resume PDF', 'Opening Google Drive resume document...', 'download');
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
    <section id="resume" className="py-12 sm:py-24 bg-[#05070A] border-t border-[#1B2330] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.resumeHub.title}
          </h2>
          <p className="text-sky-400 font-semibold text-xs sm:text-sm mt-1.5 sm:mt-2">{t.resumeHub.subtitle}</p>
        </div>

        {/* Mode & Role Switcher Toolbar */}
        <div className="flex flex-col items-center justify-center w-full mb-6 sm:mb-10 max-w-full px-1 sm:px-0">
          {/* Mobile Swipe Hint Header */}
          <div className="w-full sm:hidden flex items-center justify-between px-1 mb-1.5 text-[11px] font-medium text-slate-400">
            <span className="flex items-center gap-1 font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Select Target Role
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/25">
              <span>Swipe</span>
              <ChevronRight className="w-3 h-3 text-purple-400 animate-pulse" />
            </span>
          </div>

          <div className="relative w-full sm:w-auto max-w-full after:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-[#05070A] after:to-transparent sm:after:hidden">
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#0C1018] border border-[#232D3F] max-w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center pr-6 sm:pr-1.5">
              <button
                onClick={() => setMode('generalist')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                  portfolioMode === 'generalist'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-[#1B2330]'
                }`}
              >
                {portfolioMode === 'generalist' && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
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
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-[#1B2330]'
                    }`}
                  >
                    {isSelected && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
                    <span>{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resume View Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0C1018] border border-[#232D3F] shadow-2xl overflow-hidden">
          {/* Header Controls */}
          <div className="p-3.5 sm:p-6 border-b border-[#232D3F] bg-[#070A10]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-1 bg-[#121824] p-1 rounded-xl border border-[#232D3F] w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 sm:flex-initial justify-center flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'text'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{t.resumeHub.textResume}</span>
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`flex-1 sm:flex-initial justify-center flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'video'
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{t.resumeHub.videoResume}</span>
              </button>
            </div>

            {activeTab === 'text' ? (
              <button
                onClick={handleDownloadTextResume}
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold hover:bg-sky-500/30 transition-all shadow-md shadow-sky-500/10"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{t.resumeHub.download}</span>
              </button>
            ) : (
              <button
                onClick={handleDownloadVideoResume}
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold hover:bg-purple-500/30 transition-all shadow-md shadow-purple-500/10"
              >
                <Download className="w-4 h-4 shrink-0" />
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
              className="p-3 sm:p-6 text-slate-300 space-y-4"
            >
              {/* PDF / Document Viewer Frame */}
              <div className="relative w-full h-[520px] sm:h-[750px] rounded-xl overflow-hidden border border-[#232D3F] bg-[#070A10] shadow-inner">
                <iframe
                  src={targetDrivePreviewUrl}
                  title="Google Drive Resume PDF Preview"
                  className="w-full h-full border-0 bg-white"
                  allow="autoplay"
                />
              </div>
            </motion.div>
          )}

          {/* Video Resume Tab */}
          {activeTab === 'video' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-10 space-y-4 sm:space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#232D3F] pb-3 sm:pb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{videoResume.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5 sm:mt-1">
                    Duration: {videoResume.duration}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 self-start sm:self-auto">
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
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 text-center">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/30 group-hover:scale-110 transition-transform shrink-0"
                        aria-label="Play video pitch"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-0.5" />
                      </button>
                      <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide leading-snug">
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
              <div className="p-3 sm:p-4 rounded-xl bg-[#070A10] border border-[#232D3F]">
                <h4 className="text-[11px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider mb-1.5 sm:mb-2">
                  Transcript Briefing Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {videoResume.transcriptSummary}
                </p>
              </div>

              {/* Key points */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 sm:mb-3">
                  Video Key Takeaways
                </h4>
                <div className="space-y-2">
                  {videoResume.keyPoints.map((kp) => (
                    <div key={kp} className="p-2.5 sm:p-3 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-start gap-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{kp}</span>
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
