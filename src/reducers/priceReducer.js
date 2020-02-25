import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentPrice: 0,
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.GET_PRICE: {
      return { ...state, currentPrice: action.price };
    }
    default: {
      return state;
    }
  }
}
