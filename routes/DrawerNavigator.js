import React, {Component} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation';
import homeStack from './homeStack';
import Home from '../screens/home';
import AnotherDetails from '../screens/anotherDetails';

const MyDrawerNavigator = createDrawerNavigator({
    Home: { screen: homeStack},
    Screen1: { screen: Home},
    Screen2: {screen: AnotherDetails}
    },
    {
        initialRouteName: 'Home',
        drawerWidth: 300,
        drawerPosition: 'left'
    }
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
    render(){
        return <AppContainer/>;
    }
}
