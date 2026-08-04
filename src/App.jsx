import React from 'react'
import { ThemeProvider } from './ThemeContext.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Leadership from './components/Leadership.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-paper dark:bg-void min-h-screen overflow-x-hidden">
        <Nav />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
