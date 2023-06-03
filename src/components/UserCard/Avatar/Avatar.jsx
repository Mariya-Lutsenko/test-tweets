import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import defaultAvatar from '../../../images/defaultAvatar.png';

const Avatar = ({ src }) => {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.line}></div>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatarImg}
          src={src.length ? src : defaultAvatar}
          alt="avatar"
        />
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
