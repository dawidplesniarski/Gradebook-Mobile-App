import React from 'react';
import {View, Image, Text} from 'react-native'
import styles from './AlertComponentStyles';
import VerifiedIcon from '../../assets/verified.png';
import SmallButton from '../SmallButton';
import ErrorIcon from '../../assets/error.png';

const AlertComponent = ({type, message, onClick}) => {
    return(
        <>
            {type === 'success' ?
                <View style={styles.alertWrapper}>
                    <View style={styles.alertIconWrapper}>
                        <Image source={VerifiedIcon} style={styles.alertIcon}/>
                    </View>
                    <Text style={styles.alertTitleText}> Operacja powiodła się</Text>
                    <Text style={styles.alertMessageText}>{message}</Text>
                    <SmallButton text={'Zamknij'} onPress={onClick} buttonColor={'#9cd4ae'}/>
                </View> :
                <View style={styles.errorAlertWrapper}>
                    <View style={styles.errorAlertIconWrapper}>
                        <Image source={ErrorIcon} style={styles.alertIcon}/>
                    </View>
                    <Text style={styles.alertTitleText}> Operacja nie powiodła się</Text>
                    <Text style={styles.alertMessageText}>{message}</Text>
                    <SmallButton text={'Zamknij'} onPress={onClick} buttonColor={'#e54053'}/>
                </View>}
        </>
    );
};

export default AlertComponent;