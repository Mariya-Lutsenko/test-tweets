import styles from './Navigation.module.css';
import { NavLink, Link } from 'react-router-dom';
import { RiFileUserLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import NavbarMenu from './NavbarMenu/NavbarMenu';


  
const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        <IconContext.Provider
          value={{ color: '#704ac9' }}
        >
            <RiFileUserLine />
        </IconContext.Provider>
        Tweets Cards
      </Link>
      <NavbarMenu/>
      
    </nav>
  );
};

export default Navigation;
