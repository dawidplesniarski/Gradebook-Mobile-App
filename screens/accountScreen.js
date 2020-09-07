import React,{useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';

const AccountScreen = ({navigation, loginReducer}) => {
    return(
        <View>
            <Text>Hello</Text>
        </View>
    );
};

const mapStateToProps = ({ loginReducer }) => {
    return { loginReducer };
};

export default connect(mapStateToProps)(AccountScreen);

