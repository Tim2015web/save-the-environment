import styles from './blogsPage.module.css';

import image from '../../assets/blogsFirstPage_Image3.webp';

export function BlogsSixthPage() {
  return (
    <div className={styles.blogsPage}>
      <div className='container'>

        <div className={styles.wrapper}>
          <span>04 NOV 2021</span>
          <h1>Caring for the present is caring for the future</h1>
          <p>
            Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit.
          </p>
          <img src={image} alt='Beautiful nature' />

          <div className={styles.main}>
            <h2>Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque</h2>
            <p>
              Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
              <br /><br />
              Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
              <br />
              Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
              <br /><br />
              Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.
            </p>

            <div className={styles.aside}>
              <h3>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h3>
              <ul>
                <li>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis.</li>
                <li>Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.</li>
                <li>Mauris morbi sed dignissim a in nec aliquam fringilla et. </li>
                <li>Consectetur feugiat quis hac enim nullam in enim.</li>
              </ul>
            </div>

            <div className={styles.aside}>
              <h3>Transform Your Idea Into Reality with Ether a Leading Digital Agency</h3>
              <p>
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
                <br /><br />
                Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}