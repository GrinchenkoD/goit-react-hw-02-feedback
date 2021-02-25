import PropTypes from 'prop-types';
import styles from "./Notification.module.css"


const Notification = ({ message }) => {
    return (
        <h4 className={styles.text}>{message}</h4>
    )
}

export default Notification

Notification.defaultProps = {
    message: 'Nothing to show yet'
}

Notification.propTypes = {
    message: PropTypes.string
}