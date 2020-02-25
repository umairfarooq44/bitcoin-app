import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getNewsAction from '../../actions/newsActions';
import NewsListComp from './NewsList.component';

const NewsList = ({ newsList, getNews }) => {
  useEffect(() => {
    if (newsList.length === 0) {
      getNews();
    }
  }, []);

  return <NewsListComp newsList={newsList} />;
};

NewsList.propTypes = {
  newsList: PropTypes.array,
  getNews: PropTypes.func,
};

const mapStateToProps = ({ newsList }) => ({
  newsList,
});

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNewsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
