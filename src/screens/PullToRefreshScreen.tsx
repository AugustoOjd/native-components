import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () =>{
        setRefreshing(true)

        setTimeout(() => {
            
            console.log('terminamos')
            setRefreshing(false)
            setData('Hola mundoo')
        }, 2500);
    }

  return (

    <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={ onRefresh }
                progressBackgroundColor={'white'}
                colors={ ['green', 'orange', 'red']}
            />
        }
    >
        <View
            style={ styles.globalMargin }
        >
          <HeaderTitle title='Pull to refresh'/>

          <HeaderTitle title={data ?? ''}/>
        </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen

const styless = StyleSheet.create({})