import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';

const ContainerLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: #EDEBEB;
  padding: 40px 25px 30px;
`;

const Layout = ({ children }) => {
  return (
    <ContainerLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContainerLayout>
  );
};

export default Layout;
