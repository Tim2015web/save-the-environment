import { AboutUsHero } from "../components/aboutUsHero";
import { AwardsSection } from "../components/awardsSection/awardsSection";
import { OurJourneySection } from "../components/ourJourneySection";

export function AboutUs() {
  return (
    <>
      <AboutUsHero />
      <AwardsSection />
      <OurJourneySection />

      <div style={{ backgroundColor: 'brown' }}>.</div>
    </>
  );
}