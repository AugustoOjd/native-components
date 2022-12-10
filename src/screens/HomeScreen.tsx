import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';


const menuItems = [
  {
    name:         'Animation 01',
    icon:         'happy-outline',
    components:   'Animation01Screen'
  },
  {
    name:         'Animation 02',
    icon:         'albums-outline',
    components:   'Animation02Screen'
  }
]


const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  const renderListHeader = () =>{
    return(
      <View
        style={{
          marginTop: top + 20,
          marginBottom: 20
        }}
      >
        <Text
          style={styles.title}
        >
          Lista de opciones
        </Text>
      </View>
    )
  }

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
        ListHeaderComponent={ renderListHeader }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  )
}

export default HomeScreen