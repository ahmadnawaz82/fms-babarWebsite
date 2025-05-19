import React from 'react';

const HeroSection = () => {
  return (
   <section className="text-gray-100 body-font bg-gradient-to-br from-indigo-900 via-purple-900 to-black min-h-60vh flex items-center">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

    <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold text-white animate-pulse">
        VISCA GAMES 2025
        <br className="hidden lg:inline-block" />
        <span className="text-purple-400 ">Coming Soon</span>
      </h1>
      <p className="mb-8 leading-relaxed text-2xl text-gray-300 animate-pulse">
        Be ready for the most electrifying gaming tournaments, challenges, and epic events. Powered by passion, built for gamers. 🎮🔥
      </p>
      <div className="flex justify-center mt-1.5">
        <button className="inline-flex text-white bg-purple-600 border-0 py-3 px-8 focus:outline-none hover:bg-purple-700 rounded-lg text-lg animate-bounce">
          Notify Me
        </button>
        <button className="ml-4  inline-flex text-purple-400 bg-gray-800 border border-purple-500 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded-lg text-lg animate-bounce">
          Learn More
        </button>
      </div>
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img
        className="object-cover object-center rounded-xl shadow-xl"
        alt="hero"
        src="https://img.freepik.com/free-vector/hand-drawn-gaming-logo-template_23-2150730869.jpg"
      />
    </div>

  </div>
</section>

  );
};

export default HeroSection;
