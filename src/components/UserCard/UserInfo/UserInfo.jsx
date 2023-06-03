import PropTypes from 'prop-types';
import styles from './UserInfo.module.css';
import UserName from '../UserName/UserName';
import CountTweets from '../CountTweets/CountTweets';
import CountFollowers from '../CountFollowers/CountFollowers';

const UserInfo = ({
  id,
  user,
  tweets,
  followers,
  followingList,
  setFollowingList,
}) => {
  return (
    <div className={styles.infoWrapper}>
      <UserName user={user} />
      <CountTweets tweets={tweets} />
      <CountFollowers
        id={id}
        followers={followers}
        followingList={followingList}
        setFollowingList={setFollowingList}
      />
    </div>
  );
};
UserInfo.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  followingList: PropTypes.array.isRequired,
  setFollowingList: PropTypes.func.isRequired,
};

export default UserInfo;
