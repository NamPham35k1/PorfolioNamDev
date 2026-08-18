import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types';
import { Badge } from '../common/Badge';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full border border-slate-200/80 dark:border-[#212B3B] group"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="cyan" size="sm">
            {post.category}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {post.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200/80 dark:border-[#1E2638] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-emerald-500/40"
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {post.author.name}
            </span>
          </div>

          <span className="text-xs font-semibold text-emerald-500 hover:text-emerald-400 flex items-center gap-1">
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
