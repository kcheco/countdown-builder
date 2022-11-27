import React from 'react';
import styled from 'styled-components';

const TimerText = styled.p`
  font-size: 4em;
`;

const Timer = ({ countdownValue }) => {
  return (
    <div className="timer-row">
      <TimerText>{countdownValue}</TimerText>
    </div>
  );
};

export default Timer;
