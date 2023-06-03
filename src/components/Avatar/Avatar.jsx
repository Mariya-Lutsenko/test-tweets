import PropTypes from "prop-types";
import styles from './Avatar.module.css'
import DefaultAvatar from '../../../src/assets/DefaultAvatar.png'

const Avatar = ({src}) => {
    return (
        <div className={styles.avatarWrapper}>
            <div className={styles.line}></div>
            <div className={styles.avatarContainer}>
            <img className={styles.avatarImg} src={src.length? src : DefaultAvatar} alt="avatar" />
            </div>
            <div className={styles.line}></div>

        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Avatar;