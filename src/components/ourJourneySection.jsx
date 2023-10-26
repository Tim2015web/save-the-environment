import styles from './ourJourneySection.module.css';

import image from '../assets/ourJourneySection_image.webp';

export function OurJourneySection() {
  return (
    <div className={styles.ourJourneySection}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <span>OUR JOURNEY </span>
            <h2>How we raised 34M</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
            </p>

            <div className={styles.statsWrap}>

              <div className={styles.stat}>
                <span>34M+</span>
                <p>Donation Received</p>
              </div>

              <div className={styles.stat}>
                <span>400+</span>
                <p>Volunters</p>
              </div>

              <div className={styles.stat}>
                <span>40K+</span>
                <p>Trees planted</p>
              </div>

            </div>
          </div>

          <div className={styles.imgWrap}>
            <img src={image} alt='Our journey' />
          </div>

        </div>
      </div>
    </div>
  );
}