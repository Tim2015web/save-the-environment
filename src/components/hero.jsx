import styles from './hero.module.css';
import iconPlay from '../assets/icon_play.svg';
import { NavLink } from 'react-router-dom';

import React, { useState, useRef } from 'react';
import Modal from '../components/modal';

// Статистические данные hero
const treesPlanted = 23800;
const donationsCollected = 5840;

// Запятая в числа
function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

export function Hero() {

  // Модальное окно
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
    document.body.classList.add('modal-open'); // Добавляем класс для блокировки прокрутки
  }

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open'); // Удаляем класс для разблокировки прокрутки
  }

  const modalRef = useRef();

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrapper}>

          <h1 className='homeHeading'>Save the environment today for a better tomorrow</h1>

          <div className={styles.btnRow}>
            <NavLink to="/what-we-do" className={styles.btnLink}>What we do</NavLink>
            <button onClick={() => openModal("https://www.youtube.com/embed/LXb3EKWsInQ?si=ECVflyzfUqMPBnW9")}>
              <img src={iconPlay} alt="Icon play video" />
              Play Video
            </button>

          </div>

          <div className={styles.statistics}>
            <div>{formatNumberWithCommas(treesPlanted)} trees planted</div>
            <div className={styles.line}></div>
            <div>{formatNumberWithCommas(donationsCollected)} donations collected</div>
          </div>

          {showModal && (<Modal message={modalMessage} onClose={closeModal} modalRef={modalRef} />)}
        </div>
      </div>
    </div>
  );
}