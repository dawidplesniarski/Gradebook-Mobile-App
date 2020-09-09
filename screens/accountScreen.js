import React,{useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const AccountScreen = ({navigation, loginReducer}) => {
    return(
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <Image
                    source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg'}}
                    style={styles.userImage}
                />
                <View style={styles.userNameContainer}>
                    <Text style={[styles.userInfoText, {marginRight: 20}]}>{loginReducer.loginData.user.name}</Text>
                    <Text style={styles.userInfoText}>{loginReducer.loginData.user.lastName}</Text>
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={{fontFamily: 'Helvetica-bold', fontSize: 40, color: '#393939', letterSpacing: 15, paddingBottom: 20}}>{loginReducer.loginData.user.university}</Text>
                <Text style={{fontFamily: 'Helvetica-bold', fontSize: 35, color: '#393939', letterSpacing: 12}}>{loginReducer.loginData.user.albumNo}</Text>
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
        fontSize: 25,
        color: '#393939'
    },
    userNameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
    },
    userInfoContainer:{
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40
    },
    userImageContainer:{
        width: '100%',
        height: '52%',
        alignItems: 'center',
        backgroundColor: '#cdf0fd',
        paddingTop: '20%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
    }
});

export default connect(mapStateToProps)(AccountScreen);

