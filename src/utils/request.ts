import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: MODE === 'dev' ? 'http://localhost:8888' : CUR_URL,
});
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return err;
  }
);
axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
