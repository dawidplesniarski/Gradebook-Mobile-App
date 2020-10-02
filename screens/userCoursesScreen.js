import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/userCoursesStyles';
import { API_URL } from '../utils/helpers';
import TabBar from '../components/TabBar';

const UserCoursesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        axios.get(`${API_URL}/users/findUserCourses/${loginReducer.loginData.user._id}`)
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
                <Text style={styles.headerText}>Twoje kierunki studiów:</Text>
                <FlatList
                    refreshing={isLoading}
                    onRefresh={() => updateList()}
                    style={styles.flatList}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GradesCategories', {course: item.courseName})}
                        >
                            <View style={styles.flatListElemContainer}>
                                <Text style={styles.flatListElemText}>{item.courseName}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserCoursesScreen);
