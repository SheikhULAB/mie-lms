import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Company Info Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <img
              src="/images/logo.png" 
              alt="MIE LMS Logo"
              className="w-16 h-16"
            />
   
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-gray-300">
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-sm">© 2024 MIE LMS, All rights reserved.</p>
        </div>

        {/* Useful Links Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">AHZ Associates</a></li>
            <li><a href="#" className="hover:underline">MIE English Academy</a></li>
            <li><a href="#" className="hover:underline">MIE Pathways</a></li>
          </ul>
        </div>

        {/* Support Center Section */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-4">Support Center</h3>
          <p>01********* or 01*********</p>
          <p>info@mielms.com</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Website Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
