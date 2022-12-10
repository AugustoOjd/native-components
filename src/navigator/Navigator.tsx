import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          // headerShown: false
        }}
    >
      <Stack.Screen name="HomeScreen"         component={HomeScreen} />
      <Stack.Screen name="Animation01Screen"  component={Animation01Screen} />
      <Stack.Screen name="Animation02Screen"  component={Animation02Screen} />
    </Stack.Navigator>
  );
}

export default Navigator