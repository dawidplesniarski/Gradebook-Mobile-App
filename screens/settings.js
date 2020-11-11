import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {logoutFunction} from '../actions/loginActions';
import axios from 'axios';
import {API_URL} from '../utils/helpers';
import editIcon from '../assets/edit.png';
import styles from '../styles/settingsStyles';
import AlertComponent from '../components/Alert/AlertComponent';


const Settings = ({navigation, logoutFunction, loginReducer}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [imageUri, setImageUri] = useState(null);
    const [newImageUri, setNewImageUri] = useState('');
    const [passwordAlertVisible, setPasswordAlertVisible] = useState(false);
    const [passwordErrorAlertVisible, setErrorPasswordAlertVisible] = useState(false);
    const [imageAlertVisible, setImageAlertVisible] = useState(false);
    const [errorImageAlertVisible, setErrorImageAlertVisible] = useState(false);

    const changePassword = () => {
        axios.put(`${API_URL}/users/changePassword/${loginReducer.loginData.user._id}`,
            {
                password: oldPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            })
            .then(() => {
                setPasswordAlertVisible(true);
            }).catch(error => {
            if (error) {
                setErrorPasswordAlertVisible(true);
            }
        });
    };

    const changeImage = () => {
        if (newImageUri !== '' && newImageUri != null) {
            setImageUri(newImageUri);
            axios.put(`${API_URL}/users/updateImage`,
                {
                    albumNo: loginReducer.loginData.user.albumNo,
                    imageUrl: newImageUri,
                })
                .then(() => {
                    setImageAlertVisible(true);
                }).catch(error => {
                    if(error) {
                        setErrorImageAlertVisible(true);
                    }
            });
        }
    };

    useEffect(() => {
        setImageUri(loginReducer.loginData.user.imageUrl)
    },[])

    return (
        <>
            {passwordAlertVisible && <AlertComponent type={'success'} message={'Hasło zostało zaktualizowane'} onClick={() => setPasswordAlertVisible(false)}/>}
            {passwordErrorAlertVisible && <AlertComponent type={'error'} message={'Nie udało się zaktualizować hasła'} onClick={() => setErrorPasswordAlertVisible(false)}/>}
            {imageAlertVisible && <AlertComponent type={'success'} message={'Zdjęcie zostało zmienione'} onClick={() => setImageAlertVisible(false)}/>}
            {errorImageAlertVisible && <AlertComponent type={'error'} message={'Nie udało się zaktualizować zdjęcia'} onClick={() => setImageAlertVisible(false)}/>}
            <View style={styles.container}>
                <View style={styles.changeImageContainer}>
                    {imageUri && <Image source={{uri: imageUri}}
                                        style={styles.userAvatar}/>}
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
                </View>
                <Button isButtonDark={true} text={'Wyloguj'} onPress={() => {
                    logoutFunction(() => {
                        navigation.navigate('LoginScreen');
                    });
                }}/>
            </View>
        </>
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
