import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';

  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  ];

  const translatedItems = t('testimonials.items', { returnObjects: true }) || [];

  const testimonials = avatars.map((avatar, idx) => ({
    avatar,
    quote: translatedItems[idx]?.quote || '',
    author: translatedItems[idx]?.author || '',
    role: translatedItems[idx]?.role || '',
  }));

  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id='testimonials' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none' />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            {t('testimonials.badge')}
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            {t('testimonials.headline_main')}{' '}
            <span className='font-serif font-medium text-white'>
              {t('testimonials.headline_italic')}
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Main Testimonial Card */}
            <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 relative'>
              <div className='absolute -top-4 left-8 rtl:left-auto rtl:right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg'>
                <Quote className='w-6 h-6 text-primary-foreground' />
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                "{testimonials[activeIdx]?.quote}"
              </blockquote>

              <div className='flex items-center gap-4'>
                <img
                  className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/20'
                  src={testimonials[activeIdx]?.avatar}
                  alt={testimonials[activeIdx]?.author}
                />
                <div>
                  <div className='font-semibold text-lg text-foreground'>
                    {testimonials[activeIdx]?.author}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonials[activeIdx]?.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <button
              onClick={previous}
              aria-label="Previous testimonial"
              className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95'
            >
              <ChevronLeft className={`w-5 h-5 ${isRtl ? '-scale-x-100' : ''}`} />
            </button>

            <div className='flex gap-2 items-center'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIdx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className='p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95'
            >
              <ChevronRight className={`w-5 h-5 ${isRtl ? '-scale-x-100' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}