import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import getPriceAction from '../../actions/priceActions';
import BCHPriceComp from './BCHPrice.component';

const BCHPrice = ({ price, getPrice }) => {
  useEffect(() => {
    // Getting price if not fetched
    if (price === 0) {
      getPrice();
    }
  }, []);

  return <BCHPriceComp price={price} />;
};

BCHPrice.propTypes = {
  price: PropTypes.number,
  getPrice: PropTypes.func, // Redux Function prop to fetch data
};

const mapStateToProps = ({ price }) => ({
  price: price.currentPrice / 100,
});

const mapDispatchToProps = dispatch => ({
  getPrice: () => dispatch(getPriceAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BCHPrice);
