import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/gradesCategoriesStyles';
import { API_URL } from '../utils/helpers';
import SearchIcon from '../assets/search.png'
import TabBar from '../components/TabBar';

const GradesCategoriesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [typedSubject, setTypedSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const courseName = navigation.getParam('course');

    const fetchData = () => {
        axios.get(`${API_URL}/courseSubjects/findBySemester/${courseName}/4`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const updateList = () => {
        try{
            setIsLoading(true);
            fetchData();
        } catch(err){
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        placeholder={'Wyszukaj przedmiot'}
                        placeholderTextColor={'#25221E'}
                        style={{width: '80%'}}
                        onChangeText={(text) => setTypedSubject(text)}
                    />
                    <Image source={SearchIcon} style={styles.searchIcon}/>
                </View>
                <TouchableOpacity
                    style={{width: '90%', marginTop: 10}}
                    onPress={() => navigation.navigate('GradesScreen', {subject: ''})}
                >
                    <View style={[styles.flatListElemContainer, {backgroundColor: '#c0ddfc'}]}>
                        <Text style={styles.flatListElemText}>Wszystkie oceny</Text>
                    </View>
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
                            <View style={styles.flatListElemContainer}>
                                <Text style={styles.flatListElemText}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TabBar navigation={navigation} currentScreen={'Grades'}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GradesCategoriesScreen);
