import React from 'react';
import styled from 'styled-components';

import Card from '../components/CardNews';
import Title from '../components/TitleSection';

const NewsContainer = styled.div`
  display: grid;
  gap: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
`;

const RelatedNews = ({}) => {
  return (
    <NewsContainer>
      <Title text='Noticias relacionadas' />
      <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
      <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
      <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
      <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
      <Card imageUrl='https://www.medpasquali.com/wp-content/uploads/2020/05/medico-paciente-cuadrada636x636-320x320.jpg' indicator='Noticias' title='Lorem Ipsum is simply dummy' description='It is a long established' />
    </NewsContainer>
  );
};

export default RelatedNews;