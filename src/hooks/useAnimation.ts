import { useRef } from "react"
import { Animated, Easing } from "react-native"


export const useAnimation = () =>{

    const opacity   = useRef( new Animated.Value(0)).current
    const position       = useRef( new Animated.Value(-160)).current

    
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
            position,
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
            position,
            {
                toValue: -160,
                duration: 800,
                useNativeDriver: true
            }
        ).start()
    }

    const startMoving = ( initPosition: number, duration: number = 300 ) =>{
        
        position.setValue(initPosition)

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        ).start()
    }

    return {
        opacity,
        position,
        startMoving,
        fadeIn,
        fadeOut
    }
}