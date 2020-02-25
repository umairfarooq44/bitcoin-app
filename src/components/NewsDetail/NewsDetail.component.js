import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import styled from 'styled-components';

const NewsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const NewsContent = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const NewsThumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const NewsTitle = styled.h2`
  font-weight: 400;
`;
const NewsDescription = styled.h3`
  font-weight: 400;
`;

const NewsDetailComp = ({ news = {} }) => (
  <NewsContainer>
    <NewsThumbnail src={news.thumbnail} alt="thumbnail" />
    <NewsTitle>{news.post_title}</NewsTitle>
    <NewsDescription>{news.description}</NewsDescription>
    <NewsContent>{news.post_content && renderHTML(news.post_content)}</NewsContent>
  </NewsContainer>
);

NewsDetailComp.propTypes = {
  news: PropTypes.object,
};

export default NewsDetailComp;
