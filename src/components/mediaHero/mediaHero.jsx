import { NavLink } from 'react-router-dom';
import styles from './mediaHero.module.css';
import { BlogPost } from './blogPost';

const importAll = (context) => context.keys().map(context);
const images = importAll(require.context('../../assets/mediaHero', false, /\.(webp)$/));

export function MediaHero() {
  return (
    <div className={styles.mediaHero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>

            <div className={styles.textWrap__header}>
              <div><hr /></div>
              <div><span>Top news</span></div>
            </div>

            <div className={styles.textWrap__main}>
              <h1>Our goal is to make water available for everyone</h1>
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>

              <NavLink className={styles.btnLink} to="/">Read more</NavLink>
            </div>

          </div>

          <div className={styles.contentWrap}>
            <BlogPost image={images[0]} name='Don’t destroy greenery and don’t spoil scenery.' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim' link='/blog-page/first-page' />
            <BlogPost image={images[1]} name='Why saving wildlife is extremely important' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim' link='/blog-page/fifth-page' />
            <BlogPost image={images[2]} name='Caring for the present is caring for the future' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim' link='/blog-page/sixth-page' />
          </div>

        </div>
      </div>
    </div>
  );
}