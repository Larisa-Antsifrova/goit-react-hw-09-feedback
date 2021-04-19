// React imports
import React from 'react';
// Helpers imports
import PropTypes from 'prop-types';
// Styles imports
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return message && <p className={styles.message}>{message}</p>;
};

Notification.defaultProps = {
  message: 'Nothing to review',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
