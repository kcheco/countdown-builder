import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  max-width: 280px;
  background-color: #01bde8;
  color: white;
  width: 100%;
  outline: 0;
  border: blue;
  padding: 18px 24px;
  margin: 0 auto;
  border-radius: 7px;

  &:hover,
  &:focus {
    background-color: blue;
    cursor: pointer;
  }
`;

const SubmitButton = ({ onClickFn }) => (
  <StyledButton type="button" onClick={onClickFn}>
    Start Countdown
  </StyledButton>
);

export default SubmitButton;
