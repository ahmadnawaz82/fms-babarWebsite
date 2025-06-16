import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.jpg";
import i13 from "../assets/i13.jpg";
import i14 from "../assets/i14.jpg";
import i15 from "../assets/i15.jpg";
import i16 from "../assets/i16.jpg";

const allImages = [
  i1, i2, i3, i4, i5, i6, i7, i8, i9,
  i10, i11, i12, i13, i14, i15, i16,
];

const initialImages = allImages.slice(0, 9);

const ExploreMuseum = () => {
  const [expanded, setExpanded] = useState(false);
  const [fastRotateDone, setFastRotateDone] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center mt-6 mb-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Gallery</h2>
      </div>

      <div className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 py-12 flex flex-col items-center justify-center">
        {/* Initial Rotating Circle */}
        {!expanded && (
          <div className="relative w-full max-w-[600px] h-[520px] sm:h-[480px] xs:h-[440px]">
            <motion.div
              className="absolute inset-0 z-10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {initialImages.map((src, idx) => {
                const angle = (idx / initialImages.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 190;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`img-${idx + 1}`}
                    className="absolute rounded-xl object-cover shadow-md select-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: "110px",
                      height: "150px",
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${-(angle * (180 / Math.PI))}deg)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                );
              })}
            </motion.div>

            {/* Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                onClick={() => setExpanded(true)}
                className="px-6 py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Explore More Shots
              </button>
            </div>
          </div>
        )}

        {/* Fast Shrink Spin + Redirect */}
        {expanded && !fastRotateDone && (
          <motion.div
            className="relative w-full max-w-[440px] h-[440px] sm:h-[400px] xs:h-[360px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setFastRotateDone(true);
              setTimeout(() => navigate("/gallery"), 200); // navigate after a short pause
            }}
          >
            {initialImages.map((src, idx) => {
              const angle = (idx / initialImages.length) * 2 * Math.PI - Math.PI / 2;
              const shrinkFactor = 0.4;
              const radius = 190 * shrinkFactor;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`img-${idx + 1}`}
                  className="absolute rounded-xl object-cover shadow-md select-none"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "70px",
                    height: "90px",
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExploreMuseum;
