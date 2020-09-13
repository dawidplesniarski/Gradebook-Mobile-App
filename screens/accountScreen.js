import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/accountScreenStyles';
import SmallButton from '../components/SmallButton';
import axios from 'axios';
import {API_URL} from '../utils/helpers';

const AccountScreen = ({navigation, loginReducer}) => {
    const [latestGrade, setLatestGrade] = useState('');

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
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <Image
                    source={{uri: loginReducer.loginData.user.imageUrl}}
                    style={styles.userImage}
                />
                <View style={styles.userNameContainer}>
                    <Text style={[styles.userInfoText, {marginRight: 10}]}>{loginReducer.loginData.user.name}</Text>
                    <Text style={styles.userInfoText}>{loginReducer.loginData.user.lastName}</Text>
                </View>
                <View>
                    {loginReducer.loginData.user.isAdmin ?
                        <Text style={styles.userSmallText}>Pracownik</Text> :
                        <Text style={styles.userSmallText}>Student</Text>
                    }
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={[styles.userInfoText, {margin: 10}]}>Uczelnia: {loginReducer.loginData.user.university}</Text>
                <Text style={[styles.userInfoText, {margin: 10}]}>Numer albumu: {loginReducer.loginData.user.albumNo}</Text>
                <Text style={[styles.userInfoText, {margin: 10, marginBottom: 25}]}>Adres e-mail: {loginReducer.loginData.user.email}</Text>
            </View>
            <View style={styles.latestGradesContainer}>
                <View style={styles.latestGradesLeftContainer}>
                    <Text style={[styles.userInfoText, {padding: 7}]}>Twoje najnowsze oceny:</Text>
                    <Text style={[styles.userInfoText, {fontSize: 20,padding: 7}]}>
                        {latestGrade.data && `${latestGrade.data.subject}: ${latestGrade.data.grade}`}
                    </Text>
                </View>
                <View style={styles.latestGradesRightContainer}>
                    <SmallButton text={'Oceny'} buttonColor={'#FF5E5B'} onPress={() => {navigation.navigate('GradesScreen')}}/>
                </View>
            </View>
            <View style={styles.latestGradesContainer}>
                <View style={styles.latestGradesLeftContainer}>
                    <Text style={[styles.userInfoText, {padding: 7}]}>Twoje komunikaty:</Text>
                    <Text style={[styles.userInfoText, {padding: 7,fontSize: 15}]}>Egzamin z kryptografii przeniesiony na wtorek</Text>
                </View>
                <View style={styles.latestGradesRightContainer}>
                    <SmallButton text={'Komunikaty'} buttonColor={'#FF5E5B'} onPress={() => {}}/>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};


export default connect(mapStateToProps)(AccountScreen);

