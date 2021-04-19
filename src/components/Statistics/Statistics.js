// React imports
import React from 'react';
// Helpers imports
import PropTypes from 'prop-types';
// Styles imports
import styles from './Statistics.module.css';

const Statistics = ({ feedback, total, positivePercentage }) => {
  const feedbackOptions = Object.keys(feedback);

  return (
    <div className={styles.statistics}>
      {feedbackOptions.map(feedbackOption => (
        <p key={feedbackOption} className={styles[feedbackOption]}>
          {feedbackOption}: {feedback[feedbackOption]}
        </p>
      ))}

      <div className={styles.divider}></div>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
