import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColor } from 'src/constants/colors';

interface TeamProgressProps {
  onsitePercentage: number;
  remotePercentage: number;
}

const TeamProgress: React.FC<TeamProgressProps> = ({ 
  onsitePercentage, 
  remotePercentage 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View 
          style={[
            styles.progressBar, 
            styles.onsiteBar,
            { width: `${onsitePercentage}%` }
          ]} 
        />
        <View 
          style={[
            styles.progressBar, 
            styles.remoteBar,
            { width: `${remotePercentage}%` }
          ]} 
        />
      </View>
      
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: getColor('progress', 'onsite') }]} />
          <Text style={styles.legendText}>Onsite team ({onsitePercentage}%)</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: getColor('progress', 'remote') }]} />
          <Text style={styles.legendText}>Remote team ({remotePercentage}%)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  progressContainer: {
    height: 8,
    backgroundColor: getColor('background', 'tertiary'),
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 16,
  },
  progressBar: {
    height: '100%',
  },
  onsiteBar: {
    backgroundColor: getColor('progress', 'onsite'),
  },
  remoteBar: {
    backgroundColor: getColor('progress', 'remote'),
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: getColor('text', 'secondary'),
  },
});

export default TeamProgress; 