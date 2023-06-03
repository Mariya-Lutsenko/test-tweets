import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FollowButton.module.css';

const FollowButton = ({ id, handleBtnClick }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const storedIsFollowing = JSON.parse(
      localStorage.getItem(`isFollowing_${id}`)
    );
    if (storedIsFollowing) {
      setIsFollowing(storedIsFollowing);
    }
  }, [id]);

  const onFollow = e => {
    e.preventDefault();
    setIsFollowing(!isFollowing);
    handleBtnClick(!isFollowing);
  };

  useEffect(() => {
    localStorage.setItem(`isFollowing_${id}`, JSON.stringify(isFollowing));
  }, [id, isFollowing]);

  return (
    <button
      className={styles.btn}
      style={{ background: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
      type="button"
      onClick={onFollow}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

FollowButton.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default FollowButton;
