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

    const fetchData = () => {
        axios.get(`${API_URL}/courseSubjects/findBySemester/${loginReducer.loginData.course.courseName}/4`)
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
                <FlatList
                    refreshing={isLoading}
                    onRefresh={() => updateList()}
                    style={styles.flatList}
                    // data={data.filter(({subject}) => subject.includes(typedSubject))}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity>
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
