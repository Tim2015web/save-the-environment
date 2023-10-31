import { useEffect } from "react";
import { ProjectsSecondPage } from "../articles/projects/secondPage";
import { ProjectsFeatures } from "../components/projectsFeatures/projectsFeatures";
import { Projects } from "../components/projects";
import { Cta } from "../components/cta";
import { useLocation } from "react-router-dom";
import { ProjectsFirstPage } from "../articles/projects/firstPage";
import { ProjectsThirdPage } from "../articles/projects/thirdPage";

export function ProjectPage() {

  const currentPath = useLocation().pathname;
  useEffect(() => { window.scrollTo(0, 0); }, [currentPath]);
  let currentComponent;

  switch (currentPath) {
    case '/project-page/first-page':
      currentComponent = <ProjectsFirstPage />;
      break;
    case '/project-page/second-page':
      currentComponent = <ProjectsSecondPage />;
      break;
    case '/project-page/third-page':
      currentComponent = <ProjectsThirdPage />;
      break;
    default:
      currentComponent = <ProjectsSecondPage />;
  }

  return (
    <>
      {currentComponent}
      <ProjectsFeatures />
      <Projects />
      <Cta />
    </>
  );
}