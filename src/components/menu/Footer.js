import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.footerBg}>
      <Text style={styles.textFooter}>Autos Almacen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  footerBg: {
    backgroundColor: 'black',
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop:'10%',
  },
  textFooter: {
    marginTop: 10,
    textAlign : 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})