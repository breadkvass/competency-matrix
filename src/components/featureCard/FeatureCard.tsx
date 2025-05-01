import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColor } from '../../constants/colors';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    backgroundColor: getColor('background', 'primary'),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: getColor('border', 'light'),
    shadowColor: getColor('text', 'primary'),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    height: '100%',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: getColor('primary', 'lightLavender'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: getColor('text', 'primary'),
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: getColor('text', 'secondary'),
  },
});

export default FeatureCard; 