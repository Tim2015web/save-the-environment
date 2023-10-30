import { useEffect } from "react";
import { ContactUsHero } from "../components/contactUsHero";
import { ContactUsSection } from "../components/contactUsSection";
import { Map } from "../components/map";

export function ContactUs() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <ContactUsHero />
      <ContactUsSection />
      <Map />
    </>
  );
}