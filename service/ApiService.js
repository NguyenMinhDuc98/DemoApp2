/* eslint-disable no-shadow */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ApiService = async (config = {}) => {
  const instance = axios.create({
    baseURL: 'http://data.vnas.com.vn:108/',
    headers: {
      'content-type': 'application/json',
      Authorization: '',
    },
    ...config,
  });

  const token = await AsyncStorage.getItem('token');

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.error('error', error);
      return Promise.reject(error);
    },
  );
  return instance;
};
