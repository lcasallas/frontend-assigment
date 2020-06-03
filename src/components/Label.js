import React from 'react';

import styled from 'styled-components';

const LabelContainer = styled.span`
  padding: 5px 14px;
  background-color: #F4F8FC;
  border-radius: 4px;
  color: #2680C4;
  font-size: 12px;
`;

const Label = ({text}) => {
  return (
    <LabelContainer>{text}</LabelContainer>
  );
};

export default Label;
