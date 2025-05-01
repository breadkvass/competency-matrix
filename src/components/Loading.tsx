import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#0284c7" />
    </View>
  );
} 