import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 50,
    },
    container: {
        alignItems: 'center',
    },
    flatList: {
        width: '90%',
        marginTop: 10,
    },
    flatListElemContainer: {
        borderRadius: 12,
        marginBottom: 20,
        backgroundColor: '#ececec',
        //borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    flatListElemText: {
        fontFamily: 'Helvetica',
        fontSize: 25,
        fontWeight: '400',
        color: '#8c8c8c',
    },
    headerText: {
        fontFamily: 'Helvetica',
        fontSize: 30,
        fontWeight: '500',
        color: '#0e8ae5',
        marginTop: 20,
        marginBottom: 20,
    },
});