import axios from 'axios';
import { NEWS_URL } from './urls';

export default {
  getNewsData() {
    return axios.get(NEWS_URL);
  },
};
