import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import set from '@babel/runtime/helpers/esm/set';

export default function({navigation}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://node-app-4fun.herokuapp.com/users/findAll')
            .then( res =>{
                setData(res.data)
        })
            .catch(err =>{
                console.log(err)
            });
    },[]);

     let renderItem = ({item, index})=>{
        <View>
            <Text>
                {item.name}
            </Text>
        </View>
    }

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item})=>(
                    <View style={styles.flatListContainer}>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Imie: {item.name}</Text>
                            <Text style={styles.flatListText}>Nazwisko: {item.lastName}</Text>
                        </View>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Numer albumu: {item.name}</Text>
                        </View>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Uczelnia: {item.university}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    flatList:{
        width:'90%',
        marginTop: 10,
    },
    flatListContainer:{
        borderWidth:1,
        borderRadius:7,
        marginBottom: 20,
    },
    flatListView:{
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10,
        marginLeft: 5,
    },
    flatListText:{
        fontSize:14,
        fontFamily: 'Futura',
        paddingRight: 20,
    }
});
