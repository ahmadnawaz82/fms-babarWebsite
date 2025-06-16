// Import images
import image1 from "../assets/Store/image (1).jpg";
import image2 from "../assets/Store/image (2).jpg";
import image3 from "../assets/Store/image (3).jpg";
import image4 from "../assets/Store/image (4).jpg";
import image5 from "../assets/Store/image (5).jpg";
import image6 from "../assets/Store/image (6).jpg";
import image7 from "../assets/Store/image (7).jpg";
import image8 from "../assets/Store/image (8).jpg";
import image9 from "../assets/Store/image (9).jpg";
import image10 from "../assets/Store/image (10).jpg";
import image11 from "../assets/Store/image (11).jpg";
import image12 from "../assets/Store/image (12).jpg";
import image13 from "../assets/Store/image (13).jpg";
import image14 from "../assets/Store/image (14).jpg";
import image15 from "../assets/Store/image (15).jpg";
import image16 from "../assets/Store/image (16).jpg";
import image17 from "../assets/Store/image (17).jpg";
import image18 from "../assets/Store/image (18).jpg";
import image19 from "../assets/Store/image (19).jpg";
import image20 from "../assets/Store/image (20).jpg";
import image21 from "../assets/Store/image (21).jpg";
import image22 from "../assets/Store/image (22).jpg";
import image23 from "../assets/Store/image (23).jpg";
import image24 from "../assets/Store/image (24).jpg";
import image25 from "../assets/Store/image (25).jpg";
import image26 from "../assets/Store/image (26).jpg";
import image27 from "../assets/Store/image (27).jpg";
import image28 from "../assets/Store/image (28).jpg";
import image29 from "../assets/Store/image (29).jpg";
import image30 from "../assets/Store/image (30).jpg";
import image31 from "../assets/Store/image (31).jpg";
import image32 from "../assets/Store/image (32).jpg";
import image33 from "../assets/Store/image (33).jpg";
import image34 from "../assets/Store/image (34).jpg";
import image35 from "../assets/Store/image (35).jpg";
import image36 from "../assets/Store/image (36).jpg";
import image37 from "../assets/Store/image (37).jpg";
import image38 from "../assets/Store/image (38).jpg";
import image39 from "../assets/Store/image (39).jpg";
import image40 from "../assets/Store/image (40).jpg";

// Import videos
import video1 from "../assets/Store/video (1).mp4";
import video2 from "../assets/Store/video (2).mp4";
import video3 from "../assets/Store/video (3).mp4";
import video4 from "../assets/Store/video (4).mp4";
import video5 from "../assets/Store/video (5).mp4";
import video6 from "../assets/Store/video (6).mp4";
import video7 from "../assets/Store/video (7).mp4";
import video8 from "../assets/Store/video (8).mp4";
import video9 from "../assets/Store/video (9).mp4";
import video10 from "../assets/Store/video (10).mp4";
import video11 from "../assets/Store/video (11).mp4";
import video12 from "../assets/Store/video (12).mp4";
import video13 from "../assets/Store/video (13).mp4";
import video14 from "../assets/Store/video (14).mp4";
import video15 from "../assets/Store/video (15).mp4";
import video16 from "../assets/Store/video (16).mp4";
import video17 from "../assets/Store/video (17).mp4";
import video18 from "../assets/Store/video (18).mp4";
import video19 from "../assets/Store/video (19).mp4";
import video20 from "../assets/Store/video (20).mp4";
import video21 from "../assets/Store/video (21).mp4";
import video22 from "../assets/Store/video (22).mp4";
import video23 from "../assets/Store/video (23).mp4";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const images = [
  { type: "image", src: image1, alt: "Image 1" },
  { type: "image", src: image2, alt: "Image 2" },
  { type: "image", src: image3, alt: "Image 3" },
  { type: "image", src: image4, alt: "Image 4" },
  { type: "image", src: image5, alt: "Image 5" },
  { type: "image", src: image6, alt: "Image 6" },
  { type: "image", src: image7, alt: "Image 7" },
  { type: "image", src: image8, alt: "Image 8" },
  { type: "image", src: image9, alt: "Image 9" },
  { type: "image", src: image10, alt: "Image 10" },
  { type: "image", src: image11, alt: "Image 11" },
  { type: "image", src: image12, alt: "Image 12" },
  { type: "image", src: image13, alt: "Image 13" },
  { type: "image", src: image14, alt: "Image 14" },
  { type: "image", src: image15, alt: "Image 15" },
  { type: "image", src: image16, alt: "Image 16" },
  { type: "image", src: image17, alt: "Image 17" },
  { type: "image", src: image18, alt: "Image 18" },
  { type: "image", src: image19, alt: "Image 19" },
  { type: "image", src: image20, alt: "Image 20" },
  { type: "image", src: image21, alt: "Image 21" },
  { type: "image", src: image22, alt: "Image 22" },
  { type: "image", src: image23, alt: "Image 23" },
  { type: "image", src: image24, alt: "Image 24" },
  { type: "image", src: image25, alt: "Image 25" },
  { type: "image", src: image26, alt: "Image 26" },
  { type: "image", src: image27, alt: "Image 27" },
  { type: "image", src: image28, alt: "Image 28" },
  { type: "image", src: image29, alt: "Image 29" },
  { type: "image", src: image30, alt: "Image 30" },
  { type: "image", src: image31, alt: "Image 31" },
  { type: "image", src: image32, alt: "Image 32" },
  { type: "image", src: image33, alt: "Image 33" },
  { type: "image", src: image34, alt: "Image 34" },
  { type: "image", src: image35, alt: "Image 35" },
  { type: "image", src: image36, alt: "Image 36" },
  { type: "image", src: image37, alt: "Image 37" },
  { type: "image", src: image38, alt: "Image 38" },
  { type: "image", src: image39, alt: "Image 39" },
  { type: "image", src: image40, alt: "Image 40" },
];

