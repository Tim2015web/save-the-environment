import { NavLink } from 'react-router-dom';
import styles from './projects.module.css';
import { useEffect } from 'react';
import { WhatWeDoForTheEnvironment } from './whatWeDoForTheEnvironment/whatWeDoForTheEnvironment';
import { WhatWeDoHero } from './whatWeDoHero';

export function Projects() {
  return (
    <div id='block' className={styles.projects}>
      <div className='container'>

        <div className={styles.topRow}>
          <div>
            <hr />
          </div>
          <div>
            <span>Projects we have done</span>
          </div>
        </div>

        <div className={styles.titleRow}>
          <h2>We are Creating sustainable society, for everyone and forever.</h2>
        </div>

        <div className={styles.projectRow}>

          <div className={styles.card}>
            <h3>Mission 40K: Tree plantation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <NavLink to="/project">See more</NavLink>
          </div>

          <div className={styles.card}>
            <h3>Weekly cleanliness program in city</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <NavLink to="/project">See more</NavLink>
          </div>

          <div className={styles.card}>
            <h3>Wildlife safety program 2021</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <NavLink to="/project">See more</NavLink>
          </div>

        </div>

      </div>
    </div>
  );
}
export function WhatWeDo() {

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <WhatWeDoHero />
      <WhatWeDoForTheEnvironment />
      <Projects />
    </>
  );
}
