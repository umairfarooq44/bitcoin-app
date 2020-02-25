import axios from 'axios';
import { PRICE_URL, HISTORY_URL } from './urls';

export default {
  getBCHPrice() {
    return axios.get(PRICE_URL);
  },
  getBCHGraphData() {
    return axios.get(HISTORY_URL);
  },
};
