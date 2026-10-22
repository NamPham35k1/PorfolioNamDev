import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Terminal, ArrowRight, FileText, Globe } from 'lucide-react';
import { useTheme } from '../../store/themeStore';
import { useLanguage } from '../../context/LanguageContext';
import { ResumeModal } from '../common/ResumeModal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.blog'), path: '/blog' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-lg shadow-black/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 group font-mono font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <span>NAM<span className="text-emerald-400">.DEV</span></span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-[#131924]/80 p-1.5 rounded-full border border-slate-200 dark:border-[#212B3B] backdrop-blur-md">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
                className="px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] text-slate-700 dark:text-slate-300 hover:border-emerald-400 transition-colors"
                title="Switch Language Việt / English"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
              </button>

              {/* CV Button */}
              <button
                onClick={() => setResumeOpen(true)}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 bg-slate-100 dark:bg-[#131924] border border-slate-200 dark:border-[#212B3B] text-slate-700 dark:text-slate-300 hover:border-emerald-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t('nav.cv')}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1C2433] transition-colors border border-transparent hover:border-slate-200 dark:hover:border-[#212B3B]"
                aria-label="Toggle Dark/Light Mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>

              {/* Hire Me */}
              <button
                onClick={() => navigate('/contact')}
                className="gradient-bg-emerald px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-1.5 transition-all transform active:scale-95 shadow-md"
              >
                <span>{t('nav.hire')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1C2433]"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#1C2433]"
                aria-label="Open Navigation Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden glass-card mt-3 mx-4 p-5 rounded-2xl border border-slate-200 dark:border-[#212B3B] space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500 text-white font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1C2433]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-200 dark:border-[#212B3B] flex items-center justify-between">
              <button
                onClick={() => { setResumeOpen(true); setMobileOpen(false); }}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>{t('nav.cv')}</span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="gradient-bg-emerald px-4 py-2 rounded-xl text-sm font-medium"
              >
                {t('nav.hire')}
              </button>
            </div>
          </div>
        )}
      </header>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
