import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import router from 'next/router';

const token = Cookies.get('token');

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const handleResponse = (response: AxiosResponse) => {
  // Se a resposta tiver status 401, o token expirou
  if (response.status === 401) {
    Cookies.remove('token'); // Remova o token do cookie
    router.push('/'); // Redirecione para a página de login
  }
  return response;
};

api.interceptors.response.use(handleResponse);