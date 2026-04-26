import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const languages = [
    { name: t('portuguese'), level: t('native'), percentage: 100 },
    { name: t('english'), level: t('intermediate'), percentage: 70 },
    { name: t('french'), level: t('beginner'), percentage: 30 },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="mb-12">
        <h3 className="mb-6 text-center text-2xl">{t('languagesSection')}</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {languages.map((lang) => (
            <div key={lang.name} className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <span>{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/Anibal-Rosario-Joao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anibal-ros%C3%A1rio-jo%C3%A3o-1b2343331/"
            target="_blank"inkedin.
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-secondary"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/hannibal_ofice/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
          <a
            href="anibalrosariojoao2002@gmail.com"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © 2026 Anibal Rosário João. {t('developedWith')}.
        </p>
      </div>
    </footer>
  );
}
