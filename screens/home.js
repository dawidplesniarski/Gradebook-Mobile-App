import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button';

export default function Home({ navigation }) {
    return(
        <View navigation={navigation} style={{padding:150}}>
            <Text>New home screen</Text>
            <Button text={'Details'} isButtonDark={true} onPress={()=> navigation.navigate('Details')}/>
        </View>
    )
}
