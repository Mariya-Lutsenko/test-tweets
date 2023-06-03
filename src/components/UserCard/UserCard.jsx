import styles from './UserCard.module.css'
import PropTypes from 'prop-types';
import Logo from './Logo/Logo';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Avatar from './Avatar/Avatar';
import UserInfo from './UserInfo/UserInfo';

const UserCard = ({id, user, tweets, followers, src, followingList, setFollowingList}) => {
return (
    <li >
        <section className={styles.container}>
            <Logo/>
            <BackgroundImage/>
            <Avatar src={src}/>
            <UserInfo user={user} tweets={tweets} followers={followers} id={id} followingList={followingList} setFollowingList={setFollowingList}/>

        </section>

    </li>
)
}
UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    followingList: PropTypes.array.isRequired,
    setFollowingList: PropTypes.func.isRequired,
};
export default UserCard;