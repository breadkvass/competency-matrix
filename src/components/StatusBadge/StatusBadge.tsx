import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColor } from 'src/constants/colors';

type StatusType = 'success' | 'warning' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusColor = (type: StatusType) => {
    return getColor('status', type);
  };

  const getBgColor = (type: StatusType) => {
    const color = getStatusColor(type);
    // Add 20% opacity to the background
    return color + '33';
  };

  return (
    <View style={[styles.container, { backgroundColor: getBgColor(status) }]}>
      <View style={[styles.dot, { backgroundColor: getStatusColor(status) }]} />
      <Text style={[styles.text, { color: getStatusColor(status) }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default StatusBadge; 