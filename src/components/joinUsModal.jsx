import styles from './joinUsModal.module.css';
import { useEffect, useRef } from 'react';

function JoinUsModal({ onClose }) {

  const modalRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Close popup
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
  }, [onClose]);

  // Push the button
  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    alert(`Successfull!\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);

    onClose();
  };

  return (
    <div className={styles.joinUsModal}>
      <div className={styles.modalContent} ref={modalRef}>

        <svg className={styles.close} onClick={onClose} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect id="BG" width="32" height="32" rx="4" fill="#1D2130" />
            <path id="Cross" d="M10 22L22 10M10 10L22 22" stroke="white" stroke-width="1.5" />
          </g>
        </svg>

        <span>Join as a volunteer</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique.
        </p>

        <form action="#" method="post" className={styles.formJoin} onSubmit={handleSubmit}>
          <div className={styles.nameRow}>
            <div>
              <label htmlFor="first_name">First Name:</label>
              <input type="text" id="first_name" name="first_name" required ref={firstNameRef} />
            </div>

            <div>
              <label htmlFor="last_name">Last Name:</label>
              <input type="text" id="last_name" name="last_name" required ref={lastNameRef} />
            </div>
          </div>

          <div className={styles.emailRow}>
            <label htmlFor="email">Email Id</label>
            <input type="email" id="email" name="email" required ref={emailRef} />
          </div>

          <div className={styles.msgRow}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Type your Message" ref={messageRef} />
          </div>

          <div>
            <button className="buttonPrimary" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinUsModal;
