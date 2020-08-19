import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator } from "./StackNavigator";
import Home from '../screens/home';
import AnotherDetails from '../screens/anotherDetails';
import ChooseQuiz from '../screens/chooseQuiz';
import QuizScreen from '../screens/quizScreen';
import {isDisabled, setDisabled} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="AnotherDetails" component={AnotherDetails} />
            <Drawer.Screen name="ChooseQuiz" component={ChooseQuiz} />
            <Drawer.Screen name="QuizScreen" component={QuizScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
