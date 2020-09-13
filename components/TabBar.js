import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import UserIcon from '../assets/user.png'
import ExamIcon from '../assets/exam.png';
import QuizIcon from '../assets/quiz.png';
import SettingsIcon from '../assets/settings.png';
import CircleIcon from '../assets/circle.png'
import styles from '../styles/gradesScreenStyles'

const TabBar = ({navigation, currentScreen}) => {
    return(
        <View style={styles.iconsContainer}>

            <TouchableOpacity
                styles={{width:'auto'}}
                onPress={() => {navigation.navigate('AccountScreen')}}
            >
                <Image
                    style={styles.tabBarIconNormal}
                    source={UserIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                styles={{width:'auto'}}
            >
                <View style={{alignItems:'center'}}>
                    <Image
                        source={ExamIcon}
                    />
                    {currentScreen === 'Grades' ? <Image source={CircleIcon} style={{width: 10, height: 10}}/> : null}
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                styles={{width:'auto'}}
                onPress={() => {navigation.navigate('ChooseQuiz')}}
            >
                <Image
                    style={styles.topBarIcons}
                    source={QuizIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity
                styles={{width:'auto'}}
                onPress={() => {navigation.navigate('Settings')}}
            >
                <Image
                    style={styles.topBarIcons}
                    source={SettingsIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default TabBar;