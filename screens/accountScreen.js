import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/accountScreenStyles';
import SmallButton from '../components/SmallButton';

const AccountScreen = ({navigation, loginReducer}) => {
    return(
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <Image
                    source={{uri: loginReducer.loginData.user.imageUrl}}
                    style={styles.userImage}
                />
                <View style={styles.userNameContainer}>
                    <Text style={[styles.userInfoText, {marginRight: 20}]}>{loginReducer.loginData.user.name}</Text>
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
                <Text style={[styles.userInfoText, {margin: 10}]}>Adres e-mail: {loginReducer.loginData.user.email}</Text>
            </View>
            <View style={styles.latestGradesContainer}>
                <View style={styles.latestGradesLeftContainer}>
                    <Text style={[styles.userInfoText, {padding: 5}]}>Twoje najnowsze oceny:</Text>
                    <Text style={[styles.userInfoText, {padding: 5}]}>Kryptografia 5.0</Text>
                </View>
                <View style={styles.latestGradesRightContainer}>
                    <SmallButton text={'Oceny'} buttonColor={'#f59292'} onPress={() => {navigation.navigate('GradesScreen')}}/>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};


export default connect(mapStateToProps)(AccountScreen);

