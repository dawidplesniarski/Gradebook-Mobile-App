import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import axios from 'axios';



const ChooseQuiz = ({navigation}) => {
    const [data, setData] = useState([]);


    async function getCategories(){
        await axios.get('https://node-app-4fun.herokuapp.com/test/findAllTestsCategory')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getCategories();
    },[]);

    if(data.length ===0){
        return(
            <View/>
        )}
    else{
        return (
            <View style={styles.container}>
                <Picker selectedValue = {'test'} >
                    {data.map((value)=><Picker.Item label={value} value={value}/>)}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default ChooseQuiz;
