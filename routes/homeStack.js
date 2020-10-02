import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import GradesScreen from '../screens/gradesScreen';
import ChooseQuiz from '../screens/chooseQuiz';
import QuizScreen from '../screens/quizScreen';
import Settings from '../screens/settings';
import AccountScreen from '../screens/accountScreen';
import GradesCategoriesScreen from '../screens/gradesCategoriesScreen';
import UserCoursesScreen from '../screens/userCoursesScreen';

const screens = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
            orientation: 'portrait'
        },
    },
    GradesScreen: {
        screen: GradesScreen,
        navigationOptions: {
            title: 'Oceny',
            headerBackTitle: 'Wróć',
            headerTransparent: true,
            headerTintColor: '#FF5E5B'
        },
    },
    ChooseQuiz: {
        screen: ChooseQuiz,
        navigationOptions: {
            headerTransparent: true,
            headerBackTitle: ' ',
            title: '',
            headerTintColor: '#FF5E5B'
        },
    },
    QuizScreen: {
        screen: QuizScreen,
        headerShown: false,
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Ustawienia',
            headerBackTitle: ' ',
            headerTintColor: '#FF5E5B'
        },
    },
    AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
            title: '',
            headerBackTitle: ' ',
            headerTransparent: true,
            headerTintColor: '#FF5E5B'
        },
    },
    GradesCategories: {
        screen: GradesCategoriesScreen,
        navigationOptions: {
            title: 'Przedmioty',
            headerBackTitle: 'Wróć',
            headerTransparent: true,
            headerTintColor: '#FF5E5B'
        },
    },
    UserCourses: {
        screen: UserCoursesScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        },
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
