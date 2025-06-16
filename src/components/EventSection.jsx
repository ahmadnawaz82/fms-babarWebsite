import React from 'react';
import GameCard from './EventCards';
import e1 from '../assets/e1.jpg';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.jpg';
import e4 from '../assets/e4.jpg';
import e5 from '../assets/e5.jpg';
import e6 from '../assets/e6.jpg';
import e7 from '../assets/e7.jpg';
import e8 from '../assets/e8.jpg';

import { motion } from 'framer-motion';

const gamesData = [
  {
    image: e1,
    title: 'Welcome To WICA',
    price: 0,
    genre: 'Opening Ceremony',
    players: 'All Members',
    mode: 'On-Site',
    dateTime: 'Sat, Feb 1',
    location: 'WICA International Cricket Academy',
  },
  {
    image: e2,
    title: 'WICA Dubai Cricket Tour 2019',
    price: 0,
    genre: 'International Tour',
    players: 'Selected Squad',
    mode: 'UAE',
    dateTime: 'Wed, Dec 26, 2018',
    location: 'MS Dhoni Cricket Academy UAE',
  },
  {
    image: e3,
    title: 'PSL Lahore Qalanders Trials For Emerging Players',
    price: 0,
    genre: 'Talent Hunt',
    players: 'Open Trials',
    mode: 'In-Person',
    dateTime: 'Mon, Sep 4, 2017',
    location: 'Pindi Cricket Stadium',
  },
  {
    image: e4,
    title: 'WICA Batting Skill Development',
    price: 0,
    genre: 'Training Camp',
    players: 'U19 / Juniors',
    mode: 'On-Site',
    dateTime: 'Fri, Jun 16, 2017',
    location: 'WICA Ground',
  },
  {
    image: e5,
    title: 'WICA Will Be On Today',
    price: 0,
    genre: 'Academy Session',
    players: 'Registered Members',
    mode: 'On-Site',
    dateTime: 'Fri, Jun 2, 2017',
    location: 'WICA International Cricket Academy',
  },
  {
    image: e6,
    title: 'WICA will be on in Ramadan',
    price: 0,
    genre: 'Seasonal Training',
    players: 'All Players',
    mode: 'On-Site',
    dateTime: 'Fri, Jun 2, 2017',
    location: 'WICA International Cricket Academy',
  },
  {
    image: e7,
    title: 'Inspire & Be Inspired (Learn Through Fun)',
    price: 0,
    genre: 'Motivational',
    players: 'Open to Public',
    mode: 'Event Hall',
    dateTime: 'Sat, Apr 22, 2017',
    location: 'WICA Auditorium',
  },
  {
    image: e8,
    title: 'WICA Under 19 VS SCA Under 19',
    price: 0,
    genre: 'Match',
    players: 'U19 Teams',
    mode: 'On-Ground',
    dateTime: 'Sat, Apr 22, 2017',
    location: 'F-9 Cricket Ground Islamabad',
  },
];

const GamesSection = () => {
  return (
    <section className="py-10 px-10 bg-white">
      {/* Full width container with no horizontal padding */}
      <div className="w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration: 0.4,
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-4xl font-extrabold mb-8 text-center text-primary tracking-tight"
        >
          Upcoming Events
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid gap-6 w-full max-w-full"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          {gamesData.map((game, index) => (
            <GameCard
              key={index}
              image={game.image}
              title={game.title}
              price={game.price}
              genre={game.genre}
              players={game.players}
              mode={game.mode}
              dateTime={game.dateTime}
              location={game.location}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GamesSection;
