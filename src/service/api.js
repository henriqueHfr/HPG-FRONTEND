import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para definir o token, se existir no localStorage
const setToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers['x-access-tokens'] = token;
    }
  }
};

// Define o token inicialmente
setToken();

// Interceptor para definir o token em cada requisição
api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-access-tokens'] = token;
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
