import Axios from 'axios';

export const baseApi = Axios.create({
  baseURL: process.env.VUE_APP_MAGAZIE_API
});

