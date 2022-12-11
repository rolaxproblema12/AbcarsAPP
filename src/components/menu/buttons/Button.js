import { View, Text,StyleSheet,Image,TouchableWithoutFeedback} from 'react-native'
import React from 'react'

export default function Button(props) {
const {text} = props;
// console.log(image)
const oppenCamera = () => {
    console.log('hello world')
}
    return (
    <TouchableWithoutFeedback  onPress={oppenCamera}>
        <View style ={styles.buttonBg}>
            <Image source={require('../../../assets/carro-deportivo1.png')} style={styles.img}></Image>
            <Text style={styles.textButton}>{text}</Text>
        </View>


    </TouchableWithoutFeedback>
)
}
const styles = StyleSheet.create({
    buttonBg: {
        // backgroundColor: 'black',
        marginTop: 50,
        marginBottom :  10,
        marginEnd:10,
        marginLeft: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 4,
    },
    textButton:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:30,
        textAlign: 'center',
    },
    img: {
        position: 'absolute',
        height: 130,
        width: 130,
        opacity:0.2
    }
})