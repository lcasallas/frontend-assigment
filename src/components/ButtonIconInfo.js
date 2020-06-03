import React from 'react';
import FeatherIcon from 'feather-icons-react';

import styled from 'styled-components';

const Button = styled.button`
  padding: 0px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #797979;
`;

const Text = styled.span`
  margin-left: 4px;
  font-size: 12px;
`;


const ButtonIconInfo = ({icon, color, size, text, onClick}) => {
  return (
    <Button onClick={onClick}>
      <FeatherIcon icon={icon} color={color} size={size} />
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonIconInfo;
