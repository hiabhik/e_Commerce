import React from 'react'
import Carousal from '../components/Carousal';
import Header from '../components/Header';
import "../index.css"
import Footer from '../components/Footer';
import Shipping from '../components/Shipping';
import ProductNav from '../components/ProductNav';
import FeaturedProduct from '../components/Featuredproduct';

const Home = () => {
  return (
    <>
    <Header/>
    <Carousal/>
    <br/><br/><br/>
    <h2 className='text-center'>BEST SELLER</h2>
    <br/>
    <ProductNav/>

    <br/>
    <h3 className='text-decoration-underline text-center'>Learn More</h3><br/>
    <Carousal/><br/><br/>
    <FeaturedProduct /><br/><hr/><br/>
    <Shipping/>
    <Footer/>
    </>
  )
}

export default Home