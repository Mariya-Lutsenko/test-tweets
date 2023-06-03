import styles from './Logo.module.css';
import logo from '../../images/logo.png';

const Logo = () => {
    return (
        <img className={styles.logo} src={logo} alt="logo" width="76" />
    )
}

export default Logo;