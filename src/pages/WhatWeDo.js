import { useEffect } from "react";
import { WhatWeDoHero } from "../components/whatWeDoHero";
import { WhatWeDoForTheEnvironment } from "../components/whatWeDoForTheEnvironment/whatWeDoForTheEnvironment";
import { Projects } from '../components/projects';
import { Cta } from "../components/cta";
import { BlogSection } from '../components/blogSection';
import { OurEvents } from '../components/ourEvents';

export function WhatWeDo() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <WhatWeDoHero />
      <WhatWeDoForTheEnvironment />
      <Projects />
      <Cta />
      <BlogSection />
      <OurEvents />
    </>
  );
}