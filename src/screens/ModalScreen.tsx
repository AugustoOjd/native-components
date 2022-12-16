import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={ styles.globalMargin}>
        <HeaderTitle title='Modals'/>


        <Button
            title='Abrir modal'
            onPress={()=> {setIsVisible(true)}}
        />

        <Modal
            animationType='fade'
            visible={ isVisible }
            transparent

        >
            <View style={ styless.viewModal}>


                <View
                    style={ styless.bodyModal}
                >
                    <HeaderTitle title='Titulo modal'/>

                    <Text style={styless.textModal}>Cuerpo del modal</Text>

                    <Button
                        title='Cerrar'
                        onPress={() => setIsVisible(false)}
                    />
                </View>
            </View>

        </Modal>
    </View>
  )
}

export default ModalScreen

const styless = StyleSheet.create({
    viewModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    bodyModal: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 300,
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 6,
        borderRadius: 5
    },
    textModal: {
        fontSize: 16,
        marginBottom: 20
    }
})