import React from 'react';
import styled from 'styled-components';

import Badge from './Badge';
import FeatherIcon from 'feather-icons-react';

const Button = styled.button`
	position: relative;
	background: none;
	border: none;
`;

const ButtonIcon = ({ icon, color, size, onClick, badge }) => {
  return (
    <Button onClick={onClick}>
      {badge && <Badge value={badge} />}
      <FeatherIcon icon={icon} color={color} size={size} />
    </Button>
  );
};

export default ButtonIcon;
