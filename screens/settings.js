import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { connect } from 'react-redux';
import {logoutFunction} from '../actions/loginActions';


const Home = ({ navigation, loginReducer, logoutFunction }) => {
    const [login, setLogin] = useState('');

    return(
        <View style={styles.container}>
            <Button isButtonDark={true} text={'Wyloguj'} onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});


const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunction: () => dispatch(logoutFunction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
