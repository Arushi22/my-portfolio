import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import HeroSection from './HeroSection'

function MainContainer() {
  return (
    <div>
        <HeroSection />
        <Projects />
        <Contact />
    </div>
  )
}

export default MainContainer