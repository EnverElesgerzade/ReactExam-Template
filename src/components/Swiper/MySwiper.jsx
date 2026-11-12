
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import '../styles.css';
import slide1 from '../../assets/images/slide-1.jpg';
import slide2 from '../../assets/images/slider-2.jpg';
import {  FaArrowRight } from 'react-icons/fa';

export default function MySwiper() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><div className="slide1 " style={{backgroundImage: `url(${slide1})`}}>
        <div className="butovtxt  relative top-[80px] left-[95px]">

        <div className="kiciktxt bg-[#EAB308] w-[190px] h-[27px] p-[.1rem] rounded-[8px] relative left-[10px]">
          <p className='text-[13.5px] font-[500]'>Opening Sale Discount 50%</p>
        </div>
        <div className="maintxt">
          <h1 className='text-[3.052rem] leading-[1.25] text-[#001E2B] font-[700] w-[400px] text-left'>SuperMarket For Fresh Grocery</h1>
          <p className='w-[324px] relative top-[20px] text-left text-[#5C6C75] text-[1.125rem] font-[300]'>Introduced a new model for online grocery shopping and convenient home delivery.</p>

          <button className='flex items-center gap-[8px] w-[147px] text-[17px] relative top-[50px] text-[white] font-[500] p-[1.2rem] h-[42px] rounded-[8px] bg-[#21313C]'>Shop Now <FaArrowRight className='text-[15px]'/></button>
        </div>
        </div>
        </div></SwiperSlide>




      <SwiperSlide><div className='slide1' style={{backgroundImage: `url(${slide2})`}}>

         <div className="butovtxt  relative top-[80px] left-[95px]">

        <div className="kiciktxt bg-[#EAB308] w-[230px] h-[28px] p-[.1rem] rounded-[8px] relative left-[10px]">
          <p className='text-[13.5px] font-[500]'>Free Shipping - orders over $100</p>
        </div>
        <div className="maintxt">
          <h1 className='text-[3.052rem] leading-[1.25] text-[#001E2B] font-[700] w-[400px] text-left'>Free Shipping on orders over <h1 className='text-[green]'>$100</h1></h1>
          <p className='w-[374px] relative top-[20px] text-left text-[#5C6C75] text-[1.125rem] font-[300]'>Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>

          <button className='flex items-center gap-[8px] w-[147px] text-[17px] relative top-[50px] text-[white] font-[500] p-[1.2rem] h-[42px] rounded-[8px] bg-[#21313C]'>Shop Now <FaArrowRight className='text-[15px]'/></button>
        </div>
        </div>
        </div></SwiperSlide>
      
    </Swiper>
  );
}
