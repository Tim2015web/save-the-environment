import { useEffect } from "react";
import { Sep23 } from "../articles/events/sep23";
import { Sep25 } from "../articles/events/sep25";
import { EventPageHero } from "../components/eventPageHero";
import { OurEvents } from "../components/ourEvents";
import { useLocation } from "react-router-dom";

export function EventPage() {

  const currentPath = useLocation().pathname;
  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);
  let currentComponent;
  let currentName;

  switch (currentPath) {
    case '/event-page/september-23':
      currentComponent = <Sep23 />;
      currentName = 'Say no to plastic usage and save the planet';
      break;
    case '/event-page/september-25':
      currentComponent = <Sep25 />;
      currentName = 'Weekly cleaning program';
      break;
    default:
      currentComponent = <Sep23 />;
      currentName = 'Say no to plastic usage and save the planet';
      break;
  }

  return (
    <>
      <EventPageHero name={currentName} />
      {currentComponent}
      <OurEvents />
    </>
  );
}