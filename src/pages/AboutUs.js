import { AboutUsHero } from "../components/aboutUsHero";
import { AwardsSection } from "../components/awardsSection/awardsSection";
import { OurJourneySection } from "../components/ourJourneySection";
import { OurTeamSection } from "../components/ourTeamSection/ourTeamSection";
import { Cta } from '../components/cta';
import { BlogSection } from "../components/blogSection";
import { OurEvents } from "../components/ourEvents";
import { useEffect } from "react";

export function AboutUs() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <AboutUsHero />
      <AwardsSection />
      <OurJourneySection />
      <OurTeamSection />
      <Cta />
      <BlogSection />
      <OurEvents />
    </>
  );
}