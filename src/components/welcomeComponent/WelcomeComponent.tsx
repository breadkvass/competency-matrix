import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, DimensionValue } from 'react-native';
import { Link } from 'expo-router';
import { getColor } from '../../constants/colors';
import Container from '../Container/Container';
import FeatureCard from '../featureCard/FeatureCard';

const WelcomeComponent = () => {
  const cardWidth = '48%' as DimensionValue;
  const { height } = useWindowDimensions();
  const containerHeight = Math.min(height * 0.9, 1200);
  const features = [
    {
      icon: "👤",
      title: "Управление пользователями",
      description: "Регистрация пользователей и создание профилей. Каждый пользователь может зарегистрировать компанию и стать её директором"
    },
    {
      icon: "🏢",
      title: "Управление компаниями",
      description: "Директора могут привязывать сотрудников к компании по ID. Управление структурой компании и доступом к информации"
    },
    {
      icon: "📊",
      title: "Матрица компетенций",
      description: "Руководители направляют матрицы компетенций сотрудникам для заполнения. Компетенции сохраняются как в профиле сотрудника, так и в базе компании"
    },
    {
      icon: "🔍",
      title: "База талантов",
      description: "Доступ к базе всех сотрудников, не привязанных к компаниям. Рекрутеры могут находить специалистов по их матрицам компетенций"
    }
  ]

  return (
    <Container>
      <View style={[styles.mainLayout, { height: containerHeight }]}>
        <View style={styles.sidebar}>
          <View style={styles.sidebarContent}>
            <Text style={styles.title}>Matrix</Text>
            <Text style={styles.subtitle}>
              Платформа управления компетенциями и талантами
            </Text>
            <View style={styles.buttonsContainer}>
              <Link href="/auth/register" style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>
                  Начать работу
                </Text>
              </Link>
              
              <Link href="/auth/login" style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>
                  Уже есть аккаунт? Войти
                </Text>
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.featureCardsRow}>
            {features.map((card, index) => (
              <View key={index} style={[styles.featureCardWrapper, { width: cardWidth }]}>
                <FeatureCard {...card} />
              </View>
            ))}
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    flexDirection: 'row',
    gap: 24,
    padding: 24,
    alignSelf: 'center',
    width: '100%',
  },
  sidebar: {
    width: '30%',
    backgroundColor: getColor('background', 'primary'),
    borderRadius: 16,
    padding: 24,
    shadowColor: getColor('text', 'primary'),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center',
  },
  sidebarContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: getColor('background', 'primary'),
    borderRadius: 16,
    padding: 24,
    shadowColor: getColor('text', 'primary'),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: getColor('text', 'primary'),
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: getColor('text', 'secondary'),
    marginBottom: 32,
  },
  featureCardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCardWrapper: {
    marginBottom: 16,
  },
  buttonsContainer: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: getColor('primary', 'lavender'),
    padding: 16,
    borderRadius: 12,
    shadowColor: getColor('text', 'primary'),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButtonText: {
    color: getColor('text', 'primary'),
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: getColor('background', 'primary'),
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: getColor('border', 'light'),
  },
  secondaryButtonText: {
    color: getColor('text', 'secondary'),
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default WelcomeComponent;