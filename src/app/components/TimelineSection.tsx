import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TimelineSection() {
  const { t } = useLanguage();

  const timelineData = [
    {
      type: 'education',
      icon: GraduationCap,
      title: t('computerEngineering'),
      organization: t('zambezeUniversity'),
      period: t('currentPeriod'),
      description: t('educationDescription'),
      highlights: [t('androidDevelopment'), t('machineLearning'), t('dataAnalysis')],
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: t('warehouseOperating'),
      organization: t('billCommercial'),
      period: t('workPeriod'),
      description: t('workDescription'),
      highlights: [t('operationalDataAnalysis'), t('processOptimization'), t('inventoryManagement')],
    },
  ];

  return (
    <section id="experiencia" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-center text-4xl">{t('experienceEducation')}</h2>

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-4 flex items-start gap-3">
                        <div
                          className={`rounded-lg p-2 ${
                            item.type === 'education'
                              ? 'bg-primary/10 text-primary'
                              : 'bg-secondary/10 text-secondary'
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl">{item.title}</h3>
                          <p className="text-muted-foreground">{item.organization}</p>
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                        </div>
                      </div>

                      <p className="mb-4 text-muted-foreground">{item.description}</p>

                      <ul className="space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm">
                            <span
                              className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                                item.type === 'education' ? 'bg-primary' : 'bg-secondary'
                              }`}
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-8 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-background md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        item.type === 'education' ? 'bg-primary' : 'bg-secondary'
                      }`}
                    />
                  </div>

                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
