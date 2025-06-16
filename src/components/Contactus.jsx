import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-gray-700">
            We'd love to hear from you! Whether you have questions about training, programs, or just want to say hello — our team is ready.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <p className="flex items-center"><FaPhoneAlt className="text-secondary mr-3" /> 0331 2111666</p>
            <p className="flex items-center"><FaWhatsapp className="text-secondary mr-3" /> +92 331 2111666</p>
            <p className="flex items-center"><FaEnvelope className="text-secondary mr-3" /> info@wica.pk</p>
            <p className="flex items-center"><FaGlobe className="text-secondary mr-3" /> <a href="http://www.wica.pk/" className="text-blue-600 underline">www.wica.pk</a></p>
            <p className="flex items-center"><FaMapMarkerAlt className="text-secondary mr-3" /> WICA Sports Complex 
Sector-A, Park Road, Bahria Enclave, Islamabad</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg shadow-lg p-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully! (form not connected)");
          }}
        >
          <h3 className="text-2xl font-semibold text-primary">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-2 rounded hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
