import styles from './header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Иконки
import { useState } from 'react';

const setActive = Navbar => Navbar.isActive ? styles.active : styles.item;

export function Header() {

  const [nav, setNav] = useState(false);

  // Цвет фона Header
  const currentPath = useLocation().pathname;
  let backgroundColor = '';
  switch (currentPath) {
    case '/media':
      backgroundColor = '#EFF7F2';
      break;
    case '/contact':
      backgroundColor = '#EBF0F9';
      break;
    case '/Donation':
      backgroundColor = '#EFF7F2';
      break;
    default:
      backgroundColor = '#ffffff';
      break;
  }

  return (
    <div className={styles.header} style={{ backgroundColor: backgroundColor }}>
      <div className='container'>
        <div className={styles.wrapper}>

          <div className={styles.logotype}>
            <NavLink to="/" onClick={() => setNav(false)}>
              <svg width="130" height="27" viewBox="0 0 130 27" fill="#111111" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M129.77 20.1089V23.326H127.071C124.191 23.2355 122.653 21.6804 122.653 18.7595V11.4121H120.769V8.58991H122.653V5.43042H126.635V8.557H129.679V11.3709H126.635V18.3646C126.635 19.3108 126.824 20.0678 128.281 20.0678L129.77 20.1089Z" />
                  <path d="M104.897 15.9867V15.7728C104.854 14.8265 104.998 13.881 105.321 12.9905C105.644 12.0999 106.139 11.2819 106.779 10.5833C107.419 9.88468 108.19 9.31918 109.049 8.91923C109.908 8.51927 110.837 8.29272 111.783 8.25256C111.973 8.25256 112.17 8.25256 112.359 8.25256C116.119 8.25256 119.419 10.4412 119.419 15.6576V16.7684H108.969C109.076 19.1709 110.376 20.5285 112.565 20.5285C114.449 20.5285 115.33 19.7057 115.585 18.5045H119.345C118.884 21.6393 116.383 23.3836 112.425 23.3836C108.081 23.3507 104.897 20.6026 104.897 15.9867ZM115.502 14.2507C115.362 12.0621 114.26 11.0089 112.343 11.0089C110.426 11.0089 109.323 12.1937 109.052 14.2507H115.502Z" />
                  <path d="M88.6388 15.9867V15.7728C88.5957 14.8278 88.7393 13.8836 89.0613 12.9941C89.3833 12.1046 89.8774 11.2873 90.5155 10.5889C91.1535 9.8905 91.9229 9.32469 92.7798 8.9238C93.6366 8.52292 94.564 8.29483 95.5091 8.25256C95.6983 8.25256 95.8958 8.25256 96.085 8.25256C99.8452 8.25256 103.153 10.4412 103.153 15.6576V16.7684H92.7116C92.8186 19.1709 94.1186 20.5285 96.3072 20.5285C98.1914 20.5285 99.0717 19.7057 99.3268 18.5045H103.087C102.618 21.6393 100.117 23.3836 96.1591 23.3836C91.823 23.3507 88.6388 20.6026 88.6388 15.9867ZM99.2445 14.2507C99.1046 12.0621 98.0021 11.0089 96.085 11.0089C94.1679 11.0089 93.0983 12.2266 92.7939 14.2424L99.2445 14.2507Z" />
                  <path d="M65.8228 8.55701H70.0354L72.6107 18.3152L75.4329 8.55701H78.724L81.2746 18.3152L83.9898 8.55701H87.8487L83.274 23.0545H79.3247L76.8563 13.9545L74.2152 23.0545H70.2164L65.8228 8.55701Z" />
                  <path d="M52.436 18.4962H56.1962C56.369 19.8044 57.0189 20.5531 58.7468 20.5531C60.2936 20.5531 61.0095 19.969 61.0095 18.9734C61.0095 17.9778 60.1867 17.5582 58.0803 17.262C54.2215 16.6778 52.7322 15.5671 52.7322 12.7367C52.7322 9.71707 55.4968 8.2196 58.4917 8.2196C61.7088 8.2196 64.136 9.38796 64.4816 12.7202H60.7708C60.7472 12.4626 60.6727 12.2123 60.5517 11.9836C60.4307 11.7549 60.2656 11.5525 60.0659 11.388C59.8662 11.2236 59.6359 11.1003 59.3883 11.0253C59.1408 10.9503 58.8808 10.9252 58.6234 10.9512H58.5C57.2 10.9512 56.443 11.5601 56.443 12.4487C56.443 13.3373 57.1424 13.724 59.2652 14.0285C62.8689 14.5715 64.8848 15.4848 64.8848 18.5867C64.8848 21.6886 62.6057 23.3506 58.7879 23.3506C54.9702 23.3506 52.543 21.631 52.436 18.4962Z" />
                  <path d="M36.4575 8.55692H40.4398V10.8525C40.8887 10.0099 41.57 9.3139 42.4028 8.84717C43.2356 8.38044 44.1849 8.16262 45.1379 8.21958C47.9601 8.21958 50.0088 9.9392 50.0088 13.8639V23.0873H46.0759V14.4398C46.0759 12.4734 45.3107 11.5354 43.5335 11.5354C43.1578 11.5027 42.7794 11.5445 42.42 11.6584C42.0606 11.7723 41.7272 11.9561 41.439 12.1992C41.1508 12.4424 40.9134 12.74 40.7405 13.0751C40.5676 13.4102 40.4627 13.7761 40.4316 14.1519C40.411 14.3268 40.411 14.5035 40.4316 14.6784V23.0544H36.4575V8.55692Z" />
                  <path d="M28.7728 4.91207C28.7584 4.51502 28.8621 4.12261 29.0708 3.78454C29.2795 3.44646 29.5838 3.17791 29.9453 3.01289C30.3067 2.84788 30.7089 2.79381 31.1011 2.85754C31.4933 2.92127 31.8577 3.09993 32.1483 3.3709C32.4388 3.64186 32.6425 3.99296 32.7334 4.37973C32.8243 4.7665 32.7984 5.17154 32.659 5.54359C32.5196 5.91564 32.2729 6.23796 31.9502 6.46973C31.6275 6.70151 31.2433 6.83232 30.8462 6.84561H30.7722C30.5257 6.86121 30.2786 6.828 30.045 6.74787C29.8114 6.66775 29.596 6.5423 29.411 6.37871C29.226 6.21512 29.0751 6.01662 28.967 5.79458C28.8589 5.57255 28.7957 5.33136 28.781 5.08485C28.7742 5.02752 28.7715 4.96978 28.7728 4.91207ZM28.7728 8.557H32.7962V23.0545H28.7893L28.7728 8.557Z" />
                  <path d="M13.6089 3.24182H26.3291V6.75511H18.1013V11.9963H24.6177V15.3779H18.0931V23.0545H13.6089V3.24182Z" />
                  <path d="M5.93228 9.72532C5.93228 10.9677 5.93228 12.4816 4.22089 13.0987C5.97342 13.6994 5.93228 14.9747 5.93228 16.3076V21.2443C5.93228 22.1823 6.31076 22.75 6.98544 22.8899C7.13369 22.9399 7.28988 22.9622 7.4462 22.9557H9.09177V26.2468H6.37658C3.48038 26.2468 1.88418 24.6013 1.88418 21.5487V15.707C1.86364 15.4071 1.7314 15.1257 1.51357 14.9186C1.29574 14.7114 1.00816 14.5934 0.707595 14.588H0V11.7H0.707595C1.01415 11.696 1.30739 11.574 1.52646 11.3596C1.74553 11.1451 1.87363 10.8545 1.88418 10.5481V4.62405C1.88418 1.62089 3.44747 0 6.37658 0H9.11646V3.24177H7.47089C7.31437 3.24222 7.1589 3.26721 7.01013 3.31582C6.33544 3.48861 5.95696 4.0481 5.95696 4.96139L5.93228 9.72532Z" />
                </g>
              </svg>
            </NavLink>
          </div>

          <nav className={nav ? [styles.navWrapper, styles.navWrapperActive].join(' ') : [styles.navWrapper]}>

            <ul className={styles.menu}>
              <li className={styles.item}><NavLink onClick={() => setNav(false)} to="/" className={setActive}>Home</NavLink></li>
              <li className={styles.item}><NavLink onClick={() => setNav(false)} to="/about-us" className={setActive}>About us</NavLink></li>
              <li className={styles.item}><NavLink onClick={() => setNav(false)} to="/what-we-do" className={setActive}>What We Do</NavLink></li>
              <li className={styles.item}><NavLink onClick={() => setNav(false)} to="/media" className={setActive}>Media</NavLink></li>
              <li className={styles.item}><NavLink onClick={() => setNav(false)} to="/contact" className={setActive}>Contact</NavLink></li>
            </ul>

            <NavLink onClick={() => setNav(false)} to="/donation" className={styles.btnLink}>Donate</NavLink>

          </nav>

          <div onClick={() => setNav(!nav)} className={styles.burger}>
            {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
          </div>

        </div>
      </div>
    </div>
  );
}