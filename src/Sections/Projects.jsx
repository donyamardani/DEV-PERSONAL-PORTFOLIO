import React from 'react'
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AnimatedBorderButton from '../Components/AnimatedBorderButton';

export default function Projects() {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.language === 'fa';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const projectData = [
    {
      image: "/projects/project1.png",
      tags: ["React", "Tailwind", "NodeJS", "MongoDB"],
      link: "https://www.loom.com/share/36b5b771f1194fe4928375525f6b4de1",
      github: "https://github.com/donyamardani/admin-dashbord-base",
    },
    {
      image: "/projects/project2.png",
      tags: ["React", "Redux", "MongoDB", "Tailwind"],
      link: "https://www.loom.com/share/bfafcdb37256411883a39727c5d3d23c",
      github: "https://github.com/donyamardani/phone-shop",
    },
    {
      image: "/projects/project3.png",
      tags: ["React", "Redux", "MUI", "MongoDB"],
      link: "https://www.loom.com/share/191771fbea3343e9aecac57b31b56945",
      github: "https://github.com/donyamardani/shopping-site-reaact-project",
    },
    {
      image: "/projects/project4.png",
      tags: ["React", "Tailwind"],
      link: "#",
      github: "https://github.com/donyamardani/DEV-PERSONAL-PORTFOLIO",
    },
  ];

  const translatedItems = t('projects.items', { returnObjects: true }) || [];

  const projects = projectData.map((data, index) => ({
    ...data,
    title: translatedItems[index]?.title || '',
    description: translatedItems[index]?.description || '',
  }));

  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      {/* Bg glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mb-16 mx-auto'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            {t('projects.badge')}
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            {t('projects.headline_main')}{' '}
            <span className='font-serif font-medium text-white'>
              {t('projects.headline_italic')}
            </span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            {t('projects.description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='group rounded-2xl glass overflow-hidden animate-fade-in md:row-span-1' 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className='relative overflow-hidden aspect-video'>
                <img 
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                 src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title} 
                />
                <div className='absolute inset-0 bg-linear-to-t from-card via-card/5 to-transparent opacity-60' />

                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a 
                    href={project.link} 
                    target='_blank' 
                    rel="noreferrer"
                    className='glass p-3 rounded-full hover:bg-primary/70 hover:text-primary-foreground transition-all'
                  >
                    <ArrowIcon className='w-5 h-5' />
                  </a>
                  <a 
                    href={project.github} 
                    target='_blank' 
                    rel="noreferrer"
                    className='glass p-3 rounded-full hover:bg-primary/70 hover:text-primary-foreground transition-all'
                  >
                    <FaGithub className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4'>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowIcon className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton className="inline-flex items-center gap-2">
            <a href='https://github.com/donyamardani'>{t('projects.view_all')}</a>
            <ArrowIcon className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}