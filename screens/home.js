import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function Home({ navigation }) {
    return(
        <View navigation={navigation} style={styles.container}>
            <Text style={{marginTop:30}}>New home screen</Text>
            <Button text={'Details'} isButtonDark={true} onPress={()=> navigation.navigate('Details')}/>
            <Button text={'Another Details Screen'} isButtonDark={true} onPress={()=> navigation.navigate('AnotherDetails')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderWidth:1
    }
})
