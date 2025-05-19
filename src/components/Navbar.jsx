import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md text-gray-600 body-font ">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center max-w-full mx-auto justify-between">
        <a
          href="#"
          className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-2xl tracking-wide text-indigo-700">
            VISCA GAMES
          </span>
        </a>

        {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium">
          <a href="#" className="mr-5 hover:text-indigo-600">
            Events
          </a>
          <a href="#" className="mr-5 hover:text-indigo-600">
            Tournaments
          </a>
          <a href="#" className="mr-5 hover:text-indigo-600">
            Gallery
          </a>
          <a href="#" className="mr-5 hover:text-indigo-600">
            Contact
          </a>
        </nav> */}

        <button className="inline-flex items-center bg-indigo-600 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-sm mt-4 md:mt-0">
          Join Now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
