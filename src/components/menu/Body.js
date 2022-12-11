import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Button from './buttons/Button'

export default function Body() {
return (
    <SafeAreaView style= {styles.container}>
        <Button text={'Ingresar Automovil'}/>
        <Button text={'Salida de Automovil'}/>
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
