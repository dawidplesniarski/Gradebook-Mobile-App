import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/home';
import AnotherDetails from '../screens/anotherDetails';
import ChooseQuiz from '../screens/chooseQuiz';
import QuizScreen from '../screens/quizScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AnotherDetails" component={AnotherDetails} />
            <Stack.Screen name="ChooseQuiz" component={ChooseQuiz} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
        </Stack.Navigator>
    );
}
// const ContactStackNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="AnotherDetails" component={AnotherDetails} />
//             <Stack.Screen name="ChooseQuiz" component={ChooseQuiz} />
//             <Stack.Screen name="QuizScreen" component={QuizScreen} />
//         </Stack.Navigator>
//     );
// }


export { MainStackNavigator };
