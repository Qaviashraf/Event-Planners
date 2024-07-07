"use client";
import AOS from "aos";
import 'aos/dist/aos.css';

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-6 p-6 bg-gray-100 rounded-md shadow-xl"
    data-aos='zoom-in'>
      <h2 className="flex justify-center text-2xl font-bold mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4" data-aos='zoom-in'>
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4" data-aos='zoom-in'>
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4" data-aos='zoom-in'>
          <label htmlFor="mobile" className="block text-gray-600 text-sm font-semibold mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            name="user_tel"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Mobile Number"
            required
          />
        </div>
        <div className="mb-4" data-aos='zoom-in'>
          <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className='flex justify-center' data-aos='zoom-in'>
        <button
          type="submit"
          value="Send"
          className="w-32 bg-yellow-600 text-white py-2 rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  )
}
