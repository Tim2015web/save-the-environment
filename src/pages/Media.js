import { useEffect } from "react";
import { MediaHero } from "../components/mediaHero/mediaHero";
import { BlogSection } from '../components/blogSection';
import { OurEvents } from '../components/ourEvents';

export function Media() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <MediaHero />
      <div style={{ marginTop: '100px' }}>
        <BlogSection />
      </div>
      <OurEvents />
    </>
  );
}