const videos = [
  { type: "video", src: video1, alt: "Video 1" },
  { type: "video", src: video2, alt: "Video 2" },
  { type: "video", src: video3, alt: "Video 3" },
  { type: "video", src: video4, alt: "Video 4" },
  { type: "video", src: video5, alt: "Video 5" },
  { type: "video", src: video6, alt: "Video 6" },
  { type: "video", src: video7, alt: "Video 7" },
  { type: "video", src: video8, alt: "Video 8" },
  { type: "video", src: video9, alt: "Video 9" },
  { type: "video", src: video10, alt: "Video 10" },
  { type: "video", src: video11, alt: "Video 11" },
  { type: "video", src: video12, alt: "Video 12" },
  { type: "video", src: video13, alt: "Video 13" },
  { type: "video", src: video14, alt: "Video 14" },
  { type: "video", src: video15, alt: "Video 15" },
  { type: "video", src: video16, alt: "Video 16" },
  { type: "video", src: video17, alt: "Video 17" },
  { type: "video", src: video18, alt: "Video 18" },
  { type: "video", src: video19, alt: "Video 19" },
  { type: "video", src: video20, alt: "Video 20" },
  { type: "video", src: video21, alt: "Video 21" },
  { type: "video", src: video22, alt: "Video 22" },
  { type: "video", src: video23, alt: "Video 23" },
];

const allMedia = [...images, ...videos];

// ... (keep all your imports and media arrays as is)

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const filteredMedia =
    filter === "all" ? allMedia : filter === "images" ? images : videos;

  return (
    <>
    <Navbar/>
    <div
      style={{
        minHeight: "100vh",
        padding: "24px 12px",
        background: "linear-gradient(135deg, #13224A 0%, #D91E24 100%)",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Media Gallery
      </h1>

      {/* Toggle Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {["all", "images", "videos"].map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            style={{
              padding: "10px 24px",
              borderRadius: 25,
              border: "2px solid white",
              backgroundColor: filter === key ? "white" : "transparent",
              color: filter === key ? "#D91E24" : "white",
              fontWeight: "600",
              cursor: "pointer",
              minWidth: 100,
              transition: "all 0.3s",
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {filteredMedia.map((item, index) => (
          <div
            key={index}
            onClick={() => setModal(item)}
            style={{
              cursor: "pointer",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              transition: "transform 0.2s",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                muted
                preload="metadata"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal Viewer */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              backgroundColor: "#000",
            }}
          >
            {modal.type === "image" ? (
              <img
                src={modal.src}
                alt={modal.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <video
                src={modal.src}
                controls
                autoPlay
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}