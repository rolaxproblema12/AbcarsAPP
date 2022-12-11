import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Menu from '../screens/Menu';
const Stack = createNativeStackNavigator ();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{title:"", headerBackVisible: false, headerTransparent: true}} />
      <Stack.Screen name="Menu" component={Menu} options={{title:"", headerBackVisible: false, headerTransparent: true}}/>
    </Stack.Navigator>
  )
}