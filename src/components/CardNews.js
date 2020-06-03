import React from 'react';
import styled from 'styled-components';

import ButtonIconInfo from './ButtonIconInfo';

const CardContainer = styled.div`
  background: white;
  width: 300px;
  height: 110px;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 18px;
  align-items: center;
`;

const CardImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  & img {
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
  }
`;

const CardIndicator = styled.span`
  position: absolute;
  top: 15px;
  left: 0;
  background-color: #1a80c7;
  color: white;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 2;
  font-size: 8px;
  padding: 4px 10px;
  text-transform: uppercase;
`;

const CardInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardInfoDetail = styled.div`
  padding: 8px 0px;
  border-bottom: 1px solid #d3d3d3;

  & .title {
    margin: 0px;
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 2px;
  }
  & .description {
    margin: 0px;
    font-size: 12px;
    color: #b2b2b2;
  }
`;

const BarButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px;
`;

const Card = ({imageUrl, indicator, title, description, favorites, comments, views}) => {
  return (
    <CardContainer>
      <CardImage>
        <CardIndicator>{indicator}</CardIndicator>
        <img src={imageUrl} alt='image news' />
      </CardImage>
      <CardInfoContainer>
        <CardInfoDetail>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </CardInfoDetail>
        <BarButton>
          <ButtonIconInfo icon='star' color='#B8D6EC' text='50' size='20' />
          <ButtonIconInfo icon='message-square' color='#B8D6EC' text='40' size='20' />
          <ButtonIconInfo icon='eye' color='#BDBCBC' text='75' size='20' />
        </BarButton>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default Card;