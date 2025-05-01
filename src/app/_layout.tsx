import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
// import { store } from '../store';
// import { loadStoredUser } from '../store/slices/authSlice';
import "./global.css"

export default function RootLayout() {
  // React.useEffect(() => {
  //   store.dispatch(loadStoredUser());
  // }, []);

  return (
    // <Provider store={store}>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="(app)"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>
    // </Provider>
  );
}