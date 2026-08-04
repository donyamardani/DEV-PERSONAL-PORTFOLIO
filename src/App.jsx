import React from 'react'
import Hero from '@/Sections/Hero'
import About from '@/Sections/About'
import Experience from '@/Sections/Experience'
import Progect from '@/Sections/Progect'
import Testimonials from '@/Sections/Testimonials'
import Contact from '@/Sections/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience/>
        <Progect />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
