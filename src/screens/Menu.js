import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import Header from '../components/menu/Header'
import Body from '../components/menu/Body'
import Footer from '../components/menu/Footer'


export default function Menu() {
return (
    <SafeAreaView>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </SafeAreaView>
)
}