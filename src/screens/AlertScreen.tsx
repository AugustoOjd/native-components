import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import prompt from 'react-native-prompt-android';

const AlertScreen = () => {


    const showAlert = () =>{
        Alert.alert(
            'Title: Alerta verde',
            'Mensaje de alerta',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Alerta cancelada'),
                    style: 'cancel'
                },
                {
                    text: 'Ok',
                    onPress: () => console.log('Ok pressed')
                }
            ],
            {
                cancelable: true
            }
        )
    }
    
    const showPrompt = () =>{
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }

  return (
    <View
        style={ styles.container}
    >
      <HeaderTitle title='Alerts'/>

      <Button 
        title='Show Alert'
        onPress={ ()=> showAlert()}
      />

      <View
        style={{ height: 10}}
      />

      <Button
        title='Show Prompt'
        onPress={ ()=> showPrompt()}
      />
    </View>
  )
}

export default AlertScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25
    }
})