import { Hero } from '../components/hero';
import { KnowAboutUs } from '../components/knowAboutUs';
import { WhatWeDo } from '../components/whatWeDo';
import { Projects } from '../components/projects';
import { Stats } from '../components/stats';
import { Cta } from '../components/cta';
import { BlogSection } from '../components/blogSection';
import { OurEvents } from '../components/ourEvents';
import { useEffect } from 'react';

export function Home() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <Projects />
      <Stats />
      <Cta />
      <BlogSection />
      <OurEvents />
    </>
  );
}