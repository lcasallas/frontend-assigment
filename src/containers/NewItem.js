import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Label from '../components/Label';
import BarActionButon from '../components/BarActionButton';
import InfoArticle from '../components/InfoArticle';
import ImageArticle from '../components/ImageArticle';
import parse from 'html-react-parser';

const NewsContainer = styled.div`
  width: 100%;
  max-width: 980px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & .article-detail {
    padding: 30px 20px 0px;
  }

  & .image-section{
    width: 100%;
  }
  & .title-section{
    display: flex;
    align-items: flex-start;
  }
  & .title-section h3 {
    margin: 0px;
    display: inline;
    margin-right: 50px;
  }
  & .data-section{
    padding: 20px 0px;
  }
  & .label-section{
    display: inline;
  }
  & .label-section span{
    margin-right: 10px;
  }
  & .info-section {
    text-align: justify;
  }
  & .action-section {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
`;

const NewsItem = ({data}) => {

  return (
    <NewsContainer>
      <div className='image-section'>
        <ImageArticle src='https://ak.picdn.net/shutterstock/videos/1929943/thumb/1.jpg' />
      </div>
      <div className='article-detail'>
        <div className='title-section'>
          <h3>{data.title}</h3>
          <Button text='Guardar' />
        </div>
        <div className='data-section'>
          <InfoArticle hora='12' fecha='17/01/18' min='3' />
        </div>
        <div className='label-section'>
          <Label text='Medicina Interna' />
          <Label text='Pediatria' />
          <Label text='Obstetricia' />
        </div>
        <div className='info-section'>
          {parse(data.content)}
        </div>
        <div className='action-section'>
          <BarActionButon />
        </div>
      </div>
    </NewsContainer>
  );
};

export default NewsItem;