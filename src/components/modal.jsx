import { AiOutlineClose } from 'react-icons/ai';
import styles from './modal.module.css';
import React, { useEffect } from 'react';

function Modal({ message, onClose, modalRef }) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (modalRef.current) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, modalRef]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalRef}>
        <AiOutlineClose className={styles.close} size={32} onClick={onClose} />
        <iframe title="YouTube Video" src={message} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Modal;
