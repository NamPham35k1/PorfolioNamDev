import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'indigo' | 'purple' | 'slate';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'emerald', size = 'sm' }) => {
  const styles = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 dark:bg-emerald-500/15',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 dark:bg-cyan-500/15',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 dark:bg-indigo-500/15',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30 dark:bg-purple-500/15',
    slate: 'bg-slate-500/10 text-slate-400 border-slate-500/30 dark:bg-slate-800 dark:text-slate-300',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs font-mono',
    md: 'px-3.5 py-1 text-sm font-sans font-medium',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${styles[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`mb-3 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <Badge variant="emerald" size="md">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
