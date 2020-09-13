import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import HomeIcon from '../assets/home.png';
import ExamIcon from '../assets/exam.png';
import QuizIcon from '../assets/quiz.png';
import SettingsIcon from '../assets/settings.png';
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
                    source={HomeIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                styles={{width:'auto'}}
            >
                <Image
                    style={currentScreen === 'Grades' ? styles.tabBarIconCurrent : styles.tabBarIconNormal}
                    source={ExamIcon}
                />
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