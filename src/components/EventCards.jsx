import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const GameCard = ({
  image,
  title,
  price,
  genre,
  players,
  mode,
  dateTime,
  location,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-[1.03] flex flex-col overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Event Details */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Date & Time */}
        <div className="flex items-center text-xs text-gray-500 font-semibold mb-2 space-x-2">
          <FaCalendarAlt className="text-secondary" />
          <span>{dateTime || "Monday, September 4, 2017 at 9 AM – 12 PM"}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-primary cursor-pointer transition-colors duration-300">
          {title || "PSL Lahore Qalanders Trials For Emerging Players"}
        </h3>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-2">
          <FaMapMarkerAlt className="text-secondary" />
          <span>{location || "Pindi Cricket Stadium"}</span>
        </div>

        {/* Optional button, uncomment if needed */}
        {/* <a
          href="#"
          className="mt-auto inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
        >
          Read More
        </a> */}
      </div>
    </div>
  );
};

export default GameCard;
