import React from 'react';
import PropTypes from 'prop-types';
import {
  statistics,
  statistics_list,
  statistics_item,
} from './Statistics.module.css';

const Statistics = ({
  options,
  feedbackCounter,
  total,
  positiveFeedbackRate,
}) => {
  return (
    <div className={statistics}>
      <ul className={statistics_list}>
        {options.map(option => (
          <li key={option} className={statistics_item}>
            {option}: {feedbackCounter[option]}
          </li>
        ))}
      </ul>

      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedbackRate} %</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  feedbackCounter: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackRate: PropTypes.number.isRequired,
};

export default Statistics;
