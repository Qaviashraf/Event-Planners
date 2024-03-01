'use client'
import MailOutline from '@mui/icons-material/MailOutline';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className="flex-grow left-0 w-full divide-y-2 divide-yellow-200 font-mono">
      <div className="bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row justify-around border-t-2 border-yellow-200">
        <div className="mb-4 md:mb-0">
          <h1 className="text-lg text-yellow-500 md:text-xl font-bold">mairaj event planner</h1>
          <ul className="list-none mt-2">
            <li><LocationOn fontSize='small'/>  North Nazimabad, Karachi, Pakistan</li>
            <li><MailOutline fontSize='small'/>  mairaj.event.planner</li>
            <li><Phone fontSize='small'/>  +923333173879</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold text-yellow-500">Information</h2>
          <ul className="list-none mt-2">
            <li className="hover:text-yellow-600">Events</li>
            <li className="hover:text-yellow-600">About Us</li>
            <li className="hover:text-yellow-600">Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg text-yellow-500 md:text-xl font-bold">Social Media</h1>  
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
      <div className="left-0 w-full text-xs">
        <p className="m-2 ml-6">2024, Company Inc. All rights reserved. @ mariaj event planner</p>
      </div>
    </div>
  );
};

export default Footer;

