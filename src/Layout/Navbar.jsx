import React, { useEffect, useState } from 'react'
import Button from '@/Components/Button'
import { Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: t('nav.about') },
    { href: "#projects", label: t('nav.projects') },
    { href: "#experience", label: t('nav.experience') },
    { href: "#testimonials", label: t('nav.testimonials') },
     { href: "#contact", label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }};

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong border-none py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight hover:text-primary" href="#">
          DM
          <span className='text-primary'>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a 
                href={link.href} 
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full glass hover:bg-surface transition-colors cursor-pointer"
          >
            <Globe size={16} />
            <span className="uppercase font-medium">{i18n.language === 'fa' ? 'EN' : 'FA'}</span>
          </button>
          <Button onClick={scrollToContact} size="sm">{t('nav.contact')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="p-2 text-foreground glass rounded-full cursor-pointer"
          >
            <Globe size={20} />
          </button>
          <button className="p-2 text-foreground cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container px-6 py-6 gap-4 flex flex-col">
            {navLinks.map((link, index) => (
              <a 
                href={link.href} 
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground"
                onClick={() => setMenuOpen(false)
                }
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() =>{ setMenuOpen(false);
              scrollToContact();}
            }>{t('nav.contact')}</Button>
          </div>
        </div>
      )}
    </header>
  )
}