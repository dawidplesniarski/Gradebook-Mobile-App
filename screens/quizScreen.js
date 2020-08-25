import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import {NavigationActions} from 'react-navigation';


const QuizScreen = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [answersDisabled, setAnswersDisabled] = useState(false);
    const [firstAnswerCorrect, setFirstAnswerCorrect] = useState(false);
    const [secondAnswerCorrect, setSecondAnswerCorrect] = useState(false);
    const [thirdAnswerCorrect, setThirdAnswerCorrect] = useState(false);
    const [fourthAnswerCorrect, setFourthAnswerCorrect] = useState(false);

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
        setAnswersDisabled(false);
        setFirstAnswerCorrect(false);
        setSecondAnswerCorrect(false);
        setThirdAnswerCorrect(false);
        setFourthAnswerCorrect(false);
        if(questionIndex < data.length - 1){
            setQuestionIndex(questionIndex + 1);
        }
    };

    const checkIfCorrectAnswer = (answerIndex) => {
        setAnswersDisabled(true);
        if (data[questionIndex].correctAnswer === data[questionIndex].answers[answerIndex]) {
            if(answerIndex === 0){
                setFirstAnswerCorrect(true);
            } else if(answerIndex === 1){
                setSecondAnswerCorrect(true);
            } else if(answerIndex === 2){
                setThirdAnswerCorrect(true);
            } else {
                setFourthAnswerCorrect(true);
            }
            setUserScore(userScore + 1);
        }
    };

    useEffect(() => {
        fetchQuiz();
    }, []);

    if(data.length === 0){
        return(
            <View/>
        );
    } else{
        return (
            <View style={styles.container}>
                <Text>Punkty: {userScore}</Text>
                <Text style={styles.questionText}>Pytanie: {data[questionIndex].question}</Text>
                <Text style={styles.questionText}>Odpowiedzi:</Text>
                <View style={styles.answersContainer}>
                    <TouchableOpacity
                        disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(0)}
                        style={firstAnswerCorrect ? styles.correctAnswerButton : styles.none}
                    >
                        <Text style={styles.answersText}>A: {data[questionIndex].answers[0]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(1)}
                        style={secondAnswerCorrect ? styles.correctAnswerButton : styles.none}
                    >
                        <Text style={styles.answersText}>B: {data[questionIndex].answers[1]}</Text>
                    </TouchableOpacity>

                    { data && data[questionIndex].answers[2] &&
                    <TouchableOpacity
                        disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(2)}
                        style={thirdAnswerCorrect ? styles.correctAnswerButton : styles.none}
                    >
                        <Text style={styles.answersText}>C: {data[questionIndex].answers[2]}</Text>
                    </TouchableOpacity>
                    }

                    { data && data[questionIndex].answers[3] &&
                    <TouchableOpacity
                        disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(3)}
                        style={fourthAnswerCorrect ? styles.correctAnswerButton : styles.none}
                    >
                        <Text style={styles.answersText}>D: {data[questionIndex].answers[3]}</Text>
                    </TouchableOpacity>
                    }
                </View>
                <Button text={'Następne pytanie'} isButtonDark={true} onPress={() => incrementIndex()}/>
                <Text>{`${testCategory}`}</Text>
                {/*<Button text={'back'} isButtonDark={true} onPress={()=> navigation.navigate('ChooseQuiz')}/>*/}
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
    correctAnswerButton:{
       backgroundColor : '#CAF5C6'
    },
    none:{
    }
});

export default QuizScreen;
