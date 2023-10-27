import styles from './knowAboutUs.module.css';
import iconPlay from '../assets/icon_play.svg';
import bg from '../assets/knowaboutus_bg.webp';
import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import Modal from './videoModal'; // Импортируйте компонент Modal

// Импорт логотипов
const importAll = (context) => context.keys().map(context);
const logos = importAll(require.context('../assets/logos/', false, /\.(svg)$/));

export function KnowAboutUs() {

  // Модальное окно
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoClick = (url) => {
    setVideoUrl(url);
    setShowModal(true);
    document.documentElement.classList.add('no-scroll');
  };

  const closeModal = () => {
    setShowModal(false);
    document.documentElement.classList.remove('no-scroll');
  }

  return (
    <div className={styles.knowAboutUs}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.topRow}>

            <div className={styles.textWrap}>

              <div className="">
                <hr />
              </div>

              <div className="">
                <span>Know About us</span>
                <h2>We help nature smile and survive everywhere</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                  <br></br><br></br>
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <NavLink className={styles.btnLink} to="/about-us">Learn more</NavLink>
              </div>

            </div>

            <div className={styles.videoWrap}>
              <img src={bg} alt="Icon play video" onClick={() => handleVideoClick("https://www.youtube.com/embed/d_xyD3nNQuo?si=fULHNN4f7opm-eWl")} />
              <img src={iconPlay} alt="Icon play video" onClick={() => handleVideoClick("https://www.youtube.com/embed/d_xyD3nNQuo?si=fULHNN4f7opm-eWl")} />
            </div>

          </div>

          <div className={styles.bottomRow}>
            <div className="">
              <span>our Supporters</span>
              <hr />
            </div>

            <div className="">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="Company logotype" />
              ))}
            </div>
          </div>

          {showModal && <Modal message={videoUrl} onClose={closeModal} />}

        </div>
      </div>
    </div>
  );
}