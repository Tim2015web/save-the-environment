import styles from './blogSection.module.css';
import { NavLink } from 'react-router-dom';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../assets/blogSection', false, /\.(webp)$/));

export function BlogSection() {

  return (
    <div className={styles.blogSection}>
      <div className='container'>

        <div className={styles.header}>
          <span>Read Our News</span>
          <hr />
        </div>

        <div className={styles.main}>

          <div className={styles.card}>
            <img src={images[0]} alt='People at the field' />
            <NavLink to="/blog-post">
              Don't destroy greenery and don't spoil scenery
            </NavLink>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>

          <div className={styles.card}>
            <img src={images[1]} alt='Forest' />
            <NavLink to="/blog-post">
              Is climate change happening faster than expected?
            </NavLink>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>

          <div className={styles.card}>
            <img src={images[2]} alt='Field' />
            <NavLink to="/blog-post">
              Top 10 facts about wind farms you didn't know
            </NavLink>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>

          <div className={styles.card}>
            <img src={images[3]} alt='Can of water' />
            <NavLink to="/blog-post">
              Our goal is to make water available for everyone
            </NavLink>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}