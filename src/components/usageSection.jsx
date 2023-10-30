import styles from './usageSection.module.css';

export function UsageSection() {
  return (
    <div className={styles.usageSection}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.firstWrap}>
            <h2>How we use your donation</h2>
          </div>

          <div className={styles.secondWrap}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

          <div className={styles.thirdWrap}>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}