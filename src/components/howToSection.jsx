import { useState } from 'react';
import styles from './howToSection.module.css';

const items = [
  { title: 'Overview', content: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. \n\n Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.' },
  { title: 'Impact', content: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. \n\n Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. \n\n Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus ' },
  { title: 'What You get', content: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.' },
];

const TabContent = ({ content }) => (
  <div className={styles.tabcontent}>
    <p dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
  </div>
);

export function HowToSection() {

  const [active, setActive] = useState(0);
  const openTab = e => setActive(+e.target.dataset.index);

  return (
    <div className={styles.howToSection}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.textWrap}>
            <h2>How you can contribute to protect Earth</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

          <div className={styles.tabWrap}>
            <div className={styles.tab}>
              {items.map((n, i) => (
                <button
                  className={`tablinks ${i === active ? 'tablinks-active' : ''}`}
                  onClick={openTab}
                  data-index={i}
                >{n.title}</button>
              ))}
            </div>

            {items[active] && <TabContent {...items[active]} />}
          </div>

        </div>
      </div>
    </div>
  );
}