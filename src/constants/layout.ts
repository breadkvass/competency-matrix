import { DimensionValue, ViewStyle } from 'react-native';

export const LAYOUT = {
  maxWidth: 1280,
  containerPadding: 20,
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
} as const;

// Helper function to get container style
export const getContainerStyle = (): ViewStyle => ({
  width: '100%' as DimensionValue,
  maxWidth: LAYOUT.maxWidth,
  marginHorizontal: 'auto' as DimensionValue,
  paddingHorizontal: LAYOUT.containerPadding,
}); 