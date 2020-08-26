import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import AnotherDetails from '../screens/anotherDetails'
import ChooseQuiz from '../screens/chooseQuiz';
import QuizScreen from '../screens/quizScreen';
import Settings from '../screens/settings';

const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            headerShown: false
        }
    },
    AnotherDetails:{
        screen: AnotherDetails,
        navigationOptions: {
            headerShown: false
        }
    },
    ChooseQuiz:{
        screen: ChooseQuiz
    },
    QuizScreen:{
        screen: QuizScreen,
        headerShown: false
    },
    Settings:{
        screen: Settings
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
