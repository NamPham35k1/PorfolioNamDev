import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Layout, Server, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-emerald-400" />;
      case 'Layout': return <Layout className="w-8 h-8 text-cyan-400" />;
      case 'Server': return <Server className="w-8 h-8 text-indigo-400" />;
      default: return <Smartphone className="w-8 h-8 text-emerald-400" />;
    }
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-200/80 dark:border-[#212B3B] flex flex-col justify-between relative group">
      {service.popularTag && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-white" />
          <span>Popular Choice</span>
        </div>
      )}

      <div>
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#161E2E] w-fit mb-6 border border-slate-200 dark:border-[#26334A] group-hover:scale-110 transition-transform">
          {getIcon(service.iconName)}
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            What's Included
          </h4>
          {service.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200/80 dark:border-[#1E2638]">
        <button
          onClick={() => navigate('/contact')}
          className="w-full gradient-bg-emerald py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <span>Start Project Request</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
