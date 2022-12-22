import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme} = useContext(ThemeContext)

  return (
    <View
        style={styles.globalMargin}
    >
      <HeaderTitle title='Change Theme'/>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={setLightTheme}
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#5656D6',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22
          }}
        > 
        Light 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#5656D6',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 22
          }}
        > 
        Dark 
        </Text>
      </TouchableOpacity>

      </View>


    </View>
  )
}

export default ChangeThemeScreen