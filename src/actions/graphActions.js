import * as actionTypes from './actionTypes';
import IndexAPI from '../api/IndexAPI';
import { parseDate } from '../utils';

const onLoadSuccess = data => ({
  type: actionTypes.GET_GRAPH_DATA,
  data,
});
export default function getGraphData() {
  return async dispatch => {
    try {
      const { data } = await IndexAPI.getBCHGraphData();
      // Parsing the data to show
      const graphData = data.map(([BCHdate, BCHPrice]) => ({
        date: parseDate(BCHdate),
        tzDate: BCHdate,
        price: BCHPrice / 100,
      }));
      dispatch(onLoadSuccess(graphData));
      return graphData;
    } catch (error) {
      return error;
    }
  };
}
