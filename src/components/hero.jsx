import styles from './hero.module.css';
import iconPlay from '../assets/icon_play.svg';
import { NavLink } from 'react-router-dom';

// Статистические данные hero
const treesPlanted = 23800;
const donationsCollected = 5840;

// Запятая в числа
function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <h1 className='homeHeading'>Save the environment today for a better tomorrow</h1>

          <div className={styles.btnRow}>
            <NavLink to="/what-we-do" className={styles.btnLink}>What we do</NavLink>
            <button>
              <img src={iconPlay} alt="Иконка" class="icon" />
              Play Video
            </button>
          </div>

          <div className={styles.statistics}>
            <div>{formatNumberWithCommas(treesPlanted)} trees planted</div>
            <div className={styles.line}></div>
            <div>{formatNumberWithCommas(donationsCollected)} donations collected</div>
          </div>

        </div>
      </div>
    </div>
  );
}