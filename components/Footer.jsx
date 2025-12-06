import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New X logo

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <aside>
        <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-2">
          <span>HomeNest</span>
        </div>

        <p>HomeNest Real Estate Ltd.<br/>Providing reliable housing since 2012</p>
        <div className="flex gap-4 mt-4">
            <a href="#" className="text-2xl hover:text-primary transition"><FaXTwitter /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-primary transition"><FaLinkedin /></a>
        </div>
        
      </aside> 
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <header className="footer-title">Legal</header> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;