import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import {loginFunction} from '../actions/loginActions';


const Home = ({ navigation, loginFunction, loginData }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAlbumNo, setAlbumNo] = useState('');
    const [isUserLogged, setLogged] = useState(false);

    let loginUser = async () => {
        const params = {
            login: login,
            password: password
        }

        loginFunction(login,password);
        // await axios.post('https://node-app-4fun.herokuapp.com/users/login', params)
        //     .then(res => {
        //         if(res.data._id===undefined){
        //             setLogged(false);
        //         }else{
        //             setLogged(true);
        //             setUserId(res.data._id);
        //             setUserName(res.data.name);
        //             setUserLastName(res.data.lastName);
        //             setAlbumNo(res.data.albumNo);
        //             navigation.navigate('AnotherDetails');
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
    }

    return(
        <View navigation={navigation} style={styles.container}>
            <Text style={styles.title}>Gradebook</Text>
            <View style={styles.loginArea}>
                <TextInput style={styles.textInput} placeholder={'Login'} onChangeText={text=> setLogin(text)}/>
                <TextInput style={styles.textInput} placeholder={'Password'} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                <Button text={'Login'} isButtonDark={true} onPress={loginUser}/>
            </View>
            {loginData && <Text>redux{loginData.name}</Text>}
            {loginData && <Text>redux {loginData.lastName}</Text>}
            {loginData && <Text>redux {loginData.albumNo}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:1
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


const mapStateToProps = ({ loginReducer: { loginData }}) => {
    return { loginData };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
