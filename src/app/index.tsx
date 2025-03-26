import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import MainPage from 'src/components/mainPage/mainPage';
import { useResize } from 'src/hooks/useResize';
import { MatchesContextProvider } from 'src/utils/matchesContext';

const App = () => {
  const [ appIsReady, setAppIsReady ] = useState(false);
  const { isScreenS } = useResize();

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
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <MatchesContextProvider>
      <ScrollView
          scrollEnabled={!isScreenS ? true : false}
          style={{flex: 1, backgroundColor: '#06080C'}}
        >
      <View style={{flex: 1, backgroundColor: '#06080C'}} onLayout={onLayoutRootView}>
        <MainPage />
      </View>
      </ScrollView>
    </MatchesContextProvider>
  );
};

export default App;