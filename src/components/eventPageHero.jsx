import styles from './eventPageHero.module.css';

import img1 from '../assets/eventPage_Icon1.svg';
import img2 from '../assets/eventPage_Icon2.svg';

export function EventPageHero(props) {
  return (
    <div className={styles.eventPageHero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <h1>{props.name}</h1>

          <div className={styles.contactWrap}>

            <div>
              <img src={img1} alt='Map' />
              <span>8 Brewery Drive, Hudson, NH 03051, USA</span>
            </div>
            <div>
              <img src={img2} alt='Calendar' />
              <span>September 3, 2021 8:30 AM</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}