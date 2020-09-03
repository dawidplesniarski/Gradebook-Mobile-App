import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Pie from 'react-native-pie';
import styles from '../styles/quizScreenStyles';

const QuizScreen = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [answersDisabled, setAnswersDisabled] = useState(false);
    const [firstAnswerCorrect, setFirstAnswerCorrect] = useState(false);
    const [secondAnswerCorrect, setSecondAnswerCorrect] = useState(false);
    const [thirdAnswerCorrect, setThirdAnswerCorrect] = useState(false);
    const [fourthAnswerCorrect, setFourthAnswerCorrect] = useState(false);
    const [testStarted, setTestStarted] = useState(false);
    const [testEnded, setTestEnded] = useState(false);

    const testCategory = navigation.getParam('testCategory');
    let userPercentage = eval(`${userScore} / ${data.length} * 100`);


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
        } else {
            setTestEnded(true);
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
        if(!testStarted){
            return(
                <View style={styles.startTestContainer}>
                    <Text style={styles.answersText}>{`Kategoria: ${testCategory}`}</Text>
                    <Text style={styles.answersText}>{`Ilość pytań: ${data.length}`}</Text>
                    <Button text={'Rozpocznij test'} isButtonDark={true} onPress={() => {setTestStarted(true)}}/>
                </View>
            );
        } else if(testEnded) {
            return(
                <View style={styles.container}>
                    <Text style={styles.answersText}>{`Twój wynik to ${userPercentage} %`}</Text>
                    { userPercentage > 50 ?
                    <Text style={{fontSize: 20, fontFamily:'Futura', color:'#7ff97c'}}>Test zaliczony</Text> :
                    <Text style={{fontSize: 20, fontFamily:'Futura', color:'#f54545'}}>Test nie zaliczony</Text>}
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{ width: 175, alignItems: 'center' }}>
                        <Pie
                            radius={80}
                            innerRadius={75}
                            sections={[
                                {
                                    percentage: (userScore / data.length) * 100,
                                    color: '#7FF97C',
                                },
                            ]}
                            backgroundColor="#ddd"
                        />
                    </View>

                    <Text>Punkty: {userScore}</Text>
                    <Text style={styles.questionText}>Pytanie: {data[questionIndex].question}</Text>
                    <View style={styles.answersContainer}>
                        <Text style={styles.questionText}>Odpowiedzi:</Text>
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
                    <Button text={'Następne pytanie'} disabled={!answersDisabled} isButtonDark={true} onPress={() => incrementIndex()}/>
                </View>
            );
        }
    }

};

export default QuizScreen;
