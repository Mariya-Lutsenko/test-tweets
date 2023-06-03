import PropTypes from "prop-types";
import styles from './CountTweets.module.css'

const CountTweets = ({ tweets }) => {
    return (
        <p className={styles.tweets}>{tweets} tweets</p>
    )
}

CountTweets.propTypes = {
    tweets: PropTypes.number.isRequired,
};

export default CountTweets;