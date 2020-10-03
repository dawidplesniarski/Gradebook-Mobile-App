import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/gradesCategoriesStyles';
import {API_URL} from '../utils/helpers';
import SearchIcon from '../assets/search.png';
import TabBar from '../components/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/SearchBar/SearchBar';

const GradesCategoriesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [typedSubject, setTypedSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const courseName = navigation.getParam('course');
    const courseIndex = navigation.getParam('index');
    let semester = loginReducer.loginData.user.semesters[courseIndex];

    const fetchData = () => {
        if(!semester){
            semester = 1;
        }
        axios.get(`${API_URL}/courseSubjects/findBySemester/${courseName}/${semester}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const updateList = () => {
        try {
            setIsLoading(true);
            fetchData();
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <SearchBar action={(text) => setTypedSubject(text)} placeholder={'Wyszukaj po przedmiocie'}/>
                <TouchableOpacity
                    style={{width: '90%', marginTop: 10}}
                    onPress={() => navigation.navigate('GradesScreen', {subject: ''})}
                >
                    <LinearGradient colors={['#bee3ec', '#e3f8fc', '#bee3ec']} style={styles.flatListElemContainer}>
                        <View>
                            <Text style={styles.flatListElemText}>Wszystkie oceny</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <FlatList
                    refreshing={isLoading}
                    onRefresh={() => updateList()}
                    style={styles.flatList}
                    data={data.filter(data => data.includes(typedSubject))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GradesScreen', {subject: item})}
                        >
                            <LinearGradient colors={['#e0e0e0', '#f1f1f1', '#e0e0e0']}
                                            style={styles.flatListElemContainer}>
                                <View>
                                    <Text style={styles.flatListElemText}>{item}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TabBar navigation={navigation} currentScreen={'Grades'}/>
        </View>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesCategoriesScreen);
