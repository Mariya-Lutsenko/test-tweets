import styles from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const NavbarMenu = () => {
    return (
      <div className={styles.wrapper}>
        <NavLink className={getClassName} to="/">
          Home
        </NavLink>
        <NavLink className={getClassName} to="/tweets">
        Tweets
        </NavLink>
      </div>
    );
  };
  
  export default NavbarMenu;