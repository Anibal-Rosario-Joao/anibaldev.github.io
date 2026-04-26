import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Desktop buttons */}
        <div className="hidden items-center gap-4 md:flex">
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

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-border bg-card p-2 transition-colors hover:bg-accent md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-sm md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setLanguage(language === 'pt' ? 'en' : 'pt');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent"
              >
                <Globe className="h-5 w-5" />
                <span>{language === 'pt' ? 'Idioma: Português' : 'Language: English'}</span>
                <span className="ml-auto text-sm text-muted-foreground">
                  {language === 'pt' ? 'EN' : 'PT'}
                </span>
              </button>

              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{isDark ? (language === 'pt' ? 'Modo Claro' : 'Light Mode') : (language === 'pt' ? 'Modo Escuro' : 'Dark Mode')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
