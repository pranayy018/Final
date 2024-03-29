import React from 'react'
import About from '../About/About'
import { Navbar } from '../../Components'
import Footer from '../Footer/Footer'
import Features from '../Features/Features'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home