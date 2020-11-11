import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/accountScreenStyles';
import SmallButton from '../components/SmallButton';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar/TabBar'

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

    const setCourseNames = () => {
        let courses = [];
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

    // const renderCourses = () => {
    //     var courses = [];
    //     loginReducer.loginData.user.courseId.forEach(el => {
    //         courses.push(el.courseName);
    //     });
    //     render() (
    //         <View>
    //             courses.map((item, index) => <Text key={index}>{item}</Text>);
    //         </View>
    //     )
    // }

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
                        style={[styles.userInfoText, {margin: 5, textAlign: 'center'}]}>Kierunki:
                    </Text>
                    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20, marginTop: 10}}>
                        {loginReducer.loginData && loginReducer.loginData.user.courseId.map((value, index) =>{
                            return(
                                <Text style={styles.userInfoText}>
                                    {value.courseName}
                                </Text>
                            )
                        })}
                    </View>
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
                        <SmallButton text={'Oceny'} buttonColor={'#0D99FF'} onPress={() => {
                            navigation.navigate('GradesScreen', {subject: latestGrade.data.subject.subjectName});
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

