import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import axios from 'axios';



const ChooseQuiz = ({navigation}) => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');


    async function getCategories(){
        await axios.get('https://node-app-4fun.herokuapp.com/test/findAllCategories')
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

                <Picker
                    selectedValue={selectedItem}
                    onValueChange={value => {setSelectedItem(value)}}>
                    {data.map((value, index)=><Picker.Item label={`${value}`} value={`${value}`} key={index}/>)}
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default ChooseQuiz;
