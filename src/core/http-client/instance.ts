import axios from 'axios';

const { VUE_APP_API_URL, VUE_APP_API_VERSION } = process.env;
//const baseURL: string = `${VUE_APP_API_URL}/api/${VUE_APP_API_VERSION}/`;
const baseURL: string = 'http://localhost:3000/';

const instance = axios.create({
  baseURL,
});

export default instance;
