import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View , Image, FlatList} from 'react-native';
import { useState } from 'react';
import Login from './App/Screens/LoginScreen/Login';
export default function App() {
  
  return (
    <View style={styles.main}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    textAlign:'center'
  },
});
