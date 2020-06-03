import React from 'react';
import Link from 'next/link';

import Logo from './Logo';

import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background-color: #1a80c7;
  font-size: 14px;

  & .item {
    color: white;
    text-decoration: none;
    opacity: 0.8
  }

  & .info {
    color: white;
    opacity: 0.5;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo />
      </div>
      <Link href='/'><a className='item'>Preguntas frecuentes</a></Link>
      <Link href='/'><a className='item'>Cont&aacute;ctanos</a></Link>
      <Link href='/'><a className='item'>Informaci&oacute;n</a></Link>
      <div className='info' ><span>DocRed @ 2019. Todos los derechos reservados</span></div>
    </FooterContainer>
  );
};

export default Footer;