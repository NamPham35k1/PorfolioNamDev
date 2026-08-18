import React from 'react';
import { FolderCheck, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { quickStats } from '../../data/developer';

export const QuickStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderCheck':
        return <FolderCheck className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <FolderCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-10 border-y border-slate-200/80 dark:border-[#1A2232] bg-slate-50/50 dark:bg-[#0E131F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-[#212B3B] hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#161D2B]">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-xs font-mono text-emerald-400 font-medium">Metric</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
