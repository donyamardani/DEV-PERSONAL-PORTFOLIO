import React from 'react'
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.clean_code.title'),
      description: t('about.highlights.clean_code.description'),
    },
    {
      icon: Rocket,
      title: t('about.highlights.performance.title'),
      description: t('about.highlights.performance.description'),
    },
    {
      icon: Users,
      title: t('about.highlights.collaboration.title'),
      description: t('about.highlights.collaboration.description'),
    },
    {
      icon: Lightbulb,
      title: t('about.highlights.innovation.title'),
      description: t('about.highlights.innovation.description'),
    },
  ];

  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                {t('about.badge')}
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              {t('about.headline_main')}{' '}
              <span className='font-serif font-medium text-white'>
                {t('about.headline_italic')}
              </span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                {t('about.quote')}
              </p>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className='glass p-6 rounded-2xl animate-fade-in' 
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}