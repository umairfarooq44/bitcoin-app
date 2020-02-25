import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import getNewsAction from '../../actions/newsActions';
import NewsListComp from './NewsList.component';

const NewsList = ({ newsList, getNews }) => {
  useEffect(() => {
    // Fetch news if not available
    if (newsList.length === 0) {
      getNews();
    }
  }, []);

  return <NewsListComp newsList={newsList} />;
};

NewsList.propTypes = {
  newsList: PropTypes.array, // Prop having news from redux state
  getNews: PropTypes.func, // Redux based action prop to fetch data
};

const mapStateToProps = ({ newsList }) => ({
  newsList,
});

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNewsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
