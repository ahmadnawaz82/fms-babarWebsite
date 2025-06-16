import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.jpg";

const images = [t1, t2, t3, t4, t5, t6];

// Repeat array N times
const repeatImages = (arr, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result = result.concat(arr);
  }
  return result;
};

const InfiniteImageScroller = () => {
  // Repeat images 4 times for wider screens (adjust as needed)
  const repeatedImages = repeatImages(images, 4);

  return (
    <div className="relative overflow-hidden h-40 flex items-center mt-1 w-full max-w-full">
      {/* Left blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white via-white/90 to-transparent z-20"
      />
      {/* Right blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white via-white/90 to-transparent z-20"
      />

      {/* Scrolling container */}
      <div
        className="flex will-change-transform animate-scrollLeft"
        style={{ animationDuration: "20s", minWidth: "100%" }}
      >
        {repeatedImages.map((src, i) => (
          <div key={i} className="flex-shrink-0 px-2">
            <img
              src={src}
              alt={`logo-${(i % images.length) + 1}`}
              draggable={false}
              className="w-24 xs:w-20 object-contain select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollLeft {
          animation-name: scrollLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default InfiniteImageScroller;
