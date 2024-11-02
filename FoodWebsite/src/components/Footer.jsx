import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding & Description */}
        <div>
          <h1 className="text-3xl font-bold mb-3 text-brightColor">Mirath Chatkhara</h1>
          <p className="text-gray-300 leading-relaxed">
            Experience the taste of gourmet delights from the comfort of your home. 
            Discover flavors that celebrate culinary artistry and passion.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <nav className="text-gray-400 space-y-3">
            <a href="/" className="block hover:text-brightColor transition-colors">Home</a>
            <a href="/" className="block hover:text-brightColor transition-colors">About Us</a>
            <a href="/" className="block hover:text-brightColor transition-colors">Our Menu</a>
            <a href="/" className="block hover:text-brightColor transition-colors">Reviews</a>
          </nav>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact & Follow</h2>
          <p className="text-gray-400 mb-2">Email: MirathChatkhara@email.com</p>
          <p className="text-gray-400 mb-4">Phone: +64 958 248 966</p>
          <div className="flex gap-6">
            <a href="/" className="text-gray-400 hover:text-brightColor transition-colors">
              <BsFacebook size={24} />
            </a>
            <a href="/" className="text-gray-400 hover:text-brightColor transition-colors">
              <RiTwitterXFill size={24} />
            </a>
            <a href="/" className="text-gray-400 hover:text-brightColor transition-colors">
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10">
        <p className="text-center py-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mirath Chatkhara | Developed by <span className="text-brightColor">Team</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
