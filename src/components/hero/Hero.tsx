import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, FolderCode, Mail, Smartphone, Code2 } from 'lucide-react';
import { TerminalCard } from './TerminalCard';
import { Badge } from '../common/Badge';
import { developerConfig } from '../../data/developer';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={developerConfig.avatarUrl}
                  alt={developerConfig.fullName}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-emerald-400/80 shadow-2xl"
                />
              </div>
              <Badge variant="emerald" size="md">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{developerConfig.status}</span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm <span className="gradient-text-emerald">Thành Nam 👋</span>
              <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 block mt-2">
                Android & Web Developer
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              I build modern native Android applications, high-performance web platforms, and scalable backend REST systems.
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                Kotlin & Android SDK
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                <Code2 className="w-4 h-4 text-cyan-400" />
                ReactJS & TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                <FolderCode className="w-4 h-4 text-indigo-400" />
                Node.js & REST APIs
              </span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto gradient-bg-emerald px-7 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto glass-card hover:bg-slate-100 dark:hover:bg-[#1C2433] text-slate-900 dark:text-white px-7 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 border border-slate-300 dark:border-[#212B3B] transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Hire Me</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
};
