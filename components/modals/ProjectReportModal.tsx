'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { usePortfolio } from '@/hooks/usePortfolioContext';
import { X, CheckCircle2, ChevronRight, Sparkles, Terminal, Code2, ArrowLeft } from 'lucide-react';

interface ProjectReportModalProps {
  project: Project | null;
  onClose: () => void;
  onBackToDocs?: (project: Project) => void;
}

export function ProjectReportModal({ project, onClose, onBackToDocs }: ProjectReportModalProps) {
  const { t } = usePortfolio();
  const [selectedToggleKey, setSelectedToggleKey] = useState<string>('');

  if (!project) return null;

  const { report } = project;

  const toggleOptions = report.extraToggleSection?.options || [];
  const activeToggle = toggleOptions.find((o) => o.key === selectedToggleKey) || toggleOptions[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090D14] border border-[#232D3F] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden my-2 sm:my-8 max-h-[94vh] sm:max-h-[92vh] flex flex-col">
        {/* Report Modal Header */}
        <div className="p-3.5 sm:p-6 border-b border-[#232D3F] bg-[#05070A] shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 min-w-0 flex-1">
              {onBackToDocs && (
                <button
                  onClick={() => {
                    onClose();
                    onBackToDocs(project);
                  }}
                  className="self-start flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#1B2330] text-slate-300 hover:text-white text-[11px] sm:text-xs font-semibold transition-colors shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{t.projectReport.backToDocs}</span>
                </button>
              )}
              <div className="min-w-0">
                <span className="inline-block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Detailed Technical Report
                </span>
                <h2 className="text-base sm:text-xl font-bold text-white mt-0.5 sm:mt-1 leading-tight">{project.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-[#1B2330] text-slate-400 hover:text-white transition-colors shrink-0"
              aria-label="Close report"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Report Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto custom-dark-scrollbar space-y-4 sm:space-y-6 flex-1 text-slate-300 text-xs sm:text-sm">
          {/* Executive Summary */}
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              {t.projectReport.summary}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{report.summary}</p>
          </div>

          {/* Environment & Data Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 sm:mb-3">
                {t.projectReport.environment}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.environment}</p>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 sm:mb-3">
                {t.projectReport.dataSources}
              </h3>
              <ul className="space-y-2">
                {report.dataSources.map((ds) => (
                  <li key={ds} className="text-xs text-slate-300 flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ds}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope Steps */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
              {t.projectReport.scopeSteps}
            </h3>
            <div className="space-y-2">
              {report.scopeSteps.map((step) => (
                <div key={step} className="p-2.5 sm:p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] text-xs text-slate-300">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Data Checks Table */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2 sm:mb-3">
              {t.projectReport.dataChecks}
            </h3>
            <div className="overflow-x-auto custom-dark-scrollbar rounded-xl border border-[#232D3F]">
              <table className="w-full min-w-[500px] text-left text-xs text-slate-300">
                <thead className="bg-[#121824] text-slate-400 uppercase font-mono text-[10px] sm:text-[11px]">
                  <tr>
                    <th className="p-2.5 sm:p-3">Check / Metric</th>
                    <th className="p-2.5 sm:p-3">Status</th>
                    <th className="p-2.5 sm:p-3">Verification Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232D3F] bg-[#0C1018]">
                  {report.dataChecks.map((dc) => (
                    <tr key={dc.metric}>
                      <td className="p-2.5 sm:p-3 font-semibold text-white">{dc.metric}</td>
                      <td className="p-2.5 sm:p-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          {dc.status}
                        </span>
                      </td>
                      <td className="p-2.5 sm:p-3 text-slate-400">{dc.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Build Discussions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h4 className="text-[11px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                {t.projectReport.worksheetBuild}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{report.worksheetBuild}</p>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h4 className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                {t.projectReport.dashboardBuild}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{report.dashboardBuild}</p>
            </div>
          </div>

          {report.detailedDiscussion && (
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                {t.projectReport.detailedDiscussion}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.detailedDiscussion}</p>
            </div>
          )}

          {report.extraSection && (
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                {t.projectReport.extraSection}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.extraSection}</p>
            </div>
          )}

          {/* Interactive Toggle Insights */}
          {report.extraToggleSection && toggleOptions.length > 0 && (
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-[11px] sm:text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 sm:gap-2">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {report.extraToggleSection.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-3 sm:mb-4">{report.extraToggleSection.description}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {toggleOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedToggleKey(opt.key)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                      (selectedToggleKey === opt.key || (!selectedToggleKey && activeToggle.key === opt.key))
                        ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                        : 'bg-[#1B2330] text-slate-300 hover:bg-[#232D3F]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {activeToggle && (
                <div className="p-3 sm:p-4 rounded-xl bg-[#05070A] border border-[#232D3F] font-mono text-[11px] sm:text-xs text-sky-300 flex items-start gap-2.5">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed whitespace-pre-wrap">{activeToggle.content}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Report Footer */}
        <div className="p-3.5 sm:p-6 border-t border-[#232D3F] bg-[#05070A] flex items-center justify-end gap-2.5 sm:gap-4 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white hover:bg-[#232D3F] text-xs font-semibold transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
