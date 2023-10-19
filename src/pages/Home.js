import { Hero } from '../components/hero';
import { KnowAboutUs } from '../components/knowAboutUs';

import './home.css';

export function Home() {

  return (
    <div className='home'>

      <Hero />
      <KnowAboutUs />

    </div>
  );
}