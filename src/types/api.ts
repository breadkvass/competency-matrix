// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Error Types
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Base Types for your entities
export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Competence {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

// Add more types as we discover them from the API 