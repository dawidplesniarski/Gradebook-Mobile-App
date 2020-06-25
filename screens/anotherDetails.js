import React,{useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
        <View>
            <FlatList
                style={{borderWidth:1, height:'90%',width:'90%'}}
                data={data}
                renderItem={({item})=>(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );

}
