import React from "react";
import {
  FaFacebookF,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-secondary mb-3">WICA</h1>
          <p className="text-sm max-w-xs leading-relaxed">
            The premier international cricket academy dedicated to nurturing world-class athletes, coaches, and champions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-secondary transition">Home Page</a></li>
            <li><a href="/about" className="hover:text-secondary transition">About Us</a></li>
            <li><a href="/#events" className="hover:text-secondary transition">Our Events</a></li>
            <li><a href="/#contact" className="hover:text-secondary transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Follow Us</h3>
          <div className="flex space-x-5 text-xl">
            <a
              href="https://wa.me/923312111666"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:info@wica.pk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/www.wica.org.pk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@wica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-pink-400 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Empty or Additional Column
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-400">Subscribe to our channels and follow for daily updates.</p>
        </div> */}
      </div>

      {/* Bottom */}
      <div className="container mx-auto text-center text-xs text-gray-500 border-t border-gray-700 pt-4 mt-10 px-4 md:px-0">
        &copy; {new Date().getFullYear()} WICA International Cricket Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
