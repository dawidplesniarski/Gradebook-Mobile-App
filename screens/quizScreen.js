import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';


const QuizScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const testCategory = navigation.getParam('testCategory');

    async function fetchQuiz() {
        await axios.get(`https://node-app-4fun.herokuapp.com/test/findByCategory/${testCategory}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
    }

    const incrementIndex = () => {
        if(questionIndex < data.length - 1){
            setQuestionIndex(questionIndex + 1);
        }
    }

    // const checkIfCorrectAnswer = (answerIndex) => {
    //     if(data[questionIndex])
    // }

    useEffect(() => {
        fetchQuiz();
    }, []);

    if(data.length === 0){
        return(
            <View/>
        );
    } else{
        return (
            <View>
                <Text>Punkty: {userScore}</Text>
                <Text style={styles.questionText}>Pytanie: {data[questionIndex].question}</Text>
                <Text style={styles.questionText}></Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
   container: {
       display: 'flex',
       height: '50%',
       alignItems: 'center',
       justifyContent: 'space-around'
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
});

export default QuizScreen;
