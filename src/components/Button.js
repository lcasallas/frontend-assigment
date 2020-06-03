import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: ${props => props.fontColor || 'white'};
  background-color: ${props => props.buttonColor || '#65B32D'};
  border: 1px solid ${props => props.buttonColor || '#65B32D'};
  box-sizing: border-box;
  padding: 5px 20px;
  font-size: 12px;
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      {text}
    </ButtonBase>
  );
}

export default Button;