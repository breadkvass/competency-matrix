import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from 'src/constants/colors';

type StatusType = 'success' | 'warning' | 'error';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusColor = (type: StatusType) => {
    return type === 'success' ? COLORS.status.success : (type === 'error' ? COLORS.status.error : COLORS.status.warning)
  };

  const getBgColor = (type: StatusType) => {
    const color = getStatusColor(type);
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