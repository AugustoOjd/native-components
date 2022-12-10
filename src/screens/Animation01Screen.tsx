import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const Animation01Screen = () => {

    const opacity = useRef( new Animated.Value(0.1)).current
    const top = useRef( new Animated.Value(-160)).current

    
    const fadeIn = () =>{

        Animated.timing(
            opacity, 
            {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            }
        ).start()

        Animated.timing(
            top,
            {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, 
            {
                toValue: 0.1,
                duration: 800,
                useNativeDriver: true,
            }
        ).start( ()=> console.log('Esto recibe un callback cuando termina'))

        Animated.timing(
            top,
            {
                toValue: -160,
                duration: 800,
                useNativeDriver: true
            }
        ).start()
    }

  return (
    <View
        style={ styles.container }
    >
        <Animated.View
            style={{
                ...styles.purpleBox,
                opacity:    opacity,
                transform: [
                    {
                        translateY: top
                    }
                ]
            }}
        />
      
      <View
        style={ styles.btnContainer}
      >
        <Button
          title='Fadein'
          onPress={ ()=> fadeIn() }
        />

        <Button
          title='Fadeout'
          onPress={ ()=> fadeOut() }
        />

      </View>

    </View>
  )
}

export default Animation01Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        marginBottom: 15
    },
    btnContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 150,
    }
})