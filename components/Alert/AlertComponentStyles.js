import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    alertWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        width: 350,
        height: 200,
        position: 'absolute',
        backgroundColor: '#fff',
        top: '50%',
        left: '50%',
        marginLeft: -175,
        marginTop: -100,
        borderWidth: 1,
        borderColor: '#9cd4ae',
        borderRadius: 15,
        zIndex: 1,
    },
    errorAlertWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        width: 350,
        height: 200,
        position: 'absolute',
        backgroundColor: '#fff',
        top: '50%',
        left: '50%',
        marginLeft: -175,
        marginTop: -100,
        borderWidth: 1,
        borderColor: '#e54053',
        borderRadius: 15,
        zIndex: 1,
    },
    alertIconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 60,
        width: 60,
        marginTop: -25,
        borderWidth: 0.5,
        borderColor: '#9cd4ae',
        borderRadius: 30
    },
    errorAlertIconWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 60,
        width: 60,
        marginTop: -25,
        borderWidth: 0.5,
        borderColor: '#e54053',
        borderRadius: 30
    },
    alertIcon: {
        width: 50,
        height: 50
    },
    alertTitleText: {
        fontFamily: 'Helvetica',
        fontSize: 25,
        color: '#929090'
    },
    alertMessageText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: '#929090',
        textAlign: 'center',
    }
});