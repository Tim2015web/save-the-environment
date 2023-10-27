import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './contactUsHero.module.css';

export function ContactUsHero() {
  return (
    <div className={styles.contactUsHero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <div className={styles.textWrap__header}>
              <div><hr /></div>
              <div><span>Contact us</span></div>
            </div>

            <div className={styles.textWrap__main}>
              <h1>We'd love to hear from you</h1>
              <p>
                Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
              </p>
            </div>

          </div>

          <div className={styles.contactWrap}>

            <div className={styles.infoRow}>
              <span>Let's talk! </span>
              <div>
                <p>+1 23 456 789</p>
                <p>hello@finsweet.com</p>
              </div>
            </div>

            <div className={styles.headRow}>
              <span>Headoffice</span>
              <p>8 Brewery Drive, Hudson, NH 03051USA</p>
            </div>

            <div className={styles.branchRow}>
              <span>Branch Office</span>
              <p>178 Marconi St., Venice, 34293 Italy</p>
            </div>

            <ul className={styles.nav}>
              <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaFacebook className={styles.icon} /></a></li>
              <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaTwitter className={styles.icon} /></a></li>
              <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon} size={20} /></a></li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}