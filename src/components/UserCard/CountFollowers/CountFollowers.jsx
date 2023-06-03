import PropTypes from 'prop-types';
import styles from './CountFollowers.module.css';
import { useState, useEffect, useMemo } from 'react';
import FollowButton from '../FollowButton/FollowButton';

const CountFollowers = ({ id, followers, followingList, setFollowingList }) => {
  const initialCountFollowers = useMemo(() => {
    const storedCountFollower = JSON.parse(
      localStorage.getItem(`followerCount_${id}`)
    );
    return storedCountFollower !== null ? storedCountFollower : followers;
  }, [id, followers]);

  const [countFollower, setCountFollower] = useState(initialCountFollowers);

  const addToFollowing = cardId => {
    const updatedList = [...followingList, cardId];
    setFollowingList(updatedList);
    localStorage.setItem('following', JSON.stringify(updatedList));
  };

  const removeFromFollowing = cardId => {
    const updatedList = followingList.filter(id => id !== cardId);
    setFollowingList(updatedList);
    localStorage.setItem('following', JSON.stringify(updatedList));
  };

  const handleBtnClick = isFollowing => {
    if (isFollowing === true) {
      setCountFollower(prevCount => prevCount + 1);
      addToFollowing(id);
    } else {
      setCountFollower(prevCount => prevCount - 1);
      removeFromFollowing(id);
    }
  };

  useEffect(() => {
    localStorage.setItem(`followerCount_${id}`, JSON.stringify(countFollower));
  }, [id, countFollower]);
  const formattedCountFollower = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(countFollower);

  return (
    <>
      <p className={styles.follower}>{formattedCountFollower} followers</p>
      <FollowButton
        value={followingList}
        id={id}
        handleBtnClick={handleBtnClick}
      />
    </>
  );
};

CountFollowers.propTypes = {
  id: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  followingList: PropTypes.array.isRequired,
  setFollowingList: PropTypes.func.isRequired,
};

export default CountFollowers;
