"use client"
// import React from 'react';
import Slider from '../component/Slider';
import AOS from "aos";
import 'aos/dist/aos.css';


import Image from 'next/image';
import Card1 from '../assets/card1.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Phone from '@mui/icons-material/Phone';

import { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "0"});
  });


  return (
    <div className='bg-cover bg-center h-full' style={{ backgroundImage: `url('https://i.makeagif.com/media/1-13-2023/_3qu79.gif')` }}>
      <div className='flex flex-col items-center md:mx-28 mt-10 md:flex-row'>
        <div className=' leading-10 tracking-wider mb-8 p-4 md:p-20 text-center md:text-left md:mr-8'>
          <h1 
          data-aos="fade-right"
          className='text-3xl md:text-5xl text-yellow-600'>Welcome to<br/> Mairaj Event Planner,</h1>
          <h1 
          data-aos="fade-left"
          className='mt-6 text-xl md:text-3xl text-yellow-500 '>where dreams come to life and moments become memories.</h1> 
        </div>
        <div className='flex justify-center m-10'>
          <div className='group h-96 w-72'>
            <div className='relative h-full w-full rounded-xl shadow-xl transform-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='absolute insert-0'
              data-aos='flip-left'>
                <Image src={Card1} alt='Card1 Image' className='max-h-full max-w-full h-96 w-72 rounded-xl object-center shadow-xl shadow-black/40' />
              </div>
              <div className='absolute insert-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-xl font-bold'>Muhammad Ashraf</h1>
                  <p className='text-lg'><Phone fontSize='small'/> 03333173879</p>
                  <p className='text-lg'><WhatsAppIcon fontSize="small" /> 03122644238</p>
                  <h1 className="text-lg mt-12 md:text-xl font-bold">Social Media</h1>
                  <ul className="flex list-none mt-2 justify-around">
                    <li>
                      <a href="https://www.instagram.com/mairaj_event_planner?utm_source=qr&igsh=MXdtZnlkOGF5eHRiaw==" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon fontSize="large" style={{ color: '#fbbf24' }} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61555752317061&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon fontSize="large" style={{ color: '#fbbf24' }} />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/message/BMZ6WWDVE5B7C1" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon fontSize="large" style={{ color: '#fbbf24' }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col m-12 md:m-28 mx-12 md:mx-52 justify-center text-center'
      data-aos='zoom-in-up'>
        <h1 className=' text-3xl md:text-5xl mb-4 text-yellow-600'>
          We Make Your Dreams Come True
          </h1>
        <p className='text-lg md:text-xl mt-4 text-gray-600'>The Mairaj Event Planners Is an event Management Company Based In Karachi That Caters to Different Events Ranging From Formal Business Meetings and adventurous Domestic Tours To Lavish Weddings. We Are An All-Rounder Event Planner In Karachi, Tapping Various Verticals When It Comes Down To Celebrating The Grand Way.</p>
      </div>
      <div className='flex flex-col mt-2 mb-16 mx-12 md:mx-64 justify-center text-center'
      data-aos='zoom-in-up'>
      <h1 className=' text-3xl md:text-5xl mb-4 text-yellow-600'>Our Commitment</h1>
        <p className='text-lg md:text-xl mt-4 text-gray-600'>
        At Mairaj Event Planner, we are committed to exceeding expectations. Our dedication to quality, innovation, and client satisfaction has earned us the trust of countless families and organizations over the years. We take pride in being part of your cherished moments, creating memories that last a lifetime.
        </p>
      </div>
      <h1 className='text-center text-3xl md:text-5xl md:mb-2 text-yellow-600'
      data-aos='zoom-in-up'>
        Gallery
        </h1>
      <Slider />
    </div>
  );
};

export default Landing;

