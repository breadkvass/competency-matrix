import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, useWindowDimensions, DimensionValue } from 'react-native';
import { COLORS } from '../constants/colors';
import WelcomeComponent from 'src/components/welcomeComponent/WelcomeComponent';

const App = () => {
  const [ appIsReady, setAppIsReady ] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          InterMed: require('../assets/fonts/InterMed.ttf'),
          InterSemiBold: require('../assets/fonts/InterSemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ScrollView
      scrollEnabled={true}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View 
        style={styles.container} 
        onLayout={onLayoutRootView}
      >
        <WelcomeComponent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: COLORS.background.secondary,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background.secondary,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    width: 96,
    height: 96,
    backgroundColor: COLORS.background.secondary,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary.teal,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text.primary,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.text.secondary,
    maxWidth: 600,
  },
  featuresContainer: {
    marginBottom: 48,
  },
  featureCardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 16,
  },
  featureCardWrapper: {
    marginBottom: 24,
  },
  buttonsContainer: {
    gap: 16,
    maxWidth: 400,
    marginHorizontal: 'auto',
  },
  primaryButton: {
    backgroundColor: COLORS.primary.lavender,
    padding: 16,
    borderRadius: 12,
  },
  primaryButtonText: {
    color:  COLORS.text.primary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: COLORS.background.primary,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border.light,
  },
  secondaryButtonText: {
    color: COLORS.text.secondary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default App;