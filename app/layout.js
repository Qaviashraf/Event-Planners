import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './component/Navbar';
import Footer from './component/Footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mairaj Event Planner",
  description: "Best event management company in karachi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
