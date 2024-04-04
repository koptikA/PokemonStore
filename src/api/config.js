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

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {    
        
      localStorage.clear();

      window.location.reload();
    }

    return Promise.reject(error);
  },
);

export default api;
