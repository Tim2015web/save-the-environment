import { Award } from './award';
import styles from './awardsSection.module.css';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../../assets/awards', false, /\.(svg)$/));

export function AwardsSection() {
  return (
    <div className={styles.awardsSection}>
      <div className='container'>

        <h2>Awards & Recognitions</h2>

        <div className={styles.awardsWrap}>
          <Award image={images[0]} date='2021' name='Best NGO Award' city='Berlin, Germany' />
          <Award image={images[1]} date='2018' name='Global Award' city='New York, USA' />
          <Award image={images[2]} date='2014' name='Foresto Award' city='New Delhi, India' />
          <Award image={images[3]} date='2010' name='Earth Saver Award' city='Vienna, Austria' />
        </div>

      </div>
    </div>
  );
}