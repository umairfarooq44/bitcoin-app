import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.GET_GRAPH_DATA: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
