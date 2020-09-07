import React,{useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const AccountScreen = ({navigation, loginReducer}) => {
    return(
        <View style={styles.container}>
            <Image
                source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'}}
                style={styles.userImage}
            />
            <View>
                <Text style={styles.userInfoText}>{loginReducer.loginData.user.name}</Text>
                <Text style={styles.userInfoText}>{loginReducer.loginData.user.lastName}</Text>
                <Text style={styles.userInfoText}>{loginReducer.loginData.user.albumNo}</Text>
                <Text style={styles.userInfoText}>{loginReducer.loginData.user.university}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};

const styles = StyleSheet.create = {
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%'
    },
    userImage:{
        width:300,
        height:300,
        borderRadius: 200,
        borderWidth: 0.25
    },
    userInfoText:{
        fontFamily: 'Futura',
        fontSize: 18
    }
}

export default connect(mapStateToProps)(AccountScreen);

