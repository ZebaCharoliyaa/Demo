import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Screens = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Screens</Text>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  txt:{
    color: "red",
    justifyContent:'center',
    textAlign:'center',
  },
});
export default Screens