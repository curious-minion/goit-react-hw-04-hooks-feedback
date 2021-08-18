import React from 'react';
import PropTypes from 'prop-types';

import { buttons, btn } from './FeedbackCounter.module.css';

const FeedbackCounter = ({ options, onLeaveFeedback }) => {
  return (
    <div className={buttons}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          className={btn}
        ></button>
      ))}
    </div>
  );
};

FeedbackCounter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackCounter;
