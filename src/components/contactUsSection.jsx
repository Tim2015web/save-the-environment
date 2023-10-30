import styles from './contactUsSection.module.css';
import { useRef } from 'react';

export function ContactUsSection() {

  const cuFirstNameRef = useRef();
  const cuLastNameRef = useRef();
  const cuEmailRef = useRef();
  const cuSubjectRef = useRef();
  const cuMessageRef = useRef();

  // Push the button
  const handleSubmit1 = (e) => {
    e.preventDefault();

    const cuFirstName = cuFirstNameRef.current.value;
    const cuLastName = cuLastNameRef.current.value;
    const cuEmail = cuEmailRef.current.value;
    const cuSubject = cuSubjectRef.current.value;
    const cuMessage = cuMessageRef.current.value;

    alert(`Successfull!\nFirst Name: ${cuFirstName}\nLast Name: ${cuLastName}\nEmail: ${cuEmail}\nSubject: ${cuSubject}\nMessage: ${cuMessage}`);
  };

  return (
    <div className={styles.contactUsSection}>
      <div className='container'>

        <form className={styles.contactForm} action="#" method="post" onSubmit={handleSubmit1}>
          <div className={styles.doubleRow}>
            <div>
              <label htmlFor="cu_first_name">First Name</label>
              <input type="text" id="cu_first_name" name="cu_first_name" ref={cuFirstNameRef} required />
            </div>

            <div>
              <label htmlFor="cu_last_name">Last Name</label>
              <input type="text" id="cu_last_name" name="cu_last_name" ref={cuLastNameRef} required />
            </div>
          </div>

          <div className={styles.doubleRow}>
            <div>
              <label htmlFor="cu_email">Email Id</label>
              <input type="email" id="cu_email" name="cu_email" ref={cuEmailRef} required />
            </div>

            <div>
              <label htmlFor="cu_subject">Subject</label>
              <input type="text" id="cu_subject" name="cu_subject" ref={cuSubjectRef} required />
            </div>
          </div>

          <div className={styles.singleRow}>
            <label htmlFor="cu_message">Message</label>
            <textarea id="cu_message" name="cu_message" ref={cuMessageRef} required />
          </div>

          <div>
            <button className={styles.btnSub} type="submit">Send message</button>
          </div>
        </form>

      </div>
    </div>
  );
}