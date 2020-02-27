import axios from 'axios';

const { VUE_APP_API_URL} = process.env;

const baseURL: string = `${VUE_APP_API_URL}/`;

const instance = axios.create({
  baseURL,
});

export default instance;
