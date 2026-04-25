import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code2 } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl">{t('about')}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-border bg-card p-8"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t('aboutDescription')}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
