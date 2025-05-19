// src/components/GameCard.jsx
import React from 'react';

const GameCard = ({ image, title, price, genre, players, mode }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 ">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 italic">{genre}</p>

        <p className="text-purple-700 font-bold text-lg mb-3">${price}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <span className="text-indigo-500">👥</span> Players: <span className="font-medium">{players}</span>
          </p>
          <p>
            <span className="text-indigo-500">🎮</span> Mode: <span className="font-medium">{mode}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

