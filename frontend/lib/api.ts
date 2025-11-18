import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data: { name: string; email: string; phone: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

// Addresses API
export const addressesAPI = {
  getAll: () => api.get('/addresses'),
  create: (data: any) => api.post('/addresses', data),
  update: (id: string, data: any) => api.put(`/addresses/${id}`, data),
  delete: (id: string) => api.delete(`/addresses/${id}`),
};

// Shipments API
export const shipmentsAPI = {
  create: (data: any) => api.post('/shipments', data),
  getAll: () => api.get('/shipments'),
  getById: (id: string) => api.get(`/shipments/${id}`),
  cancel: (id: string) => api.put(`/shipments/${id}/cancel`),
};

// Payments API
export const paymentsAPI = {
  createOrder: (data: { shipmentId: string; amount: number }) =>
    api.post('/payments/create-order', data),
  verify: (data: { orderId: string; paymentId: string; signature: string; shipmentId: string }) =>
    api.post('/payments/verify', data),
};

// Tracking API
export const trackingAPI = {
  getByTrackingNumber: (trackingNumber: string) =>
    api.get(`/tracking/${trackingNumber}`),
};

export default api;

