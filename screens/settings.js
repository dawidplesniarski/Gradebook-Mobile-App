import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {logoutFunction} from '../actions/loginActions';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import editIcon from '../assets/edit.png';
import styles from '../styles/settingsStyles'


const Settings = ({navigation, logoutFunction, loginReducer}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [newImageUri, setNewImageUri] = useState('');
    const [imageChangeErrorMessage, setImageChangeErrorMessage] = useState(null);

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

    const changeImage = () => {
        if (newImageUri !== '' && newImageUri != null) {
            axios.put(`${API_URL}/users/updateImage`,
                {
                    albumNo: loginReducer.loginData.user.albumNo,
                    imageUrl: newImageUri,
                })
                .then(() => {
                    setImageChangeErrorMessage('Zdjęcie zmienione, zmiany zostaną wprowadzone po ponownym zalogowaniu');
                }).catch(error => {
                setImageChangeErrorMessage('Wystąpił błąd podczas zmiany zdjęcia');
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.changeImageContainer}>
                <Image source={{uri: loginReducer.loginData.user && loginReducer.loginData.user.imageUrl}} style={styles.userAvatar}/>
                <View style={styles.editImageBar}>
                    <TextInput
                        placeholder={'Link do zdjęcia'}
                        placeholderTextColor={'#858585'}
                        style={{width: '80%'}}
                        autoCapitalize='none'
                        onChangeText={(text) => setNewImageUri(text)}
                    />
                    <TouchableOpacity onPress={changeImage}>
                        <Image source={editIcon} style={styles.searchIcon}/>
                    </TouchableOpacity>
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

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: (successCallback) => dispatch(logoutFunction(successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
