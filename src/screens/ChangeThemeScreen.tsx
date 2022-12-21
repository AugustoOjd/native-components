import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ChangeThemeScreen = () => {
  return (
    <View
        style={styles.globalMargin}
    >
      <HeaderTitle title='Change Theme'/>

      <TouchableOpacity
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
        > Light / Dark</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeThemeScreen