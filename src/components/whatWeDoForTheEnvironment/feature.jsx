import styles from './feature.module.css';

export function Feature(props) {
  return (
    <div className={styles.feature}>
      <img className={styles.img} src={props.icon} alt='Icon' />
      <span className={styles.name}>{props.name}</span>
      <div className={styles.empty}></div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}