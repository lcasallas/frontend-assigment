import React from 'react';
import styled from 'styled-components';
import API from '../src/util/API';

import Layout from '../src/components/Layout';
import RelatedNews from '../src/containers/RelatedNews';
import NewsItem from '../src/containers/NewItem';

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 30px;
`;

const Article = ({ article }) => {
  return (
    <Layout>
      <ArticleContainer>
        <div>
          <NewsItem data={article[0]} />
        </div>
        <div>
          <RelatedNews />
        </div>
      </ArticleContainer>
    </Layout>
  );
};

export async function getStaticProps (context) {
  const article = await API.getArticles();

  return {
    props: {
      article
    } // will be passed to the page component as props
  };
}

export default Article;
