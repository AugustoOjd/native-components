import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfinityScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])
    const { theme: {colors} } = useContext(ThemeContext)

    const loadMore = () =>{

        const newArray: number[] = []
        for (let i = 0; i < 5; i++) {
            
            newArray[i] = numbers.length + i
            
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1000);
       
    }

  return (
    <View style={{ flex: 1}}>
      

        <FlatList
            ListHeaderComponent={()=> (
                <View
                    style={{
                        alignSelf: 'center'
                    }}
                >
                    <HeaderTitle title='Infinity Scroll'/>
                </View>
            )}
            data={numbers}
            keyExtractor={ (item) => item.toString()}
            renderItem={({ item}) => <Text style={{ height: 150, color: colors.text}}> {item} </Text> }

            onEndReached={ () => loadMore()}
            onEndReachedThreshold={ 0.5 }
        />

    </View>
  )
}

export default InfinityScrollScreen

const styless = StyleSheet.create({})