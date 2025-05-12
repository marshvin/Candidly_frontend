// API client configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Helper function for making API requests
async function apiRequest<T>(
  endpoint: string, 
  method: string = 'GET', 
  data?: any, 
  customHeaders: Record<string, string> = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...customHeaders
  };

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
    credentials: 'include', // Include cookies for cross-origin requests if needed
  };

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  
  // Handle JSON parsing with error catching
  let responseData;
  try {
    responseData = await response.json();
  } catch (error) {
    // If the response is empty or not JSON
    responseData = {};
  }

  if (!response.ok) {
    throw {
      status: response.status,
      message: responseData.message || 'An error occurred',
      errors: responseData.errors,
      data: responseData
    };
  }

  return responseData as T;
}

// Authentication API interfaces
export interface RegisterParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

// Authentication API endpoints
export const authApi = {
  register: (userData: RegisterParams) => 
    apiRequest<AuthResponse>('/auth/register', 'POST', userData),
  
  login: (credentials: LoginParams) =>
    apiRequest<AuthResponse>('/auth/login', 'POST', credentials),
  
  logout: () => 
    apiRequest<{ success: boolean }>('/auth/logout', 'POST'),
  
  getCurrentUser: () => 
    apiRequest<{ user: AuthResponse['user'] }>('/auth/me', 'GET'),
  
  forgotPassword: (email: string) => 
    apiRequest<{ success: boolean }>('/auth/forgot-password', 'POST', { email }),
  
  resetPassword: (token: string, password: string, passwordConfirmation: string) => 
    apiRequest<{ success: boolean }>('/auth/reset-password', 'POST', { 
      token, 
      password, 
      passwordConfirmation 
    }),
  
  verifyEmail: (token: string) => 
    apiRequest<{ success: boolean }>(`/auth/verify-email/${token}`, 'GET')
};

export default {
  auth: authApi
}; 