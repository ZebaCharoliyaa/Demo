import { View, Text, SafeAreaView, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const Fletlist = () => {

    const Data = [
        {
            id: 1,
            title: 'T-shirt',
            image:require('./img/i2.png')
        },
        {
            id: 2,
            title: 'Shose',
        },
        {
            id: 3,
            title: 'Hoodie',
        },
        {
            id: 4,
            title: 'jeans',
        },
        {
            id: 5,
            title: 'T-shirt',
        },
        {
            id: 6,
            title: 'Shose',
        },
        {
            id: 7,
            title: 'Hoodie',
        },
        {
            id: 8,
            title: 'jeans',
        },
        {
            id: 9,
            title: 'T-shirt',
        },
        {
            id: 10,
            title: 'Shose',
        },
        {
            id: 11,
            title: 'Hoodie',
        },
        {
            id: 12,
            title: 'jeans',
        },
    ];
    const Item = ({title}) =>{
        return(
            <View style={styles.item}>
                <Text>{title}</Text>
            </View>
        )
    };
  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
        data={Data}
        renderItem={({ item}) => <Item title={item.title}/>}
        keyExtractor={item => item.id}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'

    },
    item:{
        backgroundColor:'#008631',
        padding: 20,
        marginVertical: 10,
        marginHorizontal:10,
        height: 150,
        width: 350,
        borderRadius:20,
    },
})

export default Fletlist