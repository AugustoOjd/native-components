import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'

const InfinityImgScrollScreen = () => {

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

    const renderItem = (id: number) =>{
        return(
            <Image
              style={{ width: '100%', height: 400}} 
              source={{
                uri: `https://picsum.photos/id/${id}/200/300`
              }}

              />
        )
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
                <HeaderTitle title='Infinity Scroll Image'/>
            </View>
            )}
            data={numbers}
            keyExtractor={ (item) => item.toString()}
            renderItem={({ item}) =>  renderItem(item)}

            onEndReached={ () => loadMore()}
            onEndReachedThreshold={ 0.5 }

            ListFooterComponent={ () => (
                <View
                    style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ActivityIndicator size={20} color={'orange'}/>
                </View>
            )}
        />

    </View>
  )
}

export default InfinityImgScrollScreen

const styless = StyleSheet.create({})