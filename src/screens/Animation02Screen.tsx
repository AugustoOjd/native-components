import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native'
import React from 'react'
import { useRef } from 'react';

const Animation02Screen = () => {

  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y
        }
      ],
      {
        useNativeDriver: false
      }),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue:  {x: 0, y: 0}, useNativeDriver: false  } // Back to zero
        ).start();
      },
  })

  return (
    <View
        style={ styles.container}
    >

        <Animated.View
            { ...panResponder.panHandlers }
            style={ [ pan.getLayout(), styles.blueBox ] }
        />
      <Text>Animation02Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blueBox: {
        backgroundColor: '#75CEDB',
        borderRadius: 8,
        width: 120,
        height: 120
    }
})

export default Animation02Screen