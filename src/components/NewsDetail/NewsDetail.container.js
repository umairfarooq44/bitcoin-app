import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import getNewsAction from '../../actions/newsActions';
import NewsDetailComp from './NewsDetail.component';

const newsDetail = ({ news, getNews }) => {
  useEffect(() => {
    // Getting news if not available in redux
    if (!news) {
      getNews();
    }
  }, []);
  return <NewsDetailComp news={news} />;
};

newsDetail.propTypes = {
  news: PropTypes.object, // Redux state for news
  getNews: PropTypes.func, // Redux based action prop to fetch data
  match: PropTypes.object, // React Router Passed Props
};

const mapStateToProps = ({ newsList }, props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  // Filtering the news by id from the redux state
  return {
    news: newsList.find(({ id: postId }) => postId === Number(id)),
  };
};

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNewsAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(newsDetail));
