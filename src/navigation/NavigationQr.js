import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/Menu';
// import ScaanQr from '../screens/ScaanQr';
const Stack = createNativeStackNavigator ();

export default function NavigationQr() {
  return (
    <Stack.Navigator initialRouteName='Menu'>
      <Stack.Screen name="Menu" component={Menu} options={{title:"", headerBackVisible: false, headerTransparent: true}}/>
      {/* <Stack.Screen name="ScaanQr" component={ScaanQr} options={{title:"", headerTransparent: true}}/> */}
    </Stack.Navigator>
  )
}