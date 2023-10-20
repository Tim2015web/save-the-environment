import { Hero } from '../components/hero';
import { KnowAboutUs } from '../components/knowAboutUs';
import { WhatWeDo } from '../components/whatWeDo';

import './home.css';

export function Home() {

  return (
    <div className='home'>

      <Hero />
      <KnowAboutUs />
      <WhatWeDo />

    </div>
  );
}