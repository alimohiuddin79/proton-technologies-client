import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import OurServices from './components/OurServices'
import OurProjects from './components/OurProjects'
import ContactUs from './components/ContactUs'
import Reviews from './components/Reviews'
import BlogSection from './components/BlogSection'

const Home = () => {
  return (
    <main
        className='
            flex
            flex-col
            w-full
        '
    >
        <HeroSection />
        <AboutSection />
        <OurServices />
        <OurProjects />
        <Reviews />
        <BlogSection />
        <ContactUs />
    </main>
  )
}

export default Home