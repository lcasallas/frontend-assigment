import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  object-fit: cover;

  & img {
    width: 100%;
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

const ImageArticle = ({src}) => {
  return (
    <ImageContainer>
      <CardIndicator>noticia</CardIndicator>
      <img src={src} alt='imagen articulo'/>
    </ImageContainer>
  );
};

export default ImageArticle;
