import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Header/>
        </SafeAreaView>
    )
  
}
