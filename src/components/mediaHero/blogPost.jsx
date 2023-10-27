import styles from './blogPost.module.css';

export function BlogPost(props) {
  return (
    <div className={styles.blogPost}>
      <div>
        <img src={props.image} alt='Blog post thum' />
      </div>
      <div>
        <span>{props.name}</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
}