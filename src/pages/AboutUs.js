import { AboutUsHero } from "../components/aboutUsHero";
import { AwardsSection } from "../components/awardsSection/awardsSection";
import { OurJourneySection } from "../components/ourJourneySection";
import { OurTeamSection } from "../components/ourTeamSection/ourTeamSection";
import { Cta } from '../components/cta';
import { BlogSection } from "../components/blogSection";
import { OurEvents } from "../components/ourEvents";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function AboutUs() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const location = useLocation();
  const ourTeamRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/about-us" && location.hash === "#our-team") {
      ourTeamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <AboutUsHero />
      <AwardsSection />
      <OurJourneySection />
      <div ref={ourTeamRef}>
        <OurTeamSection id="our-team" />
      </div>
      <Cta />
      <BlogSection />
      <OurEvents />
    </>
  );
}