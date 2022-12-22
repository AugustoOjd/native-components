import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { MenuItems } from '../interface/MenuItem'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useNavigation} from '@react-navigation/native'
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    menuItem: MenuItems,
}

const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation<any>()
    const { theme: { colors} } = useContext(ThemeContext)

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
                color={  colors.primary }
                size={ 20 }
            />
            <Text
                style={ {
                    ...styles.itemText,
                    color: colors.text
                }}
            >
              { menuItem.name }
            </Text>

            <View style={{flex: 1}}/>
            <Icon
                name={ 'arrow-forward-outline' }
                color={ colors.primary }
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