import { BlogSection } from '../components/blogSection';
import { Cta } from '../components/cta';
import { Hero } from '../components/hero';
import { KnowAboutUs } from '../components/knowAboutUs';
import { Projects } from '../components/projects';
import { Stats } from '../components/stats';
import { WhatWeDo } from '../components/whatWeDo';

import './home.css';

export function Home() {

  return (
    <div className='home'>

      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <Projects />
      <Stats />
      <Cta />
      <BlogSection />

      <div style={{ backgroundColor: 'brown' }}>.</div>

    </div>
  );
}