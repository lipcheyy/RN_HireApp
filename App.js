import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View , Image, FlatList} from 'react-native';
import { useState } from 'react';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";
export default function App() {
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_ZmxleGlibGUtYmFzcy03LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View style={styles.main}>
    <SafeAreaView style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login></Login>
        </SignedOut>
      </SafeAreaView>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  main:{
    textAlign:'center'
  },
});
