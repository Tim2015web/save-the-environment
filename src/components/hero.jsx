import { NavLink } from 'react-router-dom';
import styles from './hero.module.css';
import iconPlay from '../assets/icon_play.svg';

import { useState } from 'react'; // Импортируйте useState
import Modal from './videoModal';

// Статистические данные hero
const treesPlanted = 23800;
const donationsCollected = 5840;

// Запятая в числа
function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

export function Hero() {

  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState(''); // Создайте состояние для URL видео

  const handleVideoClick = (url) => {
    setVideoUrl(url); // Устанавливайте URL видео при клике
    setShowModal(true);
    document.documentElement.classList.add('no-scroll');
  };

  const closeModal = () => {
    setShowModal(false);
    document.documentElement.classList.remove('no-scroll');
  }

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <h1 className='homeHeading'>Save the environment today for a better tomorrow</h1>

          <div className={styles.btnRow}>
            <NavLink to="/what-we-do" className={styles.btnLink}>What we do</NavLink>
            <button onClick={() => handleVideoClick("https://www.youtube.com/embed/LXb3EKWsInQ?si=ECVflyzfUqMPBnW9")}>
              <img src={iconPlay} alt="Icon play video" />
              Play Video
            </button>
          </div>

          <div className={styles.statistics}>
            <div>{formatNumberWithCommas(treesPlanted)} trees planted</div>
            <div className={styles.line}></div>
            <div>{formatNumberWithCommas(donationsCollected)} donations collected</div>
          </div>

          {showModal && (<Modal message={videoUrl} onClose={closeModal} />)}

        </div>
      </div>
    </div>
  );
}