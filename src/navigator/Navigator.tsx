import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfinityScrollScreen from '../screens/InfinityScrollScreen';
import InfinityImgScrollScreen from '../screens/InfinityImgScrollScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
          // headerShown: false
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
    >
      <Stack.Screen name="HomeScreen"                 component={HomeScreen} />
      <Stack.Screen name="Animation01Screen"          component={Animation01Screen} />
      <Stack.Screen name="Animation02Screen"          component={Animation02Screen} />
      <Stack.Screen name="SwitchScreen"               component={SwitchScreen} />
      <Stack.Screen name="AlertScreen"                component={AlertScreen} />
      <Stack.Screen name="TextInputScreen"            component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen"        component={PullToRefreshScreen} />
      <Stack.Screen name="SectionListScreen"          component={SectionListScreen} />
      <Stack.Screen name="ModalScreen"                component={ModalScreen} />
      <Stack.Screen name="InfinityScrollScreen"       component={InfinityScrollScreen} />
      <Stack.Screen name="InfinityImgScrollScreen"    component={InfinityImgScrollScreen} />

    </Stack.Navigator>
  );
}

export default Navigator