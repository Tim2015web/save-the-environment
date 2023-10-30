import styles from './map.module.css';

export function Map() {
  return (
    <div className={styles.map}>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45470.66893123726!2d37.99964450073724!3d44.57827068229595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f18f4e2e7fb9ad%3A0x9c7bc0b3f2a23016!2z0JPQtdC70LXQvdC00LbQuNC6LCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2sru!4v1698655804019!5m2!1sru!2sru'
        title='Google Maps'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>


    </div>
  );
}