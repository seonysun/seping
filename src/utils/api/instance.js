import axios from 'axios';
import { API_URL } from '../../constants/config';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});
