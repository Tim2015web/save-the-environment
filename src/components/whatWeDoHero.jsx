import styles from './whatWeDoHero.module.css';

import image from '../assets/whatWeDoHero_image.webp';

export function WhatWeDoHero() {
  return (
    <div className={styles.whatWeDoHero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <div className={styles.element}>
              <hr />
            </div>

            <div className={styles.content}>
              <span>What we do</span>
              <h1>We are working worldwide</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>

          </div>

          <div className={styles.imgWrap}>
            <img src={image} alt='Peoples' />
          </div>

        </div>
      </div>
    </div>
  );
}