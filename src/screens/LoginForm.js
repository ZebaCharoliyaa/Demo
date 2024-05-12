import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacityBase, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const LoginForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.formContainer}>
        <Text style={styles.titletxt}>Hi, Welcome back..</Text>
        <Text style={styles.subtitle}>Hello Again, You have been missed</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>E-mail</Text>
        <TextInput placeholder='Enter Email' style={styles.input}></TextInput>
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.lable}>Password</Text>
        <TextInput placeholder='Enter Password' style={styles.input}></TextInput>
      </View>
      <View>
        <TouchableOpacity onPress={() => {alert('Forget clicked')}}>
            <Text style={styles.forget}>Forgot Pasword?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {alert('Submit Succesfully..')}}>
            <Text style={styles.btntxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    heading:{
        color:'#000',
        fontSize: 30,
        marginTop:20,
        textAlign:'center',
        fontWeight:'bold',
    },
    formContainer:{
        marginHorizontal:24,
        flexDirection:'column',
        marginTop:20,
    },
    titletxt:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
    },
    subtitle:{
        color:'#000',
        fontWeight:'600'
    },
    inputContainer:{
        marginHorizontal:20,
        marginTop:30,
    },
    lable:{
        color:'#000',
        fontSize:16,
        marginBottom:10,
    },
    input:{
        borderWidth:1,
        padding:14,
        borderColor:'#E1E1E1',
        borderRadius: 12,
        color: '#000',
    },
    forget:{
        textAlign:'right',
        marginTop:24,
        fontSize: 16,
        color:'#000',
        marginHorizontal:24,
    },
    btn:{
        backgroundColor: '#4818CF',
        width: '75%',
        height: 56,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 44,
        marginHorizontal:50,
        borderRadius: 12,
    },
    btntxt:{
        fontSize: 17,
        fontWeight:'bold',
        color: '#fff',
    },
});

export default LoginForm