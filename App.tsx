import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import HomScreen from './src/screens/HomeScreen';
import Navigator from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme:Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: 'red';
//     background: 'black',
//     // card: 'red';
//     text: 'white',
//     // border: 'red';
//     // notification: 'red';
//   }
// }

const App = () => {
  return (
    <AppState>


        <Navigator/>

    </AppState>
  )
}

const AppState= ({children}: any) =>{

  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
