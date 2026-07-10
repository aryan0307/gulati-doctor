import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactBox from './components/FloatingContactBox';
import Lenis from 'lenis';

// Page Imports
import Home from './pages/Home';
import AboutDoctor from './pages/AboutDoctor';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PatientGuidelines from './pages/PatientGuidelines';
import WarrantiesGuarantees from './pages/WarrantiesGuarantees';

// Dynamic Treatment Page
import TreatmentPage from './pages/TreatmentPage';
import NotFound from './pages/NotFound';

// Smooth scrolling with Lenis
function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router basename="/gulatiphysiotherapy">
      <SmoothScroll />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-text-main font-sans">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about/dr-vinay-gulati" element={<AboutDoctor />} />
            <Route path="/about-doctor" element={<AboutDoctor />} />
            <Route path="/about/team" element={<OurTeam />} />
            <Route path="/our-team" element={<OurTeam />} />
            
            {/* General Routes */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient-guidelines" element={<PatientGuidelines />} />
            <Route path="/warranties-and-guarantees" element={<WarrantiesGuarantees />} />
            <Route path="/warranties-guarantees" element={<WarrantiesGuarantees />} />
            
            {/* Dynamic Treatment Route */}
            <Route path="/treatments/:slug" element={<TreatmentPage />} />

            {/* 404 Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
      <FloatingContactBox />
    </Router>
  );
}
