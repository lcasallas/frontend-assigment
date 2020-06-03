import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logoDocRed.png';

const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 15px;
  } 

  & p {
    margin: 0;
  }

  & .info {
    padding: 0px 10px;
  }

  & .info__title {
    font-weight: bold;
    font-size: 12px;
  }
`;

const InfoData = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;

  & p {
    font-size: 10px;
    color: #b2b2b2;
  }

  & .separator {
    border-left: 1px solid #b2b2b2;
    border-right: 1px solid #b2b2b2;
    padding: 0px 10px;
    margin: 0px 10px;
  }
`;

const InfoArticle = ({ hora, fecha, min }) => {
  return (
    <InfoContainer>
      <div>
        <img src={logo} alt='simbolo docred' />
      </div>
      <div className='info'>
        <p className='info__title'>Noticias DocRed</p>
        <InfoData>
          <p>Hace {hora}h</p>
          <p className='separator'>Publicado: {fecha}</p>
          <p>Lectura: {min} min.</p>
        </InfoData>
      </div>
    </InfoContainer>
  );
};

export default InfoArticle;
