import React from 'react';
import Navigator from './routes/homeStack'
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';
import {isDisabled, setDisabled} from 'react-native/Libraries/LogBox/Data/LogBoxData';


const App = () => {
        return (
            <NavigationContainer>
                    <DrawerNavigator/>
            </NavigationContainer>
        );
}
export default App;


// TODO: - Tutaj wersja aplikacji tylko na StackNavigator
// function App() {
//         return (
//             <NavigationContainer>
//                     <Navigator/>
//             </NavigationContainer>
//         );
// }
//
// export default App;
