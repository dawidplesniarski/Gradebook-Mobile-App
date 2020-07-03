import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Screen from './Screen';
import axios from 'axios';
import Button from '../components/Button';


const Quiz = ({navigation}) => {
    const [data, setData] = useState([]);
    const [questionIndex, setIndex] = useState(0);

    const incrementIndex = () => {
        setIndex(questionIndex+1);
    }

    useEffect(() => {
        axios.get('https://quiztai.herokuapp.com/api/quiz')
            .then(res =>{
                setData(res.data)
            })
            .catch(err=>{
                console.log(err);
            });
    },[]);

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>Question: {data[0].question}</Text>
            <Text style={styles.questionText}>Answers:</Text>
            <View style={styles.answersContainer}>
                <TouchableOpacity>
                    <Text style={styles.answersText}>A: {data[0].answers[0]}</Text>
                </TouchableOpacity><TouchableOpacity>
                <Text style={styles.answersText}>B: {data[0].answers[1]}</Text>
            </TouchableOpacity><TouchableOpacity>
                <Text style={styles.answersText}>C: {data[0].answers[2]}</Text>
            </TouchableOpacity><TouchableOpacity>
                <Text style={styles.answersText}>D: {data[0].answers[3]}</Text>
            </TouchableOpacity>
            </View>
            <Button text={'Next'} isButtonDark={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        height:'50%',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    questionText:{
        fontSize: 20,
        fontFamily: 'Futura'
    },
    answersContainer:{
        borderWidth:1,
        borderRadius:10,
        width:'90%',
    },
    answersText:{
       fontSize:15,
       fontFamily:'Futura'
    },
})

export default Quiz;
