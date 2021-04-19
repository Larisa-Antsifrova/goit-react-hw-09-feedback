// React imports
import React from 'react';
// Helpers imports
import PropTypes from 'prop-types';
// Styles imports
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedback, onLeaveFeedback }) => {
  const options = Object.keys(feedback);

  return (
    <div className={styles.optionsContainer}>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            className={styles[option] || styles.btn}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
