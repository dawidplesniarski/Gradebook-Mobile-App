import React from 'react';
import {View, Text} from 'react-native';
import Screen from './Screen';


export default function({navigation}) {
    return(
        <Screen navigation={navigation} theme={'light'}>
            <View>
                <Text>Details Screen</Text>
            </View>
        </Screen>
    );
}
