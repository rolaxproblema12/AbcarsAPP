import { View, Text,SafeAreaView,TextInput,StyleSheet,Button, Image} from 'react-native'
import React from 'react'
import Buttonn from './Buttonn'

export default function Body(props) {
    const {navigation} = props;

return (
    <SafeAreaView style= {styles.container}>
        <View>
            <Image style={styles.img} source={require('../../assets/coche.png')}></Image>
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value='Hola' 
                placeholder="Correo"
                keyboardType="Email"/>
            <TextInput 
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value='Hola' 
                placeholder="Contraseña"
                keyboardType="Password"/>
            <Buttonn navigation={navigation}></Buttonn>
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    form: {
        position: 'absolute',
        alignItems: 'center',
    },
    img:{
        position: 'relative',
        opacity: 0.3,
    },
    container: {
        alignItems: 'center',
        marginTop: 40,
        zIndex:2,
        
    },
    input: {
        margin: 10 ,
        padding: 10,
        borderColor: "black",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        borderWidth: 2,
        width: 300,
        height: 60,
    }
})