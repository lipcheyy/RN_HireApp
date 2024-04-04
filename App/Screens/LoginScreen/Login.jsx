import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, TouchableOpacity} from 'react-native'
import Colors from '../../Utils/Colors';

export default function Login()  {
  return (
      <View style={{alignItems:'center'}}>
        <Image source={require('../../../assets/images/login.png')}
            style={styles.loginImage}/>

        <View style={styles.subContainer}>
            <Text style={{fontSize:26,color:Colors.WHITE, textAlign:'center'}}>
                lets find 
                <Text style={{fontWeight:'bold'}}>
                     professional cleaning and repair
                </Text> 
                servicess
            </Text>
            <Text style={{fontSize:17, color:Colors.WHITE,textAlign:'center',marginTop:20}}>Best App to find services near you which deliver you a professional service</Text>
            <TouchableOpacity style={styles.getStarted}
            onPress={()=>console.log(10)}>
                <Text 
                style={{textAlign:'center',
                color:Colors.PRIMARY}}>
                    Lets get started</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  
}
const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:16
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'70%',
        marginTop:-24,
        borderTopLeftRadius:28,
        borderTopRightRadius:28,
        padding:20,
        alignItems:'center'
    },
    getStarted:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:41,
        width:'70%',
        marginTop:90
    }
  });
