import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}

const CustomSwitch = ({ isOn, onChange }:Props) => {
  
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () =>{ 
        setIsEnabled(!isEnabled)
        onChange( !isEnabled)
    }

    return (
    <Switch
    trackColor={{ false: "#D9D9DB", true: "#81b0ff" }}
    thumbColor={isEnabled ? "white" : "#f4f3f4"}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  />
  )
}

export default CustomSwitch

const styles = StyleSheet.create({})