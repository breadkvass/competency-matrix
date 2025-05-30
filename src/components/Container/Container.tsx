import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { getContainerStyle } from '../../constants/layout';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...getContainerStyle(),
  },
});

export default Container; 