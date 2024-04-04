import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View , Image, FlatList} from 'react-native';
import { useState } from 'react';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from "expo-constants"
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNav';

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
   
        <SignedIn>
          {/* <Text>SignedIn</Text> */}
          <TabNavigation/>
        </SignedIn>
        <SignedOut>
          <Login></Login>
        </SignedOut>
    
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  // main:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  navContainer:{
    flex: 1,
    justifyContent: 'flex-end', // Для прикріплення навігації внизу
    alignItems: 'center',
  }
});