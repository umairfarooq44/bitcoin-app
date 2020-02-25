import * as actionTypes from './actionTypes';
import newsAPI from '../api/newsAPI';

const onLoadSuccess = price => ({
  type: actionTypes.GET_NEWS,
  price,
});

export default function getPrice() {
  return async dispatch => {
    try {
      const { data } = await newsAPI.getNewsData();
      // Filtering the news containing BCH tag
      const BCHNews = data.filter(({ tags }) => tags.includes('BCH'));
      dispatch(onLoadSuccess(BCHNews));
      return BCHNews;
    } catch (error) {
      return error;
    }
  };
}
