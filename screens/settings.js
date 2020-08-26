import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { connect } from 'react-redux';
import {logoutFunction} from '../actions/loginActions';
import axios from 'axios';


const Settings = ({ navigation, logoutFunction, loginReducer }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changePassword = () => {

        axios.put(`https://node-app-4fun.herokuapp.com/users/changePassword/${loginReducer.loginData.user._id}`,
            {
                password: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            });
    };

    return(
        <View style={styles.container}>
            <View style={styles.changePasswordContainer}>
                <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={(text) => setOldPassword(text)} placeholder={'Stare hasło'}/>
                <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={(text) => setNewPassword(text)} placeholder={'Nowe hasło'}/>
                <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={(text) => setConfirmPassword(text)} placeholder={'Potwierdź nowe hasło'}/>
                <Button text={'Zmień hasło'} disabled={oldPassword === '' || newPassword === ''|| confirmPassword === ''} isButtonDark={true} onPress={changePassword}/>
            </View>
            <Button isButtonDark={true} text={'Wyloguj'}  onPress={() => {logoutFunction(() => {navigation.navigate('Home')})}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    changePasswordContainer:{
        borderWidth: 1,
        width: '90%',
        height: '20%',
        justifyContent: 'space-around',
    },
    textInput: {
        backgroundColor: '#dadada',
        height: 30
    }
});


const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: (successCallback) => dispatch(logoutFunction(successCallback))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
