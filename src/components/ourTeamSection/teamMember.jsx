import styles from './teamMember.module.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export function TeamMember(props) {
  return (
    <div className={styles.teamMember}>
      <img className={styles.img} src={props.image} alt='The team member' />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.position}>{props.position}</p>

      <ul className={styles.nav}>
        <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaFacebook className={styles.icon} /></a></li>
        <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaTwitter className={styles.icon} /></a></li>
        <li><a href="https://www.google.com/search?q=Facebook" target="_blank" rel="noreferrer"><FaLinkedin className={styles.icon} size={20} /></a></li>
      </ul>
    </div>
  );
}