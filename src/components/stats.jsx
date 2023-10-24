import styles from './stats.module.css';
import image from '../assets/chart_image.webp';

export function Stats() {
  return (
    <div className={styles.stats}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>
            <h2>How we spend your donations and where it goes</h2>
            <p>
              We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.
            </p>

            <div className={styles.statsWrap}>

              <div className={styles.card}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#BEF3C0" />
                </svg>
                <span>40% planting trees</span>
              </div>

              <div className={styles.card}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#AC94F1" />
                </svg>
                <span>35% cleanliness program</span>
              </div>

              <div className={styles.card}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#FFF0CA" />
                </svg>
                <span>10% helping people</span>
              </div>

              <div className={styles.card}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#F9CF64" />
                </svg>
                <span>10% animal safety</span>
              </div>

              <div className={styles.card}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#F38FBF" />
                </svg>
                <span>5% feeding the poor</span>
              </div>

            </div>
          </div>

          <div className={styles.chartWrap}>
            <img src={image} alt="Chart" />
          </div>

        </div>
      </div>
    </div>
  );
}