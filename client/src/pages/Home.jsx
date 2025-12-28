import React from 'react'
import Banner from '../componenets/home/Banner'
import Hero from '../componenets/home/Hero'
import Features from '../componenets/home/Features'
import Testimonial from '../componenets/home/Testimonial'
import CallToAction from '../componenets/home/CallToAction'
import Footer from '../componenets/home/Footer'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Hero/>
        <Features/>
        <Testimonial/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home
