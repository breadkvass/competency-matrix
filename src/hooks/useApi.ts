import { useState, useCallback } from 'react';
import { apiClient } from '../api/client';
import { ApiError } from '../types/api';

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  fetchData: () => Promise<void>;
}

export function useApi<T>(endpoint: string): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.get<T>(endpoint);
      setData(response.data);
    } catch (err: any) {
      setError({
        message: err.message || 'An error occurred',
        status: err.response?.status || 500,
        errors: err.response?.data?.errors,
      });
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, fetchData };
}

export function useApiMutation<T, D = any>(
  endpoint: string,
  method: 'post' | 'put' | 'delete' = 'post'
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const mutate = useCallback(
    async (payload?: D) => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiClient[method]<T>(endpoint, payload);
        setData(response.data);
        return response.data;
      } catch (err: any) {
        const apiError = {
          message: err.message || 'An error occurred',
          status: err.response?.status || 500,
          errors: err.response?.data?.errors,
        };
        setError(apiError);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [endpoint, method]
  );

  return { data, loading, error, mutate };
} 