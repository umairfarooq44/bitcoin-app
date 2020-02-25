import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import getNewsAction from '../../actions/newsActions';
import NewsDetailComp from './NewsDetail.component';

const newsDetail = ({ news, getNews }) => {
  useEffect(() => {
    if (!news) {
      getNews();
    }
  }, []);
  return <NewsDetailComp news={news} />;
};

newsDetail.propTypes = {
  news: PropTypes.object,
  getNews: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = ({ newsList }, props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  return {
    news: newsList.find(({ id: postId }) => postId === Number(id)),
  };
};

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNewsAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(newsDetail));
