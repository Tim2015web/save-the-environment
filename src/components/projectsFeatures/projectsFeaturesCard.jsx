import styles from './projectsFeaturesCard.module.css';

export function ProjectsFeaturesCard(props) {
  return (
    <div className={styles.projectsFeaturesCard}>
      <img className={styles.img} src={props.image} alt='Project feature' />
      <span className={styles.name}>{props.name}</span>
      <div className={styles.empty}></div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}