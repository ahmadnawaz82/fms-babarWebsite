import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import GamesSection from "../components/EventSection";
import InfiniteImageScroller from "../components/InfiniteImageScroller";
import ExploreMuseum from "../components/ImageGallery";
import ContactUs from "../components/Contactus";
import Testimonials from "../components/Testimonials";

const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <InfiniteImageScroller />
      <div id="events">
        <GamesSection />
      </div>
      <div id="gallery">
        <ExploreMuseum />
      </div>
      <Testimonials/>
      <div id="contactus">
        <ContactUs />
      </div>
      <div id="footer">
        <Suspense fallback={<div className="text-center py-6">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
