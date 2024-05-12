import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageFile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./img/i3.jpg')} style={styles.img}/>
      <View >
        <Text style={styles.txt}>Session Check-In</Text>
        <Text style={styles.heading}>Reflect on your feelings</Text>
        <Text style={styles.subtitle}>Take amoment and answer a few questions  before moving to the next exercise</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>Start Check-In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.btntxt2}>Later</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.conain}>
        <Text style={styles.lasttxt}>Note that you won't be able to proceed to the next touch session unless you complete the chock-in</Text>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    img:{
        height:400,
        width:450,
    },
    container:{
        flex:1,
        backgroundColor:'#000435',
    },
    txt:{
        alignItems:'center',
        textAlign:'center',
        marginTop:20,
        color:"#fff",
        fontSize:15,
    },
    heading:{
        textAlign:'center',
        fontSize:20,
        color:"#fff",
        marginTop:20,
        fontWeight:"bold",

    },
    subtitle:{
        marginHorizontal:20,
        textAlign:'center',
        fontSize:18,
        marginTop:20,
        color:'#fff',
    },
    btn:{
        backgroundColor: '#4818CF',
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 44,
        marginHorizontal:30,
        borderRadius: 25,
    },
    btntxt:{
        fontSize:20,
        color:"#fff"
    },
    btn2:{
        backgroundColor: '#d3d3d3',
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:20,
        marginHorizontal:30,
        borderRadius: 25,
    },
    btntxt2:{
        fontSize:20,
        color:"#000435",
    },
    conain:{
        marginHorizontal:20,
        marginTop:20
    },
    lasttxt:{
        color:'#fff',
        textAlign:'center'
    },
})
export default ImageFile