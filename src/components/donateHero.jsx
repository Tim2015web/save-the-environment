import styles from './donateHero.module.css';

import image from '../assets/donateHero_image.webp';

export function DonateHero() {
  return (
    <div className={styles.donateHero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <div className={styles.textWrap__header}>
              <div><hr /></div>
              <div><span>Donate</span></div>
            </div>

            <div className={styles.textWrap__main}>
              <h1>Making a donation for Nature.</h1>
              <p>
                When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.
              </p>

              <a className={styles.btnLink} href="https://www.google.com/search?q=куда перечислить деньги для окружающей среды" target="_blank" rel="noreferrer">Donate now</a>
            </div>

          </div>

          <div className={styles.imageWrap}>
            <img src={image} alt='Donate box' />
          </div>

        </div>
      </div>
    </div>
  );
}