import styles from './ourEvents.module.css';
import icon from '../assets/ourEvents_icon.svg';
import { NavLink } from 'react-router-dom';

export function OurEvents() {
  return (
    <div className={styles.ourEvents}>
      <div className='container'>

        <div className={styles.header}>
          <span>Our Events</span>
          <hr />
        </div>

        <div className={styles.main}>

          <NavLink to="/event-page/september-23" className={styles.card}>
            <div className={styles.dateWrap}>
              <p>23</p>
              <p>SEP</p>
            </div>

            <div className={styles.eventWrap}>

              <div>
                <span>Next Events</span>
                <hr />
              </div>

              <h3>Say no to plastic usage and save the planet</h3>

            </div>

            <div className={styles.imgWrap}>
              <img src={icon} alt='Arrow left' />
            </div>
          </NavLink>

          <NavLink to="/event-page/september-25" className={styles.card}>
            <div className={styles.dateWrap}>
              <p>25</p>
              <p>SEP</p>
            </div>

            <div className={styles.eventWrap}>

              <div>
                <span>Next Events</span>
                <hr />
              </div>

              <h3>Weekly cleaning program</h3>

            </div>

            <div className={styles.imgWrap}>
              <img src={icon} alt='Arrow left' />
            </div>
          </NavLink>
          
        </div>

      </div>
    </div>
  );
}