import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Experience from './Sections/Experience'
import Projects from './Sections/Projects'
import Testimonials from './Sections/Testimonials'
import Contact from './Sections/Contact'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

export default function App() {
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
