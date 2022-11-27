import React, { useState } from 'react';
import SubmitButton from '../SubmitButton';
import DateTimePicker from 'react-datetime-picker';
import { addHours, addMinutes } from 'date-fns';
import styled from 'styled-components';

const FormWrapper = styled.div`
  & > form > div {
    margin-bottom: 11px;
  }
`;

const DateTimePickerWrapper = styled.div`
  & .react-datetime-picker {
    max-width: 280px;
    width: 100%;
  }

  & .react-datetime-picker__wrapper {
    padding: 7px 11px;
    border-radius: 5px;
  }
`;

const InputForm = ({ setSelectedTimestamp }) => {
  const [selectedTimestamp, onDateChange] = useState(
    addMinutes(new Date(), 15)
  );

  const handleOnSaveTimer = (event) => {
    event.preventDefault();
    localStorage.setItem('selectedTimestamp', selectedTimestamp);
    setSelectedTimestamp(selectedTimestamp);
  };
  return (
    <FormWrapper>
      <form>
        <div>
          <label htmlFor="chosen-date">When should your timer end?</label>
        </div>
        <DateTimePickerWrapper>
          <DateTimePicker
            onChange={onDateChange}
            maxDate={addHours(new Date(), 24)}
            minDate={new Date()}
            minTime={new Date()}
            value={selectedTimestamp}
            minDetails="hour"
            maxDetails="second"
            clearIcon={null}
            showLeadingZeros
          />
        </DateTimePickerWrapper>
        <div className="button-row">
          <SubmitButton onClickFn={handleOnSaveTimer} />
        </div>
      </form>
    </FormWrapper>
  );
};

export default InputForm;
