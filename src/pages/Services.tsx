import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageSquare, Code, Rocket, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ServiceCard } from '../components/services/ServiceCard';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/services';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Specs',
      desc: 'We discuss your project requirements, target platform (Android / Web), scope, and technical roadmap.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '02',
      title: 'Architecture & Design',
      desc: 'Designing clean UI/UX components, database schemas (Room/MongoDB), and application architecture.',
      icon: <Code className="w-5 h-5 text-cyan-400" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      desc: 'Iterative coding in Kotlin or React with continuous automated testing and performance profiling.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />
    },
    {
      step: '04',
      title: 'Delivery & Deployment',
      desc: 'Deploying APK/AAB builds to Google Play Store or hosting production web apps on Vercel/Netlify.',
      icon: <Rocket className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <>
      <SEO title="Services — What I Can Build For You | Nam.Dev" description="Freelance Android application development, React web platforms, and Node.js REST API engineering." />

      <main className="pt-32 pb-20 space-y-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Freelance & Contract"
            title="What I Can Build For You"
            subtitle="High-performance native Android apps, React web applications, and scalable Node.js REST backends."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Collaborate"
            title="4-Step Development Process"
            subtitle="Clear communication and clean code delivery from project kickoff to production release."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#161E2E]">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-emerald-400/40">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-10 sm:p-14 border border-slate-200/80 dark:border-[#212B3B] text-center space-y-6 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Have a project in mind?
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
              Let's Work Together
            </h2>

            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Get in touch to discuss specs, timelines, budget estimation, or custom contract requirements.
            </p>

            <div>
              <button
                onClick={() => navigate('/contact')}
                className="gradient-bg-emerald px-8 py-4 rounded-xl font-bold text-base inline-flex items-center gap-2 shadow-xl"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
