import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { connect } from 'react-redux';
import {logoutFunction} from '../actions/loginActions';


const Home = ({ navigation, loginReducer, logoutFunction }) => {
    const [login, setLogin] = useState('');

    return(
        <View style={styles.container}>
            <View style={styles.changePasswordContainer}>
                <TextInput style={styles.textInput} placeholder={'Stare hasło'}/>
                <TextInput style={styles.textInput} placeholder={'Nowe hasło'}/>
                <TextInput style={styles.textInput} placeholder={'Potwierdź nowe hasło'}/>
                <Button text={'Zmień hasło'} isButtonDark={true}/>
            </View>
            <Button isButtonDark={true} text={'Wyloguj'} onPress={() => {logoutFunction(() => {navigation.navigate('Home')})}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
