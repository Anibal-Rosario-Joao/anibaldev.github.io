import { motion } from 'motion/react';
import { Code2, Smartphone, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const skillsData = {
    languages: {
      title: t('languages'),
      icon: Code2,
      skills: ['Kotlin', 'Java', 'Dart', 'Python', 'C++'],
    },
    frameworks: {
      title: t('frameworksLibs'),
      icon: Smartphone,
      skills: ['Android SDK', 'Flutter', 'Retrofit', 'Room', 'Firebase'],
    },
    tools: {
      title: t('tools'),
      icon: Wrench,
      skills: ['Compose', 'Material 3', 'Android Studio', 'Gradle', 'Git/GitHub'],
    },
  };

  return (
    <section id="habilidades" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-center text-4xl">{t('technicalSkills')}</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skillsData).map(([key, category], index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
