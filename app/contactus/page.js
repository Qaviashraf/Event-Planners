"use client"
import AOS from "aos";
import 'aos/dist/aos.css';

import { ContactForm } from "../component/ContactForm";

import MailOutline from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUs = () => {
    return (
        <div className="mt-16">
            <h1 className='flex justify-center text-3xl md:text-4xl my-4 text-yellow-600'
            data-aos='zoom-in-up'>ContactUs</h1>
            <iframe className="w-full h-72 my-8"
            data-aos='zoom-in-up'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.970654304518!2d67.0212156251717!3d24.940710097931806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8014fe5943%3A0x11df7a65effb1ef6!2sNorth%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708626141993!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="p-4 md:p-8 flex flex-col md:flex-row justify-around">
                <div className="mb-4 md:mb-0"
                data-aos='fade-right'>
                    <h1 className="text-lg text-yellow-600 md:text-xl font-bold">mairaj event planner</h1>
                    <ul className="list-none mt-2 ">
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
            <ContactForm />
        </div>
    )
}

export default ContactUs;