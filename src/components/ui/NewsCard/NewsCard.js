import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsContainer = styled.div`
  border: 1px solid #e8e8e8;
  width: 240px;
`;
const NewsImg = styled.img`
  width: 100%;
`;

const NewsBody = styled.div`
  padding: 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  text-overflow: ellipsis;
`;

const NewsCard = ({ imgSrc, title }) => (
  <NewsContainer>
    <NewsImg src={imgSrc} />
    <NewsBody>{title}</NewsBody>
  </NewsContainer>
);

NewsCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};

export default NewsCard;
