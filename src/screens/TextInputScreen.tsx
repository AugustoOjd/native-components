import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: ''
    // })


    // const onChange = ( value: string, field: string) =>{
    //     setForm({
    //         ...form,
    //         [field]: value
    //     })
    // }

  return (

    <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
    >

    <ScrollView>

    <View
        style={ styles.globalMargin}
    >
      <HeaderTitle title='Input text'/>

      <TextInput
        style={ styless.input }
        placeholder={ 'Ingrese nombre'}
        autoCapitalize='words'
        onChangeText={ (value) => onChange( value, 'name')}
      />

      <TextInput
          style={ styless.input }
          placeholder={ 'Ingrese email'}
          autoCapitalize={'none'}
          onChangeText={ (value) => onChange( value, 'email')}
          keyboardType='email-address'
        />

        <View style={ styless.switchRow }>
            <Text style={styless.jsonText}>
                Subscribirse
            </Text>
            <CustomSwitch isOn={isSubscribed} onChange={(value)=> onChange(value, 'isSubscribed')}/>
        </View>

<HeaderTitle title={JSON.stringify( form, null, 3)}/>

<HeaderTitle title={JSON.stringify( form, null, 3)}/>
      
      <TextInput
        style={ styless.input }
        placeholder={ 'Ingrese telefono'}
        onChangeText={ (value) => onChange( value, 'phone')}
        keyboardType='phone-pad'
      />


    <HeaderTitle title={JSON.stringify( form, null, 3)}/>
    
    
    </View>

    <View
        style={{ height: 100}}
    />

    </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default TextInputScreen


const styless = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      borderColor: 'rgba(0,0,0, 0.4)',
      marginVertical: 5
    },
    jsonText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
  });