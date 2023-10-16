import 'normalize.css';
import './App.css';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { WhatWeDo } from './pages/WhatWeDo';
import { Media } from './pages/Media';
import { ContactUs } from './pages/ContactUs';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
