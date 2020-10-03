import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 50,
        justifyContent: 'space-between',
    },
    changePasswordContainer: {
        width: '90%',
        height: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#dadada',
        height: 50,
        width: '90%',
        marginBottom: 15,
        borderRadius: 50,
        paddingLeft: 5,
        fontFamily: 'Futura',
        fontSize: 15,
    },
    errorMessage: {
        fontFamily: 'Futura',
        fontSize: 15,
    },
    changeImageContainer:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userAvatar:{
        width: 100,
        height: 100,
        borderRadius: 20,
        borderWidth: 0.25
    },
    editImageBar:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        backgroundColor: '#e9e9e9',
        height: 40,
        margin: 8,
        marginTop:10,
        borderRadius: 15,
        padding:5,
        alignItems: 'center'
    }
});