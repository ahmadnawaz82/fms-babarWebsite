import React from 'react';
import heroBg from '../assets/herobg.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[95vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-primary z-10 opacity-85" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest text-gray-300 mb-4 animate-fadeIn">
          International Cricket Academy
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 max-w-4xl drop-shadow-lg animate-fadeInUp tracking-tight">
          <span className="block">Build Grit.</span>
          <span className="block text-secondary">Own the Field.</span>
        </h1>

        <p className="text-md md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fadeIn delay-150">
          Train under world-class coaches. Compete globally. Become the athlete you were born to be — only at WICA.
        </p>

        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-100 animate-pulse"></div>
          <a
            href="#join"
            className="relative animate-bounce  inline-block  rounded-full px-10 py-3 text-white font-semibold text-lg uppercase tracking-wide border-2 border-white hover:bg-secondary hover:text-white transition duration-300 ease-in-out shadow-lg"
          >
            Join the Academy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
