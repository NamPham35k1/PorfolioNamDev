import React from 'react';
import {
  Smartphone, Layers, Database, PlayCircle, Network, Code, FileCode, Palette, Terminal, Zap,
  Server, Globe, Flame, GitBranch, Cpu, Monitor, Send
} from 'lucide-react';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Database': return <Database className="w-6 h-6 text-indigo-400" />;
      case 'PlayCircle': return <PlayCircle className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-purple-400" />;
      case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-blue-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-300" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-orange-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Monitor': return <Monitor className="w-6 h-6 text-emerald-400" />;
      case 'Send': return <Send className="w-6 h-6 text-cyan-400" />;
      default: return <Code className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-200/80 dark:border-[#212B3B] space-y-4">
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#161E2D] border border-slate-200 dark:border-[#263248]">
          {renderIcon(skill.iconName)}
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {skill.experience}
        </span>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            {skill.name}
          </h4>
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
            {skill.level}%
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#192233] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
        {skill.description}
      </p>

      {skill.tags && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {skill.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#131924] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-[#212B3B]"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
