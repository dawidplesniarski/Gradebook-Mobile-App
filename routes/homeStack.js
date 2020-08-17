import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details'
import AnotherDetails from '../screens/anotherDetails'
import Quiz from '../screens/quiz';
import ChooseQuiz from '../screens/chooseQuiz';
import QuizScreen from '../screens/quizScreen';

const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            headerShown: false
        }
    },
    Details:{
        screen: Details
    },
    AnotherDetails:{
        screen: AnotherDetails,
        navigationOptions: {
            headerShown: false
        }
    },
    Quiz:{
        screen: Quiz
    },
    ChooseQuiz:{
        screen: ChooseQuiz
    },
    QuizScreen:{
        screen: QuizScreen,
        headerShown: false
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
