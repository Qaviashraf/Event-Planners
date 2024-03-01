"use client"
// Images
import slide1 from '../assets/Slider1.PNG';
import slide2 from '../assets/Slider14.png';
import slide3 from '../assets/Slider3.png';
import slide4 from '../assets/Slider13.png';
import slide5 from '../assets/Slider10.png';
import slide6 from '../assets/Slider2.png';
import slide7 from '../assets/Slider5.PNG';
import slide8 from '../assets/Slider4.png';
import slide9 from '../assets/Slider8.png';
import slide10 from '../assets/Slider6.png';
import slide11 from '../assets/Slider7.png';
import slide12 from '../assets/Slider12.png';
import slide13 from '../assets/Slider11.png';
import slide14 from '../assets/Slider9.png';
import slide15 from '../assets/Slider15.png';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {Autoplay} from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const sliderImages = [
    { src: slide1, alt: 'Slide 1' },
    { src: slide2, alt: 'Slide 2' },
    { src: slide3, alt: 'Slide 3' },
    { src: slide4, alt: 'Slide 4' },
    { src: slide5, alt: 'Slide 1' },
    { src: slide6, alt: 'Slide 2' },
    { src: slide7, alt: 'Slide 3' },
    { src: slide8, alt: 'Slide 4' },
    { src: slide9, alt: 'Slide 1' },
    { src: slide10, alt: 'Slide 2' },
    { src: slide11, alt: 'Slide 3' },
    { src: slide12, alt: 'Slide 4' },
    { src: slide13, alt: 'Slide 2' },
    { src: slide14, alt: 'Slide 3' },
    { src: slide15, alt: 'Slide 4' },
  ];

  return (
    
    <div className='slider-effectCoverflow'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{ delay:1500 }} // Set the delay to 2500 milliseconds (2.5 seconds)
        modules={[EffectCoverflow, Pagination, Autoplay ]}
        className="mySwiper"
      >
        <div className='swiper-wrapper'>
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <Image
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;

