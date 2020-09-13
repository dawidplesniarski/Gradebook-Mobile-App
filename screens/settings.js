import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {logoutFunction} from '../actions/loginActions';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import editIcon from '../assets/edit.png';


const Settings = ({navigation, logoutFunction, loginReducer}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [newImageUri, setNewImageUri] = useState('');

    const changePassword = () => {
        axios.put(`${API_URL}/users/changePassword/${loginReducer.loginData.user._id}`,
            {
                password: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            })
            .then(() => {
                setErrorMessage('Hasło zostało pomyślnie zaktualizowane');
            }).catch(error => {
            setErrorMessage('Wystąpił błąd podczas zmiany hasła');
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.changeImageContainer}>
                <Image source={{uri: loginReducer.loginData.user.imageUrl}} style={styles.userAvatar}/>
                <View style={styles.editImageBar}>
                    <TextInput
                        placeholder={'Link do zdjęcia'}
                        placeholderTextColor={'#858585'}
                        style={{width: '80%'}}
                        onChangeText={(text) => setTypedSubject(text)}
                    />
                    <Image source={editIcon} style={styles.searchIcon}/>
                </View>
            </View>
            <View style={styles.changePasswordContainer}>
                <TextInput style={styles.textInput} autoCapitalize='none' secureTextEntry={true}
                           onChangeText={(text) => setOldPassword(text)} placeholder={'Stare hasło'}/>
                <TextInput style={styles.textInput} autoCapitalize='none' secureTextEntry={true}
                           onChangeText={(text) => setNewPassword(text)} placeholder={'Nowe hasło'}/>
                <TextInput style={styles.textInput} autoCapitalize='none' secureTextEntry={true}
                           onChangeText={(text) => setConfirmPassword(text)} placeholder={'Potwierdź nowe hasło'}/>
                <Button text={'Zmień hasło'}
                        disabled={oldPassword === '' || newPassword === '' || confirmPassword === ''}
                        isButtonDark={true} onPress={changePassword}/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <Button isButtonDark={true} text={'Wyloguj'} onPress={() => {
                logoutFunction(() => {
                    navigation.navigate('LoginScreen');
                });
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 50,
        justifyContent: 'space-between',
    },
    changePasswordContainer: {
        width: '90%',
        height: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#dadada',
        height: 50,
        width: '90%',
        marginBottom: 15,
        borderRadius: 50,
        paddingLeft: 5,
        fontFamily: 'Futura',
        fontSize: 15,
    },
    errorMessage: {
        fontFamily: 'Futura',
        fontSize: 15,
    },
    changeImageContainer:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userAvatar:{
        width: 100,
        height: 100,
        borderRadius: 20,
        borderWidth: 0.25
    },
    editImageBar:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        backgroundColor: '#e9e9e9',
        height: 40,
        margin: 8,
        marginTop:10,
        borderRadius: 15,
        padding:5,
        alignItems: 'center'
    }
});


const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: (successCallback) => dispatch(logoutFunction(successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
