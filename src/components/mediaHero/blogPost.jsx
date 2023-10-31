import { NavLink } from 'react-router-dom';
import styles from './blogPost.module.css';

export function BlogPost(props) {
  return (
    <div className={styles.blogPost}>
      <div>
        <img src={props.image} alt='Blog post thum' />
      </div>
      <div>
        <NavLink className={styles.name} to={props.link}>{props.name}</NavLink>
        <p>{props.text}</p>
      </div>
    </div>
  );
}