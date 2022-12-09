import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import * as Font from 'expo-font';
export default function Header() {
  return (
    <View style={styles.bgColor}>
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.image}></Image>
        <Text style= {styles.headerText}>Bienvenido</Text>
        <Text style= {styles.headerTextP}>Ingresa Usuario y Contraseña</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    bgColor:{
        backgroundColor: '#eeb838',
        paddingTop: 100,
        paddingBottom: 100,
    },  
    container :{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f1ff00',
    },
    image:{
        position: 'absolute',
        width :250,
        height: 50,
    },
    headerText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 
    },
    headerTextP: {
        color: '#a4a4a4',
        fontWeight: 'bold',
        fontSize: 30,
    }
})