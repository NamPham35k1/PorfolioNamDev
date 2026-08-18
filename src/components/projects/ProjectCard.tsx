import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight, Smartphone, Globe, Layers, Server } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Android':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Web':
        return <Globe className="w-3.5 h-3.5" />;
      case 'Fullstack':
        return <Layers className="w-3.5 h-3.5" />;
      case 'Backend':
        return <Server className="w-3.5 h-3.5" />;
      default:
        return <Globe className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group border border-slate-200/80 dark:border-[#212B3B]">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80"></div>
        
        <div className="absolute top-3 left-3">
          <Badge variant={project.category === 'Android' ? 'emerald' : project.category === 'Web' ? 'cyan' : 'indigo'}>
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
          </Badge>
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#161D2B] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#242E42]"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#161D2B] text-slate-500 dark:text-slate-400">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200/80 dark:border-[#1E2638] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1C2433] transition-colors"
                title="View GitHub Repository"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#10B981] hover:bg-slate-100 dark:hover:bg-[#1C2433] transition-colors"
                title="View Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={() => navigate(`/projects/${project.id}`)}
            className="text-xs font-semibold text-emerald-500 hover:text-emerald-400 flex items-center gap-1 group/link"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
