import React from 'react'
import HeaderPic from '../../assets/headerPic.jpg'
import Navbar from '../../components/Navbar'
import FoodPic from '../../assets/foodMissionPic.png'
import Slides from '../../components/Animation/Slides'
import '../Home/Home.css'
import GridLayout from '../../components/layout/GridLayout'
import { WhyChooseUs } from '../../components/whyChooseUs/WhyChooseUs'
import Customers from '../../components/Customers/Customers'
export const Home = () => {
  return (
    <>
      <div className='.main_container_Home'>

        <Navbar />

        <img src={HeaderPic}  className='HeaderPic'/>
        <div className='Picture_inside_text'>

          <h1>Aspire to eat healthy food!</h1>
          <p>Always try to eat healthy food. Your body will love you!</p>
          <button className='btnOfHomePage'>Menu</button>
        </div>
      </div>
      {/* Section Change  */}
      <div className='outMissionSection'>
        <div className='outMissionFirstSection'>
          <p>Our Mission </p>
       
          <h1>To keep you healthy and fresh!</h1>
          <p>Our mission is to serve you a wide variety of healthy food which will help you stay healthy and invigorated. Our menu has been carefully curated to present you with the freshest and tastiest vegetarian food in the country!</p>
        </div>

        <div className='outMissionSecondSection'> 
          <img src={FoodPic}  className='pictureOurMission' />
        </div>
      </div>
      <div className='OurBestSellerUpperText'>
      <h1 style={{fontFamily:"cursive"}}>Our best Sellers</h1>
      </div>
      <Slides/>
      <GridLayout/>
      <h1 className='whyChooseUsUpperTExt'>Why Choose Us</h1>
      <WhyChooseUs/>
      {/*  https://tse4.mm.bing.net/th?id=OIP.CSQ9_j4Y6ipkoWxd29DhawHaEj&pid=Api&P=0 */}
      <h1 className='OurBestSellerUpperText' style={{marginTop:"50px"}}>testimonial</h1>
      <Customers/>
    </>


  )
}
