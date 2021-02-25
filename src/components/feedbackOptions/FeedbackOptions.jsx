import uniqid from 'uniqid'
import React from "react"
import PropTypes from 'prop-types';
import styles from "./feedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const items = options.map((option) => <button key={uniqid()} className={styles.button} name={option}
        type="button" onClick={onLeaveFeedback}>{option.charAt(0).toUpperCase()
            + option.slice(1)}</button>)
    return (
        <>
            { items}
        </>
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}