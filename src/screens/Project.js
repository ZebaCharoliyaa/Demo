import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Project = () => {
    const Data=[
        {
            id: 1,
            title:'Desert abu dhabi',
            image:require('./img/desert.jpeg'),
        },
        {
            id: 2,
            title:'Bali',
            image:require('./img/bali.jpeg'),
        },
        {
            id: 3,
            title:'Bali',
            image:require('./img/bali.jpeg'),
        },
        {
            id: 4,
            title:'Bali',
            image:require('./img/bali.jpeg'),
        },
    ];
    const Item = ({title}) => {
        return(
            <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            </View>
        )
    };
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('./img/avtar.jpeg')} style={styles.avtar}/>
        <View>
            <Text style={styles.headind}>Escope the ordinary</Text>
            <Text style={styles.toptxt}>Dream Getaway</Text>
       
       <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
       data={Data}
       renderItem={({item}) => <Item title={item.title}/>}
       keyExtractor={item => item.id}/>
        </View>
        <View>
            <Text>Favorite Spots</Text>
            <Image source={require('./img/desert.jpeg')} style={styles.img}/>
            <Text style={styles.distxt}>The lonawala</Text>
            <Image source={require('./img/bali.jpeg')} style={styles.img}/>
            <Text style={styles.distxt}>The The Eiffel Tower</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        
    },
    avtar:{
        height: 60,
        width:60,
        marginLeft: 320,
    },
    headind:{
        fontSize:18,
        marginHorizontal:22

    },
    toptxt:{
        fontSize:40,
        fontWeight:'bold',
        marginHorizontal:22,
        color:"#000",
    },
    title:{
        marginTop:250,
        color:'#000',
        fontWeight:'600',
        fontSize:22,
    },
    item:{
        marginTop:30,
        padding:20,
        marginVertical:8,
        borderRadius:30,
        height:350,
        width:230,
        elevation:7,
        marginHorizontal:18,

    },
    img:{
        height:80,
        width:80,
        borderRadius:10,
        marginHorizontal:22

    },
    distxt:{
        fontSize:20,
        fontWeight:'bold',
        flexDirection:'row',
        color:'#000',
        marginLeft:150,
    },
})

export default Project