import * as actionTypes from './actionTypes';
import IndexAPI from '../api/IndexAPI';

const onLoadSuccess = price => ({
  type: actionTypes.GET_PRICE,
  price,
});

export default function getPrice() {
  return async dispatch => {
    try {
      const {
        data: { price },
      } = await IndexAPI.getBCHPrice();
      dispatch(onLoadSuccess(price));
      return price;
    } catch (error) {
      return error;
    }
  };
}
