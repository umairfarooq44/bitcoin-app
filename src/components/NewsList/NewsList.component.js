import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// components
import NewsCard from '../ui/NewsCard';
import Heading from '../ui/Heading';

export const NewsLink = styled(Link)`
  text-decoration: none;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

const NewsListComp = ({ newsList }) => (
  <div>
    <Heading>Latest Posts</Heading>
    <NewsContainer>
      {newsList.map(news => (
        <NewsLink to={`/post/${news.id}`} key={news.id}>
          <NewsCard title={news.post_title} imgSrc={news.thumbnail} />
        </NewsLink>
      ))}
    </NewsContainer>
  </div>
);

NewsListComp.propTypes = {
  newsList: PropTypes.array,
};

export default NewsListComp;
