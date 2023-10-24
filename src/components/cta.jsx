import { NavLink } from 'react-router-dom';
import styles from './cta.module.css';
import JoinUsModal from './joinUsModal';
import { useState } from 'react';

export function Cta() {

  const [showJoinUsModal, setJoinUsModal] = useState(false);

  const openModal = () => {
    console.log('Open');
    setJoinUsModal(true);
    document.documentElement.classList.add('no-scroll');
  };

  const closeModal = () => {
    console.log('Close');
    setJoinUsModal(false);
    document.documentElement.classList.remove('no-scroll');
  }

  return (
    <div className={styles.cta}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.content}>

            <h2>You can contribute to make the environment greener!</h2>

            <div className={styles.buttonRow}>
              <button onClick={() => openModal()} className='buttonPrimary'>Join as a volunteer</button>
              <NavLink to="/donation">Donate</NavLink>
            </div>

          </div>

          {showJoinUsModal && (<JoinUsModal onClose={closeModal} />)}

        </div>
      </div>
    </div>
  );
}