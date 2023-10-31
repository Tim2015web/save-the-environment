import 'normalize.css';
import './App.css';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { WhatWeDo } from './pages/WhatWeDo';
import { Media } from './pages/Media';
import { ContactUs } from './pages/ContactUs';

import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Donation } from './pages/Donation';
import { ProjectPage } from './pages/ProjectPage';
import { BlogPage } from './pages/BlogPage';
import { EventPage } from './pages/EventPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donation" element={<Donation />} />

        <Route path="/project-page/*" element={<ProjectPage />} />
        <Route path="/blog-page/*" element={<BlogPage />} />
        <Route path="/event-page/*" element={<EventPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;