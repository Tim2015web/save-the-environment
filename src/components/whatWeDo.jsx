import styles from './whatWeDo.module.css';

import image from '../assets/whatwedo_image.webp';
import icon1 from '../assets/whatwedo_icon1.svg';
import icon2 from '../assets/whatwedo_icon2.svg';
import icon3 from '../assets/whatwedo_icon3.svg';
import icon4 from '../assets/whatwedo_icon4.svg';

export function WhatWeDo() {
  return (
    <div className={styles.whatWeDo}>
      <div className="container">

        <div className={styles.topRow}>

          <div>
            <hr />
          </div>
          
          <div>
            <span>What we do</span>
          </div>

        </div>

        <div className={styles.mainRow}>

          <div className={styles.textWrap}>

            <div className={styles.titleWrap}>
              <h2>We care for earth, care for the coming birth</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div className={styles.cardWrap}>

              <div className={styles.card}>
                <img src={icon1} alt="Icon" />
                <span>Build Healthy Cities</span>
                <div></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>

              <div className={styles.card}>
                <img src={icon2} alt="Icon" />
                <span>Tree Plantation</span>
                <div></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>

              <div className={styles.card}>
                <img src={icon3} alt="Icon" />
                <span>Protect Land and Water</span>
                <div></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>

              <div className={styles.card}>
                <img src={icon4} alt="Icon" />
                <span>Animal Safety</span>
                <div></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
              </div>

            </div>

          </div>

          <div className={styles.imgWrap}>

            <img src={image} alt='The guy strokes the dog' />

          </div>

        </div>

      </div>
    </div>
  );
}