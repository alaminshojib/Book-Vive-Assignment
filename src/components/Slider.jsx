
// Import Swiper styles

import './slider.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider({craft}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] bg-opacity-50 object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div className=' justify-center item-center text-center auto flex flex-col'><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-[url(https://i.ibb.co/Swb6SFr/superhero-cartoon-design.webp)] object-cover py-10 h-96 bg-no-repeat bg-cover">
            <div><h3>Unleash Your Imagination</h3>
            <p>Let your mind wander and dream freely.</p></div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
