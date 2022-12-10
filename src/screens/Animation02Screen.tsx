import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Animation02Screen = () => {
  return (
    <View
        style={{
            flex: 1
        }}
    >

        <View 
            style={ styles.blueBox}
        />
      <Text>Animation02Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    blueBox: {
        backgroundColor: 'blue',
        width: 150,
        height: 150
    }
})

export default Animation02Screen