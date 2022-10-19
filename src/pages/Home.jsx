import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import LowerContent from '../components/LowerContent'
import { slides } from '../data'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'
const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <LowerContent slides = {slides}/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <BottomFooter/>
    </div>
  )
}
export default Home
