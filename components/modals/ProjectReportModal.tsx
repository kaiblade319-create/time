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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090D14] border border-[#232D3F] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Report Modal Header */}
        <div className="p-6 border-b border-[#232D3F] flex items-center justify-between gap-4 bg-[#05070A] shrink-0">
          <div className="flex items-center gap-3">
            {onBackToDocs && (
              <button
                onClick={() => {
                  onClose();
                  onBackToDocs(project);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B2330] text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.projectReport.backToDocs}</span>
              </button>
            )}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                Detailed Technical Report
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-1">{project.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1B2330] text-slate-400 hover:text-white transition-colors"
            aria-label="Close report"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Report Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1 text-slate-300 text-sm">
          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
            <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              {t.projectReport.summary}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">{report.summary}</p>
          </div>

          {/* Environment & Data Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-3">
                {t.projectReport.environment}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.environment}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
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
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {t.projectReport.scopeSteps}
            </h3>
            <div className="space-y-2">
              {report.scopeSteps.map((step) => (
                <div key={step} className="p-3 rounded-xl bg-[#0C1018] border border-[#232D3F] text-xs text-slate-300">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Data Checks Table */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              {t.projectReport.dataChecks}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[#232D3F]">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#121824] text-slate-400 uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-3">Check / Metric</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Verification Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#232D3F] bg-[#0C1018]">
                  {report.dataChecks.map((dc) => (
                    <tr key={dc.metric}>
                      <td className="p-3 font-semibold text-white">{dc.metric}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          {dc.status}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">{dc.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Build Discussions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                {t.projectReport.worksheetBuild}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{report.worksheetBuild}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                {t.projectReport.dashboardBuild}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{report.dashboardBuild}</p>
            </div>
          </div>

          {report.detailedDiscussion && (
            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                {t.projectReport.detailedDiscussion}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.detailedDiscussion}</p>
            </div>
          )}

          {report.extraSection && (
            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                {t.projectReport.extraSection}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{report.extraSection}</p>
            </div>
          )}

          {/* Interactive Toggle Insights */}
          {report.extraToggleSection && toggleOptions.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#0C1018] border border-[#232D3F]">
              <h3 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                {report.extraToggleSection.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4">{report.extraToggleSection.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {toggleOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedToggleKey(opt.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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
                <div className="p-4 rounded-xl bg-[#05070A] border border-[#232D3F] font-mono text-xs text-sky-300 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed whitespace-pre-wrap">{activeToggle.content}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Report Footer */}
        <div className="p-6 border-t border-[#232D3F] bg-[#05070A] flex items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-slate-500">
            End of Technical Case Study Report ({project.slug})
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1B2330] text-slate-200 hover:text-white hover:bg-[#232D3F] text-xs font-semibold transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
