import PropTypes from "prop-types";
import styles from "./UserName.module.css";

const UserName = ({ user }) => {
    return (
        <p className={styles.name}>{user}</p>
    )
}

UserName.propTypes = {
    user: PropTypes.string.isRequired,
};

export default UserName;