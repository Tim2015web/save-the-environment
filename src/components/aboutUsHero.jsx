import styles from './aboutUsHero.module.css';

import image from '../assets/aboutUsHero_image.webp';
import iconPlay from '../assets/icon_play.svg';
import { useState } from 'react';
import Modal from './videoModal';

// Импорт логотипов
const importAll = (context) => context.keys().map(context);
const logos = importAll(require.context('../assets/logos/', false, /\.(svg)$/));

export function AboutUsHero() {

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
    <div className={styles.aboutUsHero}>

      <div className={styles.header}>
        <div className='container'>

          <div className={styles.header__topRow}>
            <div>
              <hr />
            </div>
            <div>
              <span>Know about us</span>
            </div>
          </div>

          <div className={styles.header__mainRow}>
            <div className={styles.header__titleCol}>
              <h1>We are a nonprofit team working worldwide</h1>
            </div>
            <div className={styles.header__textCol}>
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.main}>

        <div className={styles.main__bg}>
          <div></div>
          <div></div>
        </div>

        <div className='container'>

          <div className={styles.main__videoWrap}>
            <img src={image} alt="Icon play video" onClick={() => handleVideoClick("https://www.youtube.com/embed/tO01J-M3g0U?si=q2Oo-KPhPz9--ulD")} />
            <img src={iconPlay} alt="Icon play video" onClick={() => handleVideoClick("https://www.youtube.com/embed/tO01J-M3g0U?si=q2Oo-KPhPz9--ulD")} />
          </div>

        </div>

      </div>

      <div className={styles.footer}>
        <div className='container'>

          <div className={styles.footer__cardWrap}>

            <div className={styles.footer__card}>
              <span>our mission</span>
              <h3>We make the world we save our own environment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>

            <div className={styles.footer__card}>
              <span>our Vision</span>
              <h3>Plant more trees to make world air pollution free</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>

          </div>

          <div className={styles.bottomRow}>

            <div>
              <span>our Supporters</span>
            </div>

            <div>
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="Company logotype" />
              ))}
            </div>

          </div>

        </div>
      </div>

      {showModal && <Modal message={videoUrl} onClose={closeModal} />}
    </div>
  );
}