import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const InfinityScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

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
            renderItem={({ item}) => <Text style={{ height: 150}}> {item} </Text> }

            onEndReached={ () => loadMore()}
            onEndReachedThreshold={ 0.5 }
        />

    </View>
  )
}

export default InfinityScrollScreen

const styless = StyleSheet.create({})