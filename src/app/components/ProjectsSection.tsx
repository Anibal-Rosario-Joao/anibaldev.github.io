import { motion } from 'motion/react';
import { ExternalLink, Brain, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Description'),
      technologies: ['Python', t('machineLearning'), t('spectrumAnalysis'), t('decisionTrees')],
      icon: Brain,
      link: '#',
    },
    {
      title: t('project2Title'),
      description: t('project2Description'),
      technologies: ['C++', t('machineLearning'), t('dataAnalysis'), t('predictiveModeling')],
      icon: Activity,
      link: '#',
    },
  ];

  return (
    <section id="projetos" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-center text-4xl">{t('featuredProjects')}</h2>
        <p className="mb-12 text-center text-muted-foreground">
          {t('scientificPublications')}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <a
                    href={project.link}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="mb-3 text-xl">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                  >
                    {t('viewPublication')}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
