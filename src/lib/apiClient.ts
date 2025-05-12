import { authApi } from './api';

// Common API response interfaces
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
  data?: any;
}

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface UserUpdateParams {
  name?: string;
  email?: string;
  password?: string;
  currentPassword?: string;
}

// User profile API
const userApi = {
  getProfile: () => authApi.getCurrentUser(),
  
  updateProfile: (data: UserUpdateParams) => {
    return fetch('/api/users/profile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) throw new Error('Failed to update profile');
      return res.json();
    });
  },
  
  changePassword: (currentPassword: string, newPassword: string) => {
    return fetch('/api/users/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({ currentPassword, newPassword })
    }).then(res => {
      if (!res.ok) throw new Error('Failed to change password');
      return res.json();
    });
  }
};

// The main API client that can be extended with additional endpoints
const apiClient = {
  auth: authApi,
  user: userApi,
  
  // Add more API namespaces as needed
  // exams: examApi,
  // assessments: assessmentApi,
  // etc.
};

export default apiClient; 