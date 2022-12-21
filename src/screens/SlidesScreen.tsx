import { View, Text, SafeAreaView, ImageSourcePropType, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const {width: screenWidth} = Dimensions.get('window')

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}:Props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    // const [isvisible, setIsvisible] = useState(false)
    const isvisible = useRef(false)
    const {opacity, fadeIn} = useAnimation()

    const renderItem = (item: Slide)=> {
        return (
        <View
            style={{
                flex: 1, 
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
                padding: 35
            }}
        >
            <Image
                source={ item.img }
                style={{
                    width: 350,
                    height:400,
                    resizeMode: 'center'
                }}
            />

            <Text style={ styless.title}> {item.title} </Text>
            <Text style={ styless.subTitle}> {item.desc} </Text>
        </View>
        
        )
    }
  return (
    <SafeAreaView
        style={{
            flex: 1,
            // backgroundColor: 'orange',
            paddingTop: 20
        }}
    >
       <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={items}
              renderItem={ ({item}) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={ (index) => {
                    setActiveIndex(index)
                    if( index === 2){
                        isvisible.current = true
                        fadeIn()
                    }
              }}
            />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20
        }}>
            <Pagination
                dotsLength={ items.length }
                activeDotIndex={ activeIndex }
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#5856D6'
                }}
            />

                <Animated.View 
                    style={{
                    opacity: opacity
                }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856D6',
                            width: 130,
                            height: 45,
                            borderRadius: 10,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                        activeOpacity={ 0.2}
                        onPress={ ()=> {
                            if(isvisible.current){
                                navigation.navigate('HomeScreen')
                            }
                        }}
                    >
                        <Text style={{
                            fontSize: 25,
                            color: 'white'
                        }}>
                            Entrar
                        </Text>
                        <Icon
                            name='arrow-forward-circle-outline'
                            color={'white'}
                            size={35}
                        />

                    </TouchableOpacity>
                </Animated.View>
            

        </View>

    </SafeAreaView>
  )
}

const styless = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16
    }
})

export default SlidesScreen