import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';

  const baseExperiences = [
    {
      technologies: ["React", "Next.js", "Redux", "Tailwind", "MUI", "MongoDB"],
      current: true,
    },
    {
      technologies: ["React", "Tailwind", "MUI", "JavaScript"],
      current: false,
    },
    {
      technologies: ["JavaScript", "HTML", "CSS"],
      current: false,
    },
  ];

  const translatedItems = t('experience.items', { returnObjects: true }) || [];

  const experiences = baseExperiences.map((exp, idx) => ({
    ...exp,
    period: translatedItems[idx]?.period || '',
    role: translatedItems[idx]?.role || '',
    company: translatedItems[idx]?.company || '',
    description: translatedItems[idx]?.description || '',
  }));

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t('experience.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t('experience.headline_main')}{' '}
            <span className="font-serif  font-medium text-white">
              {t('experience.headline_italic')}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 rtl:left-auto rtl:right-0 rtl:md:right-1/2 rtl:md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 rtl:left-auto rtl:right-0 rtl:translate-x-1/2 rtl:md:right-1/2">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`ps-8 md:ps-0 ${
                      isEven
                        ? 'md:pe-16 md:text-end'
                        : 'md:col-start-2 md:ps-16'
                    }`}
                  >
                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}