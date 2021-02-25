import PropTypes from 'prop-types';
import styles from "./Section.module.css"

const Section = ({ title, children }) => {
    return (
        <div>
            <h3 className={styles.text}>{title}</h3>
            {children}
        </div>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired
}