import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Demo = () => {
  return (
    <SafeAreaView>
        <Image source={require('./img/pay1.jpeg')} style={styles.img}/>
        <View style={styles.block}>
            <Text style={styles.txtHeading}> Payments for any business</Text>
            <Text style={styles.subtitle}>From e-commerce store to subscription business - we offer a complete stack for all your payment needs across channels</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    img:{
        width:420,
        height:500,
    },
    block:{
        backgroundColor:'#fff',
        borderRadius:40,
        marginTop:-80,
        height:450,
        // marginBottom:500,
    },
    txtHeading:{
        fontSize:35,
        textAlign:'center',
        color:"#000",
        fontWeight:'bold',
        marginHorizontal:20,
        marginTop:50
    },
    subtitle:{
        color:'#000',
        marginHorizontal:30,
        textAlign:'center',
        fontSize:20,
        marginTop:20,
    },
    btn:{
        backgroundColor:'blue',
        height:60,
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:80,
        marginTop:30,
        borderRadius:30,
        shadowColor:'light blue',
        marginBottom:50,
    },
    btntxt:{
        color:'#fff',
        fontSize:19
    },
});

export default Demo