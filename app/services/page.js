import React from 'react';
import Slider from '../component/Slider';
import AOS from "aos";
import 'aos/dist/aos.css';

const Services = () => {
  return (
    <div>
    <div className="relative h-52 md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://sa-mer.com/wp-content/uploads/2022/07/smr-2.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
        <h1 className="text-white font-bold text-3xl md:text-7xl"
        data-aos='zoom-in'>Our Services</h1>
      </div>
    </div>
    <div className='my-16 md:my-32'
    data-aos='zoom-in-up'>
    <h1 className='flex justify-center text-3xl md:text-5xl mb-4 text-yellow-600'>Decoration</h1>
    <div>
    <p className='text-center text-lg md:text-xl mx-10 md:mx-44 text-gray-600'>Marcem Events Crafting Unforgettable Moments. We specialize in seamless event planning and exquisite catering services. Our expertise extends beyond wedding planning to include a culinary experience that delights the senses.</p>
    <Slider />
   </div>
   </div>
    <div className='text-center mx-10 md:mx-44'
    data-aos='zoom-in-up'>
      <h1 className='flex justify-center text-3xl md:text-5xl mb-4 text-yellow-600'>Catering</h1>
      <p className=' text-lg md:text-xl text-gray-600 mb-28'>Our exquisite catering services are tailored to your preferences, ensuring that every bite is a celebration of flavor and creativity. our commitment to excellence extends beyond wedding planning. We take pride in offering a culinary experience that goes beyond the ordinary. Our exquisite catering services are designed to tantalize your taste buds, with each bite becoming a celebration of flavor and creativity. From carefully curated menus to personalized preferences, we ensure that every aspect of the culinary journey aligns with your unique tastes and preferences.</p>
    </div>
    </div>
  );
};

export default Services;
