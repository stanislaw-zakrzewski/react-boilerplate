import { create } from 'apisauce';
import { apiAddress } from './urls';

const api = create({
  baseURL: apiAddress,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default api;
