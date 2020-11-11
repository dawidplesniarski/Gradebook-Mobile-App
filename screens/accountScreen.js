import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/accountScreenStyles';
import SmallButton from '../components/SmallButton';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar/TabBar';
import CoursesIcon from '../assets/reading-book.png';
import UniversityIcon from '../assets/university.png';
import StudentsCap from '../assets/students-cap.png';
import EmailIcon from '../assets/email.png';

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



    useEffect(() => {
        fetchLatestGrade();
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
                    <View style={styles.userInfoItemWrapper}>
                        <Image source={CoursesIcon} style={styles.userInfoItemIcon}/>
                        <View>
                            <Text
                                style={[styles.userInfoText, {margin: 5, textAlign: 'center'}]}>Kierunki:
                            </Text>
                            <View style={styles.userCoursesContainer}>
                                {loginReducer.loginData && loginReducer.loginData.user.courseId.map((value, index) =>{
                                    return(
                                        <Text style={styles.userCoursesText}>
                                            {value.courseName}: semestr {loginReducer.loginData.user.semesters[index]}
                                        </Text>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={[styles.userInfoItemWrapper, {marginBottom: 10}]}>
                        <Image source={UniversityIcon} style={styles.userInfoItemIcon}/>
                        <Text
                            style={[styles.userInfoText, {margin: 5}]}>Uczelnia: {loginReducer.loginData.user.universityId.universityName}
                        </Text>
                    </View>
                    <View style={[styles.userInfoItemWrapper, {marginBottom: 10}]}>
                        <Image source={StudentsCap} style={styles.userInfoItemIcon}/>
                        <Text style={[styles.userInfoText, {margin: 5}]}>
                            Numer albumu: {loginReducer.loginData.user.albumNo}
                        </Text>
                    </View>
                    <View style={styles.userInfoItemWrapper}>
                        <Image source={EmailIcon} style={styles.userInfoItemIcon}/>
                        <Text style={[styles.userInfoText, {margin: 5, marginBottom: 20}]}>Adres
                            e-mail: {loginReducer.loginData.user.email}
                        </Text>
                    </View>
                </View>
                <View style={styles.latestGradesContainer}>
                    <View style={styles.latestGradesLeftContainer}>
                        <Text style={[styles.userInfoText, {padding: 7}]}>Twoje najnowsze oceny:</Text>
                        <Text style={[styles.userInfoText, {fontSize: 18, padding: 7}]}>
                            {latestGrade.data && `${latestGrade.data.subject.subjectName}: ${latestGrade.data.grade.toFixed(1)}`}
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

