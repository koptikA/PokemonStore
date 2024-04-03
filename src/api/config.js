import axios from 'axios';
const BASE_URL = 'https://pokemonstore.onrender.com';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();

      window.location.reload();

      return;
    }
    if (error.response.status === 400) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.response.data);
  },
);

export default api;
