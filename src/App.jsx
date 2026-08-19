import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}