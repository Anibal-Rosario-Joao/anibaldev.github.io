import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop controls */}
        <div className="hidden items-center gap-4 sm:flex">
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 transition-colors hover:bg-accent"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm">{language === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg border border-border bg-card p-2 transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-border bg-card p-2 transition-colors hover:bg-accent sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 px-4 py-3 sm:hidden">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setLanguage(language === 'pt' ? 'en' : 'pt');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left transition-colors hover:bg-accent"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">
                {language === 'pt' ? 'Mudar para English' : 'Switch to Português'}
              </span>
            </button>

            <button
              onClick={() => {
                setIsDark(!isDark);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left transition-colors hover:bg-accent"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="text-sm font-medium">
                {isDark
                  ? language === 'pt' ? 'Modo Claro' : 'Light Mode'
                  : language === 'pt' ? 'Modo Escuro' : 'Dark Mode'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
