// /lib/apiClient.js

import axios from 'axios';
import Swal from 'sweetalert2';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/',
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error);
    
    if (error) {
      Swal.fire({text:error?.response?.data.message,icon:"warning"})
    } else {
      Swal.fire({text:"Error en la solicitud",icon:"warning"})
    }
    return Promise.reject(error);
  }
);

export default apiClient;
