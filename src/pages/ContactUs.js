import { useEffect } from "react";
import { ContactUsHero } from "../components/contactUsHero";

export function ContactUs() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <ContactUsHero />
    </>
  );
}