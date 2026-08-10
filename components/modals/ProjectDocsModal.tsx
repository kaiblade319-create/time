'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { downloadFile } from '@/lib/utils';
import { X, Download, ExternalLink, Github, CheckCircle, FileText, BarChart3, Layers, Sparkles, ChevronRight } from 'lucide-react';

interface ProjectDocsModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenReport?: (project: Project) => void;
}

export function ProjectDocsModal({ project, onClose, onOpenReport }: ProjectDocsModalProps) {
  const { showToast, t } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'results' | 'gallery'>('overview');

  if (!project) return null;

  const { docs } = project;

  const handleDownloadData = () => {
    if (project.dataFile) {
      downloadFile(project.dataFile.content, project.dataFile.name, 'text/csv');
      showToast('Data Downloaded', t.toast.dataDownload, 'download');
    } else {
      showToast('Info', 'No sample dataset attached for this project.', 'info');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0C1018] border border-[#232D3F] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-8 max-h-[94vh] sm:max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-3.5 sm:p-6 border-b border-[#232D3F] flex items-start sm:items-center justify-between gap-3 bg-[#070A10]/50 shrink-0">
          <div className="min-w-0 pr-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.type}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {project.guidedType}
              </span>
            </div>
            <h2 className="text-base sm:text-2xl font-bold text-white leading-tight">{project.title}</h2>
            <p className="text-[11px] sm:text-sm text-slate-400 mt-0.5 leading-snug">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-[#1B2330] text-slate-400 hover:text-white hover:bg-[#232D3F] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="border-b border-[#232D3F] bg-[#0A0D14] shrink-0">
          {/* Mobile Swipe Hint Header */}
          <div className="sm:hidden flex items-center justify-between px-3.5 pt-2.5 pb-1.5 text-[11px] font-medium text-slate-400 border-b border-[#232D3F]/40">
            <span className="flex items-center gap-1 font-semibold text-slate-300">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Select Tab</span>
            </span>
            <span className="flex items-center gap-1 text-[10px] font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/25 shrink-0">
              <span>Swipe</span>
              <ChevronRight className="w-3 h-3 text-sky-400 animate-pulse" />
            </span>
          </div>

          <div className="relative w-full overflow-hidden after:pointer-events-none after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-[#0A0D14] after:to-transparent sm:after:hidden">
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 pt-2 sm:pt-3 pb-2 sm:pb-3.5 overflow-x-auto no-scrollbar pr-8 sm:pr-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-1.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-sky-400 text-sky-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.projectDocs.overview}
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`pb-1.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'process'
                    ? 'border-sky-400 text-sky-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.projectDocs.process}
              </button>
              <button
                onClick={() => setActiveTab('results')}
                className={`pb-1.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'results'
                    ? 'border-sky-400 text-sky-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.projectDocs.results}
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`pb-1.5 sm:pb-3 px-2.5 sm:px-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === 'gallery'
                    ? 'border-sky-400 text-sky-400 font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.projectDocs.gallery}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto custom-dark-scrollbar space-y-4 sm:space-y-6 flex-1 text-slate-300 text-xs sm:text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                  {t.projectDocs.overview}
                </h3>
                <p className="leading-relaxed text-slate-300">{docs.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-[#070A10] border border-[#232D3F]">
                  <h4 className="text-[11px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider mb-1.5 sm:mb-2">Project Goal</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{docs.goal}</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-[#070A10] border border-[#232D3F]">
                  <h4 className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5 sm:mb-2">Problem Statement</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{docs.problem}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  {t.projectDocs.toolsTech}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {docs.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-[#1B2330] border border-[#232D3F] text-[11px] sm:text-xs font-medium text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                {t.projectDocs.process}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {docs.processSteps.map((step, idx) => (
                  <div key={step.title} className="p-3 sm:p-4 rounded-xl bg-[#070A10] border border-[#232D3F] flex gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  Measurable Key Performance Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
                  {docs.results.map((res) => (
                    <div key={res.label} className="p-3 sm:p-4 rounded-xl bg-[#070A10] border border-[#232D3F] text-center">
                      <div className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                        {res.metric}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 font-medium">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">Key Technical Insights</h3>
                <div className="space-y-2">
                  {docs.insights.map((insight) => (
                    <div key={insight} className="p-2.5 sm:p-3 rounded-lg bg-[#070A10] border border-[#232D3F] flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {docs.beforeAfter && (
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
                    {t.projectDocs.sliderTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                      <span className="text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wider block mb-1.5 sm:mb-2">Before Optimization</span>
                      <p className="text-[11px] sm:text-xs text-slate-300">{docs.beforeAfter.before}</p>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1.5 sm:mb-2">After System Architecture</span>
                      <p className="text-[11px] sm:text-xs text-slate-300">{docs.beforeAfter.after}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
                {t.projectDocs.gallery}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {docs.gallery.map((item) => (
                  <div key={item.url} className="rounded-xl bg-[#070A10] border border-[#232D3F] overflow-hidden">
                    <img src={item.url} alt={item.caption} className="w-full h-36 sm:h-44 object-cover" />
                    <p className="p-2.5 text-[11px] sm:text-xs text-slate-400 italic">{item.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-3 sm:p-6 border-t border-[#232D3F] bg-[#070A10]/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 shrink-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {project.dataFile && (
              <button
                onClick={handleDownloadData}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] sm:text-xs font-semibold hover:bg-emerald-500/30 transition-all"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="whitespace-nowrap">{t.projectDocs.downloadData}</span>
              </button>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white hover:bg-[#232D3F] text-[11px] sm:text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">GitHub Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white hover:bg-[#232D3F] text-[11px] sm:text-xs font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="whitespace-nowrap">Live App</span>
            </a>
          </div>

          {onOpenReport && (
            <button
              onClick={() => {
                onClose();
                onOpenReport(project);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold text-xs hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20 shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>{t.projectDocs.reportCTA}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
