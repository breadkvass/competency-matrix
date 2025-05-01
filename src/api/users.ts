import { apiClient } from './client';
import { ApiResponse } from '../types/api';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string | null;
  job_title?: string | null;
  role?: string | null;
  company?: {
    id: number;
    name: string;
  } | null;
}

export interface UserRegistration {
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  password: string;
}

export interface UserUpdate {
  email: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
}

export interface UserSetPassword {
  current_password: string;
  new_password: string;
}

export interface UserPagination {
  count: number;
  next: number | null;
  previous: number | null;
  result: User[];
}

export const usersService = {
  async getUsers(page: number = 1, limit: number = 10): Promise<UserPagination> {
    const response = await apiClient.get<UserPagination>('/users/', {
      params: { page, limit },
    });
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>('/users/me');
    return response.data;
  },

  async getUser(userId: number): Promise<User> {
    const response = await apiClient.get<User>(`/users/${userId}`);
    return response.data;
  },

  async register(userData: UserRegistration): Promise<User> {
    const response = await apiClient.post<User>('/users/registration', userData);
    return response.data;
  },

  async updateUser(userData: UserUpdate): Promise<User> {
    const response = await apiClient.patch<User>('/users/edit', userData);
    return response.data;
  },

  async setPassword(passwordData: UserSetPassword): Promise<void> {
    await apiClient.post('/users/set_password', passwordData);
  },
}; 