import axios from 'axios';
import { responseInterceptor, errorInterceptor } from './interceptors';

const baseUrlApi = "https://segware-book-api.segware.io/api";

export const api = axios.create({
  baseURL: baseUrlApi,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);