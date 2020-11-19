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
            headerTintColor: '#0D99FF'
        },
    },
    ChooseQuiz: {
        screen: ChooseQuiz,
        navigationOptions: {
            headerTransparent: true,
            headerBackTitle: ' ',
            title: '',
            headerTintColor: '#0D99FF'
        },
    },
    QuizScreen: {
        screen: QuizScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Ustawienia',
            headerBackTitle: 'Wróć',
            headerTintColor: '#0D99FF',
            headerTransparent: true
        },
    },
    AccountScreen: {
        screen: AccountScreen,
        navigationOptions: {
            title: '',
            headerBackTitle: ' ',
            headerTransparent: true,
            headerTintColor: '#0D99FF'
        },
    },
    GradesCategories: {
        screen: GradesCategoriesScreen,
        navigationOptions: {
            title: 'Przedmioty',
            headerBackTitle: 'Wróć',
            headerTransparent: true,
            headerTintColor: '#0D99FF'
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
