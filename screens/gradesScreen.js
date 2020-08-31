import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/gradesScreenStyles';

import ExamIcon from '../assets/exam.png';
import HomeIcon from '../assets/home.png';
import QuizIcon from '../assets/quiz.png';
import SettingsIcon from '../assets/settings.png';
import SearchIcon from '../assets/search.png'

const GradesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [typedSubject, setTypedSubject] = useState([]);

    const fetchData = () => {
        axios.get(`https://node-app-4fun.herokuapp.com/grades/findByStudentId/${loginReducer.loginData.user._id}`)
            .then( res =>{
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            });
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.userInfoBox}>
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Imie: {loginReducer.loginData.user.name}</Text>}
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Nazwisko: {loginReducer.loginData.user.lastName}</Text>}
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Album: {loginReducer.loginData.user.albumNo}</Text>}
                </View>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        placeholder={'Wyszukaj przedmiot'}
                        placeholderTextColor={'#25221E'}
                        style={{width: '80%'}}
                        onChangeText={(text) => setTypedSubject(text)}
                    />
                        <Image source={SearchIcon} style={{marginRight:5}}/>
                </View>
                <FlatList
                    style={styles.flatList}
                    data={data.filter(({subject}) => subject.includes(typedSubject))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=>(
                        <View style={item.grade === 3 || item.grade === 3.5 || item.grade === 4  ? styles.flatListContainerYellow : item.grade===4.5 || item.grade === 5 ? styles.flatListContainerGreen : styles.flatListContainerRed}>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Ocena: {item.grade}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Przedmiot: {item.subject}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Data wystawienia: {item.date.substring(0,9)}</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                </View>
            </View>
            <View style={styles.iconsContainer}>

                <TouchableOpacity
                    styles={{width:'auto'}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={HomeIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    styles={{width:'auto'}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={ExamIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    styles={{width:'auto'}}
                    onPress={() => {navigation.navigate('ChooseQuiz')}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={QuizIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    styles={{width:'auto'}}
                    onPress={() => {navigation.navigate('Settings')}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={SettingsIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesScreen);
