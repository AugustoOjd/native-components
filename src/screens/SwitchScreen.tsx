import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive:   true,
        isHungry:   false,
        isHappy:    true
    })
    const { theme: {colors}} = useContext(ThemeContext)

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
        <Text style={
            {
                ...styles.jsonText,
                color: colors.text}}>
            isActive
        </Text>
        <CustomSwitch isOn={isActive} onChange={(value)=> onChange(value, 'isActive')}/>
    </View>

    <View style={ styles.switchRow }>
        <Text style={
            {
                ...styles.jsonText,
                color: colors.text}}>
            isHungry
        </Text>
        <CustomSwitch isOn={isHungry} onChange={(value)=> onChange(value, 'isHungry')}/>
    </View>

    <View style={ styles.switchRow }>
        <Text style={
            {
                ...styles.jsonText,
                color: colors.text}}>
            isHappy
        </Text>
        <CustomSwitch isOn={isHappy} onChange={(value)=> onChange(value, 'isHappy')}/>
    </View>
    

    <Text
        style={ 
            {
                ...styles.jsonText,
            color: colors.text}}
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
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})