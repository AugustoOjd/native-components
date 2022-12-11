import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive:   true,
        isHungry:   false,
        isHappy:    true
    })

    const { isActive, isHungry, isHappy} = state

    const onChange = (value: boolean, text: string) => {
        setState({
            ...state,
            [text]: value
        })
    }

  return (
    <View
        style={styles.container}
    >

    <HeaderTitle title='Switches'/>
    
    <View style={ styles.switchRow }>
        <Text style={styles.jsonText}>
            isActive
        </Text>
        <CustomSwitch isOn={isActive} onChange={(value)=> onChange(value, 'isActive')}/>
    </View>

    <View style={ styles.switchRow }>
        <Text style={styles.jsonText}>
            isHungry
        </Text>
        <CustomSwitch isOn={isHungry} onChange={(value)=> onChange(value, 'isHungry')}/>
    </View>

    <View style={ styles.switchRow }>
        <Text style={styles.jsonText}>
            isHappy
        </Text>
        <CustomSwitch isOn={isHappy} onChange={(value)=> onChange(value, 'isHappy')}/>
    </View>
    

    <Text
        style={ styles.jsonText}
    >
        { JSON.stringify( state, null, 2)}
    </Text>
    </View>
  )
}

export default SwitchScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 30
    },
    jsonText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})