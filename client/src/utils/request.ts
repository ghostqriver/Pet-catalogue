import axios from 'axios';
import Config from 'src/config';

const http =  axios.create({
  baseURL: Config.baseUrl
})

export default http
