import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#fff',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e3e3e',
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
