import React, {Component, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, TextInput, Image} from 'react-native';
import Button from '../components/Button';
import { connect } from 'react-redux';
import {loginFailedReset, loginFunction} from '../actions/loginActions';
import MaleAvatar from '../assets/male-avatar.png';
import AlertComponent from '../components/Alert/AlertComponent';

const LoginScreen = ({ navigation, loginFunction, loginReducer, loginFailedReset }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        if(loginReducer.loginFailed) {
            setAlertVisible(true);
        }
    },[])

    return(
        <>
            {loginReducer.loginFailed && <AlertComponent type={'error'} message={'Nieprawidłowe dane logowania'} onClick={() => loginFailedReset()}/>}
            <View navigation={navigation} style={styles.container}>
                <Image source={MaleAvatar} style={{width: 200, height: 200, borderRadius: 100}}/>
                <View style={styles.loginArea}>
                    {loginReducer.isLoading && <ActivityIndicator/>}
                    <TextInput style={styles.textInput} placeholder={'Login'} autoCapitalize = 'none' onChangeText={text=> setLogin(text)}/>
                    <TextInput style={styles.textInput} placeholder={'Hasło'} autoCapitalize= 'none' secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                    <Button disabled={login==='' || password ===''} text={'Login'} isButtonDark={true} onPress={()=>{
                        loginFunction(login, password,()=>{navigation.navigate('UserCourses')})}
                    }
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    textInput:{
        backgroundColor: '#e3e3e3',
        height: 50,
        width: '90%',
        marginBottom: 15,
        borderRadius: 50,
        paddingLeft: 5,
        fontFamily: 'Futura',
        fontSize: 15
    },
    loginArea:{
        width:'90%',
        borderRadius: 12,
        flexDirection : 'column',
        justifyContent:'space-around',
        alignItems: 'center',
        height: '30%',
        marginTop:30,
        marginBottom:30,
    },
    title:{
        fontSize: 30,
        fontFamily: 'Futura',
        textAlign: 'center',
        marginTop: '-40%',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    }
})


const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password, successCallback) => dispatch(loginFunction(login, password, successCallback)),
        loginFailedReset: () => dispatch(loginFailedReset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
