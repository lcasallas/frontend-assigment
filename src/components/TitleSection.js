import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 100%;
  color: #1a80c7;
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  & span {
    font-size: 12px;
    margin-right: 50px;
  }

  & hr {
    height: 1px;
    background-color: #1a80c7;
    width: 100%;
  }
`;

const TitleSection = ({text}) => {
  return (
    <TitleContainer>
      <span>{text}</span>
      <hr />
    </TitleContainer>
  )
}

export default TitleSection;
