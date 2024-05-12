import { View, Text ,StyleSheet,SafeAreaView,TextInput, TouchableOpacity, Alert} from 'react-native'
import React from 'react'

const LoginDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Topheading}>Coursera</Text>
      <Text style={styles.heading}>Welcome Back</Text>
      <View style={styles.formContainer}>
        {/* <Text style={styles.titletxt}>Hi, Welcome back..</Text> */}
        <Text style={styles.subtitle}>You can Search Course,Apply Course and find Scholarship for studies</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Email Address</Text>
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
            <Text style={styles.btntxt}>Sign in</Text>
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
    Topheading:{
        color:'#4818CF',
        fontSize: 30,
        marginTop:20,
        textAlign:'center',
        fontWeight:'bold',
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
        fontWeight:'600',
        textAlign: 'center'
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
        borderColor:'#696969',
        borderRadius: 12,
        color: '#000',
    },
    forget:{
        textAlign:'right',
        marginTop:24,
        fontSize: 16,
        color:'#fd8839',
        marginHorizontal:24,
        fontWeight: 'bold'
    },
    btn:{
        backgroundColor: '#4818CF',
        width: '90%',
        height: 56,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 35,
        marginHorizontal:24,
        borderRadius: 12,
    },
    btntxt:{
        fontSize: 17,
        fontWeight:'bold',
        color: '#fff',
    },
});

export default LoginDemo
