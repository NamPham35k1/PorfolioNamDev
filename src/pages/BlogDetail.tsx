import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Check } from 'lucide-react';
import { getBlogPostBySlug, blogPostsData } from '../data/blog';
import { CodeBlock } from '../components/blog/CodeBlock';
import { BlogCard } from '../components/blog/BlogCard';
import { Badge } from '../components/common/Badge';
import { SEO } from '../components/common/SEO';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = React.useState(false);

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="pt-40 pb-20 text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Article Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          The requested article slug "{slug}" does not exist.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="gradient-bg-emerald px-6 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>
      </main>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const relatedPosts = blogPostsData
    .filter((b) => b.slug !== post.slug && (b.category === post.category || post.relatedSlugs?.includes(b.slug)))
    .slice(0, 3);

  return (
    <>
      <SEO title={`${post.title} — Nam.Dev Blog`} description={post.description} />

      <main className="pt-32 pb-20 space-y-12">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="space-y-4">
            <Badge variant="cyan" size="md">
              {post.category}
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-y border-slate-200 dark:border-[#212B3B] py-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{post.author.name}</div>
                  <div className="text-[11px] text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {post.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 p-2 rounded-lg bg-slate-100 dark:bg-[#131924] hover:bg-emerald-500 hover:text-white transition-colors"
                  title="Share article link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-[#212B3B] aspect-video w-full shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 text-base leading-relaxed">
            <p className="text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
              {post.description}
            </p>

            <div className="whitespace-pre-line">
              {post.content}
            </div>

            {post.codeSnippets && post.codeSnippets.length > 0 && (
              <div className="space-y-6 pt-4">
                {post.codeSnippets.map((snippet, i) => (
                  <CodeBlock
                    key={i}
                    language={snippet.language}
                    filename={snippet.filename}
                    code={snippet.code}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-[#212B3B] flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#131924] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#212B3B]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="pt-12 space-y-6 border-t border-slate-200 dark:border-[#212B3B]">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Related Articles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.slug} post={rPost} />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  );
};
