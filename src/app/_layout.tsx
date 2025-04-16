import { Stack } from 'expo-router';
import React from 'react';
import "./global.css"

const Layout = () => {
  return (
    <Stack initialRouteName='index'>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name="(auth)"  options={{ headerShown: false }} />
    </Stack>          
  );
};

export default Layout;