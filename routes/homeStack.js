import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details'
import AnotherDetails from '../screens/anotherDetails'
import Quiz from '../screens/quiz';
import ChooseQuiz from '../screens/chooseQuiz';
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
        screen: AnotherDetails
    },
    Quiz:{
        screen: Quiz
    },
    ChooseQuiz:{
        screen: ChooseQuiz
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
