import styles from './award.module.css';

export function Award(props) {
  return (
    <div className={styles.award}>
      <img className={styles.img} src={props.image} alt='Award' />
      <p className={styles.date}>{props.date}</p>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.city}>{props.city}</p>
    </div>
  );
}