import React, { useState, useEffect, useRef } from 'react';
import { Timer, InputForm } from '../index';
import { ToastContainer, toast } from 'react-toastify';
import {
  differenceInMilliseconds,
  intervalToDuration,
  isValid,
} from 'date-fns';

const TimeContainer = () => {
  const [countdown, setCountdown] = useState();
  const [selectedTimestamp, setSelectedTimestamp] = useState();
  const countdownTimer = useRef();

  useEffect(() => {
    setCountdown('00:00:00');

    if (localStorage.getItem('selectedTimestamp')) {
      setSelectedTimestamp(new Date(localStorage.getItem('selectedTimestamp')));
    }

    return () => {
      countdownTimer.current = null;
    };
  }, []);

  useEffect(() => {
    if (selectedTimestamp && isValid(selectedTimestamp)) {
      if (countdownTimer.current) {
        clearInterval(countdownTimer.current);
      }

      if (
        differenceInMilliseconds(new Date(selectedTimestamp), new Date()) > 0
      ) {
        startCountdown(selectedTimestamp);
      } else {
        setCountdown('00:00:00');
        notifyTimeHasEnded();
      }
    } else {
      console.log('date is not valid');
    }
  }, [selectedTimestamp, countdownTimer]);

  const startCountdown = (selectedTimestamp) => {
    countdownTimer.current = setInterval(() => {
      const countdownAttrs = intervalToDuration({
        start: selectedTimestamp,
        end: new Date(),
      });

      const value = formatCountdownComponent(countdownAttrs);
      setCountdown(value);

      if (value === '00:00:00' && countdownTimer.current) {
        clearInterval(countdownTimer.current);
        notifyTimeHasEnded();
      }
    }, 1000);
  };

  const formatCountdownComponent = ({ hours, minutes, seconds }) => {
    hours = formatTimeComponent(hours);
    minutes = formatTimeComponent(minutes);
    seconds = formatTimeComponent(seconds);

    return `${hours}:${minutes}:${seconds}`;
  };

  const formatTimeComponent = (number) => {
    return String(number).padStart(2, 0);
  };

  const notifyTimeHasEnded = () =>
    toast('Timer has ended! Set a new timestamp.');

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Timer countdownValue={countdown} />
      <InputForm setSelectedTimestamp={setSelectedTimestamp} />
    </>
  );
};

export default TimeContainer;
