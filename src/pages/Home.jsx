import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import GameCard from "../components/GameCards";
import GamesSection from "../components/GamesSection";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <GamesSection />
            <Gallery/>
            <Footer />
        </>

    )
}
export default Home;