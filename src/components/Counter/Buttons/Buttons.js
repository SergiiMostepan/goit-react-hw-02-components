import React from 'react';
import styles from './Buttons.module.css';

const Buttons = ({ type, onIncrementStatistick }) => (
  <div className={styles.buttonSection}>
    <button type={type} onClick={() => onIncrementStatistick('good')}>
      Good
    </button>
    <button type={type} onClick={() => onIncrementStatistick('neutral')}>
      Neutral
    </button>
    <button type={type} onClick={() => onIncrementStatistick('bad')}>
      Bad
    </button>
  </div>
);

export default Buttons;
