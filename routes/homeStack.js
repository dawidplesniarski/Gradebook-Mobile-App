import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/details'
import AnotherDetails from '../screens/anotherDetails'
const screens = {
    Home:{
        screen: Home
    },
    Details:{
        screen: Details
    },
    AnotherDetails:{
        screen: AnotherDetails
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
