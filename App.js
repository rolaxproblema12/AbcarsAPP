import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgb(238,184,56)',
    // backgroundColor: 'linear-gradient(0deg, rgba(238,184,56,1) 18%, rgba(254,255,0,1) 100%)'
  },
});
