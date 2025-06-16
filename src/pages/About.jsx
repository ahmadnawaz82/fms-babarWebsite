import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaStar,
  FaClock,
  FaChair,
  FaTiktok,
} from "react-icons/fa";
import ContactUs from "../components/Contactus"; // Import ContactUs component

const Footer = lazy(() => import("../components/Footer"));

const testimonialsData = {
  "Our Teams": [
    {
      name: "Ali Khan",
      role: "Team Captain",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      testimonial:
        "Our team is dedicated and disciplined, always striving for excellence in every match.",
    },
    {
      name: "Sarah Malik",
      role: "Team Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      testimonial:
        "We foster a collaborative environment where every player's strength is valued.",
    },
  ],
  "Our Trainers": [
    {
      name: "Coach Asim Raza",
      role: "Head Coach",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      testimonial:
        "I focus on holistic development — technical skills, fitness, and mental toughness.",
    },
    {
      name: "Coach Nadia Ali",
      role: "Fitness Trainer",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      testimonial:
        "Our players' physical conditioning is top priority to keep them match-ready.",
    },
  ],
  "Our Collaborators": [
    {
      name: "Cricket Equipment Co.",
      role: "Official Partner",
      image: "https://via.placeholder.com/150?text=Partner+Logo",
      testimonial:
        "Proud to collaborate with WICA to provide top-quality gear for emerging talents.",
    },
    {
      name: "Sports Nutrition Ltd.",
      role: "Nutrition Partner",
      image: "https://via.placeholder.com/150?text=Nutrition",
      testimonial:
        "We support WICA players with tailored nutrition plans for peak performance.",
    },
  ],
  "Our Champions": [
    {
      name: "Zain Malik",
      role: "National Player",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
      testimonial:
        "WICA gave me the platform and coaching to achieve my dream of playing internationally.",
    },
    {
      name: "Hina Siddiqui",
      role: "Regional Champion",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      testimonial:
        "The academy's mentorship and training are unmatched — truly life-changing.",
    },
  ],
  "Our Top Students": [
    {
      name: "Ahmed Raza",
      role: "Emerging Talent",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      testimonial:
        "Every session here has pushed me to be better, and the results show on the field.",
    },
    {
      name: "Fatima Noor",
      role: "Most Improved Player",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      testimonial:
        "The supportive environment helps me train hard and stay motivated every day.",
    },
  ],
};

const tabs = Object.keys(testimonialsData);

const headingMap = {
  "Our Teams": "Meet Our Teams",
  "Our Trainers": "Expert Trainers",
  "Our Collaborators": "Our Trusted Partners",
  "Our Champions": "Champions' Corner",
  "Our Top Students": "Rising Stars",
};

// Importing images for the "More from WICA" section
import intBoxCricket from "../assets/intboxcricket.png";
import intCricketAcademy from "../assets/intCricketacadmy.png";
import intFutsalAcademy from "../assets/intfutsalacadmy.png";
import intKarateAcademy from "../assets/intkarateacadmy.png";
import intPaddleTennisAcademy from "../assets/intpaddletennisacadmy.png";
import Navbar from "../components/Navbar";

const About = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <Navbar />

      {/* Full Page Background with White */}
      <div className="bg-white min-h-screen overflow-hidden">
        
        {/* Hero Section */}
        <div className="pt-28 pb-20 text-center bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold text-primary mb-4 tracking-wide drop-shadow-md"
          >
            About WICA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary max-w-3xl mx-auto px-6 text-lg sm:text-xl font-medium"
          >
            At WICA International Cricket Academy, our mission is to develop elite
            cricket talent by providing expert coaching, world-class facilities,
            and holistic player development.
          </motion.p>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-3xl p-10 border border-primary/20 hover:shadow-primary/40 transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-wide">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <FaStar className="text-yellow-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold text-primary">92% Student Satisfaction</h3>
                <p className="text-gray-700">Our students recommend us highly based on reviews.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <FaClock className="text-gray-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold text-primary">Operating Hours</h3>
                <p className="text-gray-700">We are available from 9 AM to 5 PM daily.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <FaChair className="text-green-600 text-4xl mb-4" />
                <h3 className="text-xl font-semibold text-primary">Outdoor Seating Available</h3>
                <p className="text-gray-700">Enjoy training with ample outdoor seating for visitors.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="    max-w-7xl mx-auto px-6 py-20 ">
          <h2 className="text-5xl font-extrabold text-primary text-center mb-16 tracking-wide drop-shadow-md">
            {headingMap[activeTab]}
          </h2>

         {/* Tabs - Horizontal Scroll on Mobile */}
<div className="flex gap-4 mb-12 justify-center p-1.5 overflow-x-auto  sm:flex-nowrap sm:flex-row s">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md whitespace-nowrap ${
        activeTab === tab
          ? "bg-primary text-white shadow-primary/70"
          : "bg-gray-200 text-gray-700 hover:bg-secondary hover:text-white hover:shadow-secondary/70"
      }`}
    >
      {tab}
    </button>
  ))}
</div>



          {/* Testimonials Cards - Grid Layout */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-10 px-2"
            style={{ paddingBottom: "12px" }}
          >
            {testimonialsData[activeTab].map(
              ({ name, role, image, testimonial }, i) => (
                <div
                  key={i}
                  className="min-w-[320px] max-w-sm bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 rounded-full object-cover mb-5 border-4 border-primary"
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-xl text-primary mb-1">
                    {name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">{role}</p>
                  <p className="text-gray-700 text-base italic leading-relaxed">
                    "{testimonial}"
                  </p>
                </div>
              )
            )}
          </motion.div>
        </section>

        {/* More from WICA Section */}
        <section className="py-16">
          <h2 className="text-4xl font-extrabold text-primary text-center mb-12">
            More from WICA
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 px-6 sm:px-12"
          >
            {[ 
              { image: intBoxCricket, title: "International Standards Box Cricket" },
              { image: intCricketAcademy, title: "International Cricket Academy" },
              { image: intFutsalAcademy, title: "International Futsal Academy" },
              { image: intKarateAcademy, title: "International Karate Academy" },
              { image: intPaddleTennisAcademy, title: "International Paddle Tennis Academy" },
            ].map(({ image, title }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="text-gray-700 mt-2">Brief description of this facility.</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16">
          <ContactUs />
        </section>
      </div>

      {/* Footer */}
      <Suspense
        fallback={
          <div className="text-center py-6 text-primary font-semibold">
            Loading footer...
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  );
};

export default About;
