import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuData';
import HeaderTitle from '../components/HeaderTitle';





const HomeScreen = () => {


  const itemSeparator = () =>{
    return(
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.5
        }}
      >

      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        ...styles.globalMargin
      }}
    >
      <FlatList
        data={menuItems}
        renderItem={ ({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={ (item)=> item.name }
        ListHeaderComponent={ () => <HeaderTitle title='Opciones de menu' /> }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  )
}

export default HomeScreen