import styles from './UserCard.module.css'
import PropTypes from 'prop-types';
import Logo from 'components/Logo/Logo';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import Avatar from 'components/Avatar/Avatar';
import UserInfo from 'components/UserInfo/UserInfo';

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
export default UserCard;