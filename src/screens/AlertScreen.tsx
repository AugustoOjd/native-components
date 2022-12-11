import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'

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

  return (
    <View
        style={ styles.container}
    >
      <HeaderTitle title='Alerts'/>

      <Button 
        title='Show Alert'
        onPress={ ()=> showAlert()}
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