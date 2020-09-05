import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import Pie from 'react-native-pie';
import styles from '../styles/quizScreenStyles';
import {connect} from 'react-redux';
import {API_URL} from '../utils/helpers';


const QuizScreen = ({navigation, loginReducer}) => {
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
    let userPercentage = eval(`${userScore} / ${data.length} * 100`).toFixed(2);


    async function fetchQuiz() {
        await axios.get(`${API_URL}/test/findByCategory/${testCategory}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async function postTestGrade() {
        let gradeToPost = '';
        if (userPercentage < 50) {
            gradeToPost = '2.0';
        } else if (userPercentage > 49 && userPercentage < 61) {
            gradeToPost = '3.0';
        } else if (userPercentage > 60 && userPercentage < 71) {
            gradeToPost = '3.5';
        } else if (userPercentage > 70 && userPercentage < 81) {
            gradeToPost = '4.0';
        } else if (userPercentage > 80 && userPercentage < 91) {
            gradeToPost = '4.5';
        } else {
            gradeToPost = '5.0';
        }
        await axios.post(`${API_URL}/grades/addGrade`,
            {
                studentId: loginReducer.loginData.user._id,
                grade: gradeToPost,
                subject: `Test ${testCategory}`,
            });
    }

    async function deletePermission() {
        try {
            await axios.put(`${API_URL}/permission/deleteAlbum`,
                {
                    category: testCategory,
                    album: loginReducer.loginData.user.albumNo,
                });
        } catch (err) {
            console.log('Error while album delete');
        }
    }

    const incrementIndex = () => {
        setAnswersDisabled(false);
        setFirstAnswerCorrect(false);
        setSecondAnswerCorrect(false);
        setThirdAnswerCorrect(false);
        setFourthAnswerCorrect(false);
        if (questionIndex < data.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setTestEnded(true);
            postTestGrade().then(r => console.log('Grade post'));
            //deletePermission().then(r => console.log('Album deleted'));
        }
    };

    const checkIfCorrectAnswer = (answerIndex) => {
        setAnswersDisabled(true);
        if (data[questionIndex].correctAnswer === data[questionIndex].answers[answerIndex]) {
            if (answerIndex === 0) {
                setFirstAnswerCorrect(true);
            } else if (answerIndex === 1) {
                setSecondAnswerCorrect(true);
            } else if (answerIndex === 2) {
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

    if (data.length === 0) {
        return (
            <View/>
        );
    } else {
        if (!testStarted) {
            return (
                <View style={styles.startTestContainer}>
                    <Text style={styles.answersText}>{`Kategoria: ${testCategory}`}</Text>
                    <Text style={styles.answersText}>{`Ilość pytań: ${data.length}`}</Text>
                    <Button text={'Rozpocznij test'} isButtonDark={true} onPress={() => {
                        setTestStarted(true);
                    }}/>
                </View>
            );
        } else if (testEnded) {
            return (
                <View style={styles.container}>
                    <View style={styles.resultBox}>
                        <Text style={styles.answersText}>{`Twój wynik to ${userPercentage} %`}</Text>
                        {userPercentage > 50 ?
                            <Text style={styles.testPassedText}>Test zaliczony</Text> :
                            <Text style={styles.testFailedText}>Test nie zaliczony</Text>}
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={{width: 175, alignItems: 'center'}}>
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

                        {data && data[questionIndex].answers[2] &&
                        <TouchableOpacity
                            disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(2)}
                            style={thirdAnswerCorrect ? styles.correctAnswerButton : styles.none}
                        >
                            <Text style={styles.answersText}>C: {data[questionIndex].answers[2]}</Text>
                        </TouchableOpacity>
                        }

                        {data && data[questionIndex].answers[3] &&
                        <TouchableOpacity
                            disabled={answersDisabled} onPress={() => checkIfCorrectAnswer(3)}
                            style={fourthAnswerCorrect ? styles.correctAnswerButton : styles.none}
                        >
                            <Text style={styles.answersText}>D: {data[questionIndex].answers[3]}</Text>
                        </TouchableOpacity>
                        }
                    </View>
                    <Button text={'Następne pytanie'} disabled={!answersDisabled} isButtonDark={true}
                            onPress={() => incrementIndex()}/>
                </View>
            );
        }
    }

};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(QuizScreen);
