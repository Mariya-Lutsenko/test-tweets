import styles from './UserCard.module.css'
import PropTypes from 'prop-types';
import Logo from 'components/Logo/Logo';
import BackgroundImage from 'components/BackgroundImage/BackgroundImage';
import Avatar from 'components/Avatar/Avatar';

const UserCard = ({user, tweets, followers, src, followingList, setFollowingList}) => {
return (
    <li >
        <section className={styles.container}>
            <Logo/>
            <BackgroundImage/>
            <Avatar src={src}/>
        </section>

    </li>
)
}
export default UserCard;