import { Download, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../../imports/ChatGPT_Image_Apr_25,_2026,_07_05_18_PM.png';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-screen items-center py-20 pt-32">
      <div className="grid w-full gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-4 text-lg text-primary">{t('hello')}</p>
          <h1 className="mb-3 text-4xl md:text-5xl lg:text-6xl">Anibal Rosário João</h1>
          <h2 className="mb-10 text-2xl text-muted-foreground md:text-3xl">{t('androidDeveloper')}</h2>

          <div className="mb-12 space-y-4 border-l-4 border-primary/30 pl-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="rounded-lg bg-primary px-8 py-3 text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            >
              {t('viewProjects')}
            </a>
            <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3 transition-all hover:scale-105 hover:bg-accent">
              <Download className="h-5 w-5" />
              {t('downloadCV')}
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-secondary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-accent" />
            <img
              src={profileImage}
              alt="Anibal Rosário João"
              className="relative h-auto w-full max-w-md object-cover mix-blend-normal"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
