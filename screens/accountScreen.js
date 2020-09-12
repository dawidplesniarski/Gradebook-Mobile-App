import React,{useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const AccountScreen = ({navigation, loginReducer}) => {
    return(
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <Image
                    source={{uri: loginReducer.loginData.user.imageUrl}}
                    style={styles.userImage}
                />
                <View style={styles.userNameContainer}>
                    <Text style={[styles.userInfoText, {marginRight: 20}]}>{loginReducer.loginData.user.name}</Text>
                    <Text style={styles.userInfoText}>{loginReducer.loginData.user.lastName}</Text>
                </View>
                <View>
                    {loginReducer.loginData.user.isAdmin ?
                        <Text style={styles.userSmallText}>Pracownik</Text> :
                        <Text style={styles.userSmallText}>Student</Text>
                    }
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={[styles.userInfoText, {margin: 10}]}>Uczelnia: {loginReducer.loginData.user.university}</Text>
                <Text style={[styles.userInfoText, {margin: 10}]}>Numer albumu: {loginReducer.loginData.user.albumNo}</Text>
                <Text style={[styles.userInfoText, {margin: 10}]}>Adres e-mail: {loginReducer.loginData.user.email}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    userImage:{
        width:300,
        height:300,
        borderRadius: 200,
        borderWidth: 0.25,
        marginBottom: 15
    },
    userInfoText:{
        fontFamily: 'Helvetica',
        fontSize: 22,
        color: '#707070'
    },
    userNameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
    },
    userInfoContainer:{
        alignItems: 'center',
        // paddingLeft:20,
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
        borderTopWidth: 0.25,
        borderBottomWidth: 0.25,
        borderColor: '#676767'
    },
    userImageContainer:{
        width: '100%',
        height: '52%',
        alignItems: 'center',
        backgroundColor: '#b8e4ff',
        paddingTop: '20%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    },
    userSmallText:{
        fontFamily: "Helvetica",
        color: '#707070'
    }
});

export default connect(mapStateToProps)(AccountScreen);

