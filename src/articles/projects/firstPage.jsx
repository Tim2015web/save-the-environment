import styles from './projects.module.css';

import image from '../../assets/projectsPage_image1.webp';

export function ProjectsFirstPage() {
  return (
    <div className={styles.projectsPage}>
      <div className='container'>

        <div className={styles.header}>
          <div><hr /></div>
          <div><span>Our project</span></div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.main}>
            <h1>Mission 40K: Tree plantation</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt delectus magni id quibusdam nihil? Distinctio, hic ipsum voluptates adipisci exercitationem recusandae sequi aut fugiat. Itaque accusantium assumenda perferendis provident debitis non, sapiente voluptatibus, quam minima illum nemo et culpa ipsa blanditiis? Cupiditate dolore, nihil minima laboriosam fugit impedit voluptas!
              <br /><br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente et quas minima sed facere earum quae cupiditate porro? Illo, quia molestias aliquid odio ducimus quas nostrum. Praesentium delectus nesciunt laudantium repellendus voluptate qui odit, animi expedita aspernatur, ipsum velit quam explicabo enim amet facere sint officiis aut reprehenderit quod.
            </p>
            <img src={image} alt='Tree' />
          </div>
          <div className={styles.aside}>
            <h2>Some cool heading</h2>
            <p>
              Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.
            </p>

            <ul>
              <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
              <li>In diam facilisi at sit convallis blandit blandit in.</li>
              <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
            </ul>

            <p>
              Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}