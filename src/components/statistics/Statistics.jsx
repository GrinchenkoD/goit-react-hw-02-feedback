import React from "react"
import uniqid from 'uniqid'
import Notification from "../notification/Notification "
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"


const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <Notification message="No feedback given" />
        )
    } else {

        const items = Object.keys(props).map((key) =>
            <li key={uniqid()}><p className={styles.text}>{key.charAt(0).toUpperCase() + key.slice(1)} : {props[key]}</p></li>)

        return (
            <ul>
                {items}
            </ul>
        )
    }
}


export default Statistics

Statistics.propTypes = {
    props: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])

}