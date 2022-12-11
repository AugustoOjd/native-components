import { Animated, Button, StyleSheet, View } from 'react-native'
import React from 'react'
import { useAnimation } from '../hooks/useAnimation';

const Animation01Screen = () => {

    const {opacity, position, startMoving, fadeIn, fadeOut} = useAnimation()

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
                        translateY: position
                    }
                ]
            }}
        />
      
      <View
        style={ styles.btnContainer}
      >
        <Button
          title='Fadein'
          onPress={ ()=> {
            fadeIn(),
            startMoving( -160, 800 )
            }
        }
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