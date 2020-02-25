import { combineReducers } from 'redux';

import price from './priceReducer';
import graphData from './graphReducer';
import newsList from './newsReducer';

const rootReducer = combineReducers({
  price,
  graphData,
  newsList,
});

export default rootReducer;
