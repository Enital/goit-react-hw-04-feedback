import React from "react";
import PropTypes from 'prop-types';
import css from './notification.module.css'

function Notification({ message }) {
    return <span className={css.message}>{ message }</span>
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}