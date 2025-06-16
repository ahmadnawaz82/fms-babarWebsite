import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import babarazamimage from '../assets/babarazam.jfif';
import babarinterview from '../assets/babaarinterview.mp4';
import shoaibimage from '../assets/shoaib akhtar.jpeg';
import abberaimage from '../assets/abbeer maryam.png';

const testimonials = [
  {
    name: "Babar Azam",
    quote:
      "Where passion is coached, commitment is built — and futures are shaped.",
    role: "Pakistani National Cricketer",
    image: babarazamimage,
    videoUrl: babarinterview,
  },
  {
    name: "Abber Maryam",
    quote:
      "As a Saudi national player and now a trainer at WICA, I’ve seen firsthand how this academy empowers athletes to break barriers and rise with purpose.",
    role: "Saudi National Cricketer & WICA Trainer",
    image: abberaimage,
  },
  {
    name: "Shoaib Akhtar",
    quote:
      "Only the toughest rise — and WICA trains you to rise beyond what you thought possible.",
    role: "Former Pakistani Fast Bowler",
    image: shoaibimage,
  },
];

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-[#13224A] text-white py-24 px-4 sm:px-6 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-white tracking-wide"
      >
        WICA doesn’t just train players — it transforms them.
      </motion.h2>

      <div className="grid gap-10 max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25 }}
            className="relative bg-white text-[#13224A] rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-[0_0_30px_rgba(217,30,36,0.4)] transition duration-500 group overflow-hidden border-t-4 border-[#D91E24]"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#D91E24]/20 rounded-full blur-2xl opacity-60"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#D91E24] object-cover shadow-lg hover:scale-105 transition"
                />
                {t.videoUrl && (
                  <motion.button
                    onClick={() => setSelectedVideo(t.videoUrl)}
                    className="absolute bottom-0 right-0 bg-[#D91E24] text-white p-3 rounded-full shadow-lg"
                    aria-label="Watch Interview"
                    initial={{ scale: 1, boxShadow: "0 0 0px rgba(217,30,36,0)" }}
                    animate={{
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        "0 0 0px rgba(217,30,36,0)",
                        "0 0 12px rgba(217,30,36,0.6)",
                        "0 0 0px rgba(217,30,36,0)",
                      ],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.25,
                      backgroundColor: "#b2161c",
                      boxShadow: "0 0 20px rgba(217,30,36,0.9)",
                      rotate: 0,
                    }}
                  >
                    <FaPlayCircle className="text-2xl" />
                  </motion.button>

                )}
              </div>
              <p className="text-base sm:text-lg italic leading-relaxed mb-5 max-w-xs">“{t.quote}”</p>
              <div>
                <p className="font-extrabold text-[#D91E24] text-lg sm:text-xl mb-1">{t.name}</p>
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl sm:max-w-4xl aspect-video">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-xl"
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 bg-white text-[#D91E24] p-2 rounded-full hover:bg-gray-100 shadow"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
