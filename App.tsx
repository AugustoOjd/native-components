import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomScreen from './src/screens/HomeScreen';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App
