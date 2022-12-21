import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import HomScreen from './src/screens/HomeScreen';
import Navigator from './src/navigator/Navigator';

const customTheme:Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: 'red';
    background: 'black',
    // card: 'red';
    text: 'white',
    // border: 'red';
    // notification: 'red';
  }
}

const App = () => {
  return (
    <NavigationContainer
      theme={customTheme}
    >
      <Navigator/>
    </NavigationContainer>
  )
}

export default App
