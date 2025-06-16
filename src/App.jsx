import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import GalleryPage from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';  // scroll top component import karna na bhoolen

function App() {
  return (
    <div className="w-full min-h-screen">
      <ScrollToTop />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
