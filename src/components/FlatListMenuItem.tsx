import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MenuItems } from '../interface/MenuItem'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


interface Props {
    menuItem: MenuItems,
}

const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation<any>()

  return (

    <TouchableOpacity
        activeOpacity={0.5}
        onPress={ ()=> navigation.navigate( menuItem.components )}
    >
        <View
            style={
                styles.container
            }
        >
            <Icon
                name={ menuItem.icon}
                color={ 'gray' }
                size={ 20 }
            />
            <Text
                style={ styles.itemText }
            >
              { menuItem.name }
            </Text>

            <View style={{flex: 1}}/>
            <Icon
                name={ 'arrow-forward-outline' }
                color={ 'green' }
                size={ 20 }
            />
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})

export default FlatListMenuItem