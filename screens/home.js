import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { connect } from 'react-redux';
import {loginFunction, logoutFunction} from '../actions/loginActions';


const Home = ({ navigation, loginFunction, loginReducer, logoutFunction }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedLabelInfo, setIsLoggedLabelInfo] = useState('');

    let loginUser = async () => {
        await loginFunction(login,password);
        if(loginReducer.isLogged === true){
            navigation.navigate('AnotherDetails');
        } else {
            setIsLoggedLabelInfo('Incorrect login or password!');
        }
    }

    // useEffect(() => {
    //     logoutFunction();
    // },[]);

    return(
        <View navigation={navigation} style={styles.container}>
            <Text style={styles.title}>Gradebook</Text>
            <View style={styles.loginArea}>
                <TextInput style={styles.textInput} placeholder={'Login'} autoCapitalize = 'none' onChangeText={text=> setLogin(text)}/>
                <TextInput style={styles.textInput} placeholder={'Password'} autoCapitalize= 'none' secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                <Button text={'Login'} isButtonDark={true} onPress={loginUser}/>
            </View>
            <Text>{isLoggedLabelInfo}</Text>
            <Button isButtonDark={true} text={'Quiz'} onPress={() => navigation.navigate('Quiz')}/>
        </View>
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
        borderWidth: 1,
        borderRadius:10,
        backgroundColor: '#dadada',
        width:'90%',
        height: 35,
        fontFamily: 'Futura',
    },
    loginArea:{
        width:'90%',
        borderWidth:1,
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
    }
})


const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password)),
        logoutFunction: () => dispatch(logoutFunction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
