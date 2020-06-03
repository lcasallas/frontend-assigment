import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
	background: #65b32e;
	border-radius: 50%;
	color: white;
	font-size: 10px;
	position: absolute;
	top: -5px;
	right: 0px;
	padding: 2px;
	min-width: 10px;
	min-height: 10px;
`;

const Badge = ({ value }) => {
  return <Span>{value}</Span>;
};

export default Badge;
