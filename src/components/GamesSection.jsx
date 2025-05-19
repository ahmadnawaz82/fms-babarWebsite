import React from 'react';
import GameCard from './GameCards';

const gamesData = [
  {
    image: 'https://img.freepik.com/free-psd/game-night-template-design_23-2151052220.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Valorant Showdown',
    price: 25,
    genre: 'FPS',
    players: '5v5',
    mode: 'Online',
  },
  {
    image: 'https://img.freepik.com/free-vector/flat-twitch-background-casino-night-gambling_23-2150325106.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'FIFA Ultimate Cup',
    price: 15,
    genre: 'Sports',
    players: '1v1',
    mode: 'Online / On-site',
  },
  {
    image: 'https://img.freepik.com/free-vector/gradient-casino-night-facebook-post_52683-111121.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Tekken Masters',
    price: 20,
    genre: 'Fighting',
    players: '1v1',
    mode: 'On-site',
  },
  {
    image: 'https://img.freepik.com/free-vector/casino-banner-with-poker-cards-money_107791-13654.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'PUBG Squad Clash',
    price: 10,
    genre: 'Battle Royale',
    players: '4 Player Squad',
    mode: 'Mobile',
  },
  {
    image: 'https://img.freepik.com/free-vector/flat-social-media-post-template-casino-night-gambling_23-2150325122.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Fortnite Frenzy',
    price: 18,
    genre: 'Battle Royale',
    players: 'Solo / Duo',
    mode: 'Online',
  },
  {
    image: 'https://img.freepik.com/free-psd/games-banner-template-theme_23-2148635036.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'CS:GO Legends',
    price: 30,
    genre: 'FPS',
    players: '5v5',
    mode: 'On-site',
  },
  {
    image: 'https://img.freepik.com/free-vector/abstract-gamer-youtube-thumbnail_23-2148912295.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Minecraft Builders Cup',
    price: 12,
    genre: 'Sandbox',
    players: 'Solo',
    mode: 'Online',
  },
  {
    image: 'https://img.freepik.com/free-vector/baseball-banner-template-design_23-2151352262.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Dota 2 Tournament',
    price: 22,
    genre: 'MOBA',
    players: '5v5',
    mode: 'Online',
  },
  {
    image: 'https://img.freepik.com/free-vector/cricket-banner-set_1284-6364.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'Mobile Legends Clash',
    price: 10,
    genre: 'MOBA',
    players: '5v5',
    mode: 'Mobile',
  },
  {
    image: 'https://img.freepik.com/free-vector/sport-event-cancelled-banners_23-2148571955.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
    title: 'COD Mobile Warfare',
    price: 14,
    genre: 'FPS',
    players: '5v5 / Battle Royale',
    mode: 'Mobile',
  },
  {
  image: 'https://img.freepik.com/free-photo/company-young-people-playing-board-game_158595-4900.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
  title: 'Valorant Strike',
  price: 20,
  genre: 'Tactical Shooter',
  players: '5v5',
  mode: 'PC',
},
{
  image: 'https://img.freepik.com/premium-photo/3d-render-low-poly-graphic-resources-sustainable-development-goals-biodiversity-growing-economy-ecology_767466-7189.jpg?uid=R181920752&ga=GA1.1.321656213.1740033437&semt=ais_hybrid&w=740',
  title: 'Mystic Quest',
  price: 18,
  genre: 'RPG',
  players: 'Single Player',
  mode: 'Console',
}

];

const GamesSection = () => {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Upcoming Game Battles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {gamesData.map((game, index) => (
            <GameCard
              key={index}
              image={game.image}
              title={game.title}
              price={game.price}
              genre={game.genre}
              players={game.players}
              mode={game.mode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
