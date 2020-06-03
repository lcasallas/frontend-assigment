import React from 'react';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background: none;
	color: white;
	cursor: pointer;
`;

const TextInfo = styled.p`
	margin: 0 5px;
	padding: 0;
`;

const Menu = ({ children, text, icon }) => {
  return (
    <Button type='button'>
      {icon && <FeatherIcon icon={icon} color='#fff' />}
      {children}
      {text && <TextInfo>{text}</TextInfo>}
      <FeatherIcon icon='chevron-down' color='#fff' size='16' />
    </Button>
  );
};

export default Menu;
