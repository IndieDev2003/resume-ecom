import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Inspiration from './components/Inspiration'
import TrendingProducts from './components/TrendingProducts'
import SelectByColor from './components/SelectByColor'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-full w-screen overflow-x-hidden'>
      <Nav />
      <Hero2 />
      <Inspiration />
      <TrendingProducts />
      <SelectByColor />
      <Testimonial />
      <WhyUs />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App