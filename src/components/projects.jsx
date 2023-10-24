import { NavLink } from 'react-router-dom';
import styles from './projects.module.css';

export function Projects() {
  return (
    <div className={styles.projects}>
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