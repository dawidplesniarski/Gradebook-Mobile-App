import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/accountScreenStyles';
import SmallButton from '../components/SmallButton';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar'

const AccountScreen = ({navigation, loginReducer}) => {
    const [latestGrade, setLatestGrade] = useState('');
    const [userCourses, setUserCourses] = useState('');

    const fetchLatestGrade = async () => {
        await axios.get(`${API_URL}/grades/findLatest/${loginReducer.loginData.user.albumNo}`)
            .then(res => {
                setLatestGrade(res);
            }).catch(err => {
                console.log(err);
            });
    };

    // function courseNamesString(){
    //     var courses = [];
    //     for(let i = 0; i < loginReducer.loginData.user.courseId.length; i++){
    //         courses.push(loginReducer.loginData.user.courseId.courseName[i]);
    //     }
    //     courses.join("");
    //     setUserCourses(courses);
    // }

    const setCourseNames = () => {
        var courses = [];
        let length = loginReducer.loginData.user.courseId.length;
        for (let i = 0; i < length; i++) {
            courses.push(loginReducer.loginData.user.courseId[i].courseName);
            if(i < length - 1){
                courses.push(', ');
            }
        }
        courses.join('');
        setUserCourses(courses);
    };

    useEffect(() => {
        fetchLatestGrade();
        setCourseNames();
    },[]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.userImageContainer}>
                    <Image
                        source={{uri: loginReducer.loginData.user.imageUrl}}
                        style={[styles.userImage, {marginTop: 7}]}
                    />
                    <View style={styles.userNameContainer}>
                        <Text style={[styles.userInfoText, {marginRight: 10}]}>{loginReducer.loginData.user.name}</Text>
                        <Text style={styles.userInfoText}>{loginReducer.loginData.user.lastName}</Text>
                    </View>
                    <View>
                        <Text style={styles.userSmallText}>Student</Text>
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text
                        style={[styles.userInfoText, {margin: 5, textAlign: 'center', fontSize: 20}]}>Kierunki: {userCourses}
                    </Text>
                    <Text
                        style={[styles.userInfoText, {margin: 5}]}>Uczelnia: {loginReducer.loginData.user.universityId.universityName}
                    </Text>
                    <Text style={[styles.userInfoText, {margin: 5}]}>Numer
                        albumu: {loginReducer.loginData.user.albumNo}
                    </Text>
                    <Text style={[styles.userInfoText, {margin: 5, marginBottom: 20}]}>Adres
                        e-mail: {loginReducer.loginData.user.email}
                    </Text>
                </View>
                <View style={styles.latestGradesContainer}>
                    <View style={styles.latestGradesLeftContainer}>
                        <Text style={[styles.userInfoText, {padding: 7}]}>Twoje najnowsze oceny:</Text>
                        <Text style={[styles.userInfoText, {fontSize: 18, padding: 7}]}>
                            {latestGrade.data && `${latestGrade.data.subject.subjectName}: ${latestGrade.data.grade}`}
                        </Text>
                    </View>
                    <View style={styles.latestGradesRightContainer}>
                        <SmallButton text={'Oceny'} buttonColor={'#FF5E5B'} onPress={() => {
                            navigation.navigate('GradesScreen');
                        }}/>
                    </View>
                </View>
                <View style={styles.latestGradesContainer}>
                    <View style={styles.latestGradesLeftContainer}>
                        <Text style={[styles.userInfoText, {padding: 7}]}>Twoje komunikaty:</Text>
                        <Text style={[styles.userInfoText, {padding: 7, fontSize: 15}]}>Egzamin z kryptografii
                            przeniesiony na wtorek</Text>
                    </View>
                    <View style={styles.latestGradesRightContainer}>
                        <SmallButton text={'Komunikaty'} buttonColor={'#FF5E5B'} onPress={() => {
                        }}/>
                    </View>
                </View>
            </View>
            <TabBar navigation={navigation} currentScreen={'Account'}/>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};


export default connect(mapStateToProps)(AccountScreen);

