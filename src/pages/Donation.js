import { useEffect } from "react";
import { DonateHero } from "../components/donateHero";

import { Cta } from "../components/cta";
import { HowToSection } from "../components/howToSection";
import { UsageSection } from "../components/usageSection";

export function Donation() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <DonateHero />
      <HowToSection />
      <div className='container'>
        <hr style={{ border: 'none', height: '2px', backgroundColor: '#E5E5E5' }} />
      </div>
      <UsageSection />
      <Cta />
    </>
  );
}