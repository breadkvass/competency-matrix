import React from 'react';
import { View, Text } from 'react-native';
import { ApiError as ApiErrorType } from '../types/api';

interface ApiErrorProps {
  error: ApiErrorType;
}

export function ApiError({ error }: ApiErrorProps) {
  return (
    <View className="p-4 bg-red-100 rounded-lg">
      <Text className="text-red-700 font-medium">{error.message}</Text>
      {error.errors && (
        <View className="mt-2">
          {Object.entries(error.errors).map(([field, errors]) => (
            <View key={field} className="mt-1">
              <Text className="text-red-600">{field}:</Text>
              {errors.map((error, index) => (
                <Text key={index} className="text-red-500 ml-2">
                  • {error}
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
} 