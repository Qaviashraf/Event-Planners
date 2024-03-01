"use client"
import AOS from "aos";
import 'aos/dist/aos.css';

import MailOutline from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUs = () => {
    return (
        <div>
            <h1 className='flex justify-center text-3xl md:text-4xl my-4 text-yellow-600'
            data-aos='zoom-in-up'>ContactUs</h1>
            <iframe className="w-full h-72 my-8"
            data-aos='zoom-in-up'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.970654304518!2d67.0212156251717!3d24.940710097931806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8014fe5943%3A0x11df7a65effb1ef6!2sNorth%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708626141993!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="p-4 md:p-8 flex flex-col md:flex-row justify-around">
                <div className="mb-4 md:mb-0"
                data-aos='fade-right'>
                    <h1 className="text-lg text-yellow-600 md:text-xl font-bold">mairaj event planner</h1>
                    <ul className="list-none mt-2">
                        <li><LocationOn fontSize='small' />  North Nazimabad, Karachi, Pakistan</li>
                        <li><MailOutline fontSize='small' />  mairaj.event.planner</li>
                        <li><Phone fontSize='small' />  +923333173879</li>
                    </ul>
                </div>
                <div data-aos='fade-left'>
                    <h1 className="text-lg text-yellow-600 md:text-xl font-bold">Follow Us On Social Media</h1>
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
            <div className="max-w-md mx-auto mt-8 mb-6 p-6 bg-gray-100 rounded-md shadow-xl"
            data-aos='zoom-in'>
      <h2 className="flex justify-center text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4" data-aos='zoom-in'>
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            id="email"
            name="email"
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
            id="mobile"
            name="mobile"
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
            id="message"
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
          className="w-32 bg-yellow-600 text-white py-2 rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
        </div>
    )
}

export default ContactUs;