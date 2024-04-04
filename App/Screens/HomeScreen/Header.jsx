import { useUser } from '@clerk/clerk-expo'
import React, { Component } from 'react'
import { Text, View , StyleSheet, Image, TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const{user,isLoading}=useUser();
    return user&&(
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileInfoConrainer}>
                    <Image 
                        style={styles.profilePic} 
                        source={{uri:user?.imageUrl}}
                    />
                    <View style={{marginTop:7}}>
                        <Text style={{color:Colors.WHITE, fontSize:18}}>Welcome,</Text>
                        <Text 
                            style={{
                                color:Colors.WHITE,
                                fontWeight:'bold',
                                fontSize:18
                            }}
                        >{user.fullName}</Text>
                    </View>
                </View>

            <FontAwesome name="bookmark-o" size={40} color={Colors.WHITE} />
            </View>
            {/* searchbar */}
            <View style={styles.searchBarCont}>
                <TextInput placeholder='Search'
                style={styles.textInpt}/>
                <View style={styles.SearchBtn}>
                    <FontAwesome 
                        name="search" size={24} color={Colors.PRIMARY}/>
                </View>
            </View>

        </View>
    )
  
}
const styles=StyleSheet.create({
    profilePic:{
        width:56,
        height:56,
        borderRadius:99,
        
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    container:{
        padding:20,
        paddingTop:15,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    profileInfoConrainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    textInpt:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:78,
        width:'85%'
    },
    searchBarCont:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10
    },
    SearchBtn:{
       
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:78,
        
    }
})