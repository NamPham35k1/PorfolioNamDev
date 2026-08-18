import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, Clock, MapPin } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { SEO } from '../components/common/SEO';
import { submitContactForm, validateContactForm } from '../services/contact';
import type { ContactFormPayload } from '../types';
import { developerConfig } from '../data/developer';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    email: '',
    projectType: 'Android App',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormPayload, string>>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const projectTypes: ContactFormPayload['projectType'][] = [
    'Android App',
    'Web App',
    'Backend/API',
    'Bug Fix',
    'Other'
  ];

  const budgetRanges = [
    '<$500',
    '$500 - $1,500',
    '$1,500 - $3,000',
    '$3,000+',
    'Hourly / Retainer'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    const validation = validateContactForm(formData);
    setErrors(validation.errors);

    if (!validation.isValid) return;

    setLoading(true);

    try {
      const res = await submitContactForm(formData);
      setSuccessMessage(res.message);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({
        name: '',
        email: '',
        projectType: 'Android App',
        budget: '$1,000 - $3,000',
        message: ''
      });
      setErrors({});
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Contact Nam — Hire Android & Web Developer" description="Get in touch with Nam for native Android apps, React web development, and backend REST API projects." />

      <main className="pt-32 pb-20 space-y-12">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Get In Touch"
            title="Let's Build Something Great Together"
            subtitle="Fill out the form below to request a project quote, discuss freelance specs, or ask technical questions."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span>Contact Direct</span>
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Email Address</div>
                      <div className="font-bold text-slate-900 dark:text-white">{developerConfig.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Availability Status</div>
                      <div className="font-bold text-emerald-400">{developerConfig.status}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B]">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">Location</div>
                      <div className="font-bold text-slate-900 dark:text-white">Vietnam (UTC+7)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Why Hire Nam?
                </h4>
                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean Architecture (Kotlin MVVM / React Modular)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24-48 Hours Initial Specs Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Source Code Ownership & Documentation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-[#212B3B] space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Project Inquiry Form
              </h3>

              {successMessage && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Successful!</span>
                    <span>{successMessage}</span>
                  </div>
                </div>
              )}

              {serverError && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className={`w-full bg-slate-100 dark:bg-[#131924] text-slate-900 dark:text-white px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-[#212B3B] focus:border-emerald-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full bg-slate-100 dark:bg-[#131924] text-slate-900 dark:text-white px-4 py-3 rounded-xl text-sm border focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-[#212B3B] focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Project Category *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                          formData.projectType === type
                            ? 'bg-emerald-500 text-white font-bold shadow-md'
                            : 'bg-slate-100 dark:bg-[#131924] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#212B3B]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Estimated Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          formData.budget === b
                            ? 'bg-cyan-500 text-white font-bold shadow-md'
                            : 'bg-slate-100 dark:bg-[#131924] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-[#212B3B]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Project Details & Features *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your Android application or Web project features, timeline, and key requirements..."
                    className={`w-full bg-slate-100 dark:bg-[#131924] text-slate-900 dark:text-white p-4 rounded-xl text-sm border focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-[#212B3B] focus:border-emerald-500'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-bg-emerald py-4 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 transition-all transform active:scale-95"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
