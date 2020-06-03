import React from 'react';
import styled from 'styled-components';

import Card from '../components/CardNews';
import Title from '../components/TitleSection';

const NewsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;

  & .news-related {
    display: grid;
    grid-auto-flow: row;
    gap: 3px;
  }
  
  & .news-related div:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & .news-related div:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const RelatedNews = ({}) => {
  return (
    <NewsContainer>
      <Title text='Noticias relacionadas' />
      <div className='news-related'>
        <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
        <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
        <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
        <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
        <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
      </div>
    </NewsContainer>
  );
};

export default RelatedNews;