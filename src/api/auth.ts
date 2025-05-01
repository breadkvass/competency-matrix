import { apiClient } from './client';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<Token> {
    const response = await apiClient.post<Token>('/token/login', credentials);
    return response.data;
  },

  async logout(): Promise<void> {
    await apiClient.post('/token/logout');
  },

  async refreshToken(refresh_token: string): Promise<Token> {
    const response = await apiClient.post<Token>('/token/refresh_token', { refresh_token });
    return response.data;
  },
}; 