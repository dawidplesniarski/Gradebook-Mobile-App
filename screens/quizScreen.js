import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Screen from './Screen';
import axios from 'axios';
import Button from '../components/Button';
import {async} from 'rxjs';


const QuizScreen = ({navigation}) => {


    return (
        <View>
            <Text> {navigation.getParam('name')} </Text>
            <Button text={'Zakończ test'} isButtonDark={true} onPress={() => navigation.navigate('ChooseQuiz')}/>
        </View>
    )
}

export default QuizScreen;
