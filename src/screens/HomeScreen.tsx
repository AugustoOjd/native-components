import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'


interface MenuItems {
  name:       string,
  icon:       string,
  components?: string
}

const menuItems = [
  {
    name:       'Animation 01',
    icon:       'happy-outline',
    components:  'Animation01Screen'
  }
]


const HomeScreen = () => {


  const renderMenuItem = ( menuItem: MenuItems) =>{
    return(
      <View>
        <Text>
          { menuItem.name } - { menuItem.icon }
        </Text>
      </View>
    )
  }

  return (
    <View
      style={ styles.base }
    >

      <FlatList
        data={menuItems}
        renderItem={ ({ item }) => renderMenuItem( item )}
        keyExtractor={ (item)=> item.name }
      />
      {/* <Icon 
        name='arrow-forward-circle-outline'
        size={30}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    // backgroundColor: 'blue'
  }
})

export default HomeScreen