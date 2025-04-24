import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://example.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
