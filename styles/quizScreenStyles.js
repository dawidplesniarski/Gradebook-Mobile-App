import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:'20%',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    questionText:{
        fontSize: 25,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        color: '#0e8ae5'
    },
    answersContainer:{
        borderRadius:10,
        width:'90%',
        justifyContent: 'space-around',
        paddingLeft: 5
    },
    answersText:{
        fontSize:20,
        fontFamily:'Helvetica',
        fontWeight: 'normal'
    },
    correctAnswerButton:{
        backgroundColor : '#CAF5C6',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
        height: 50
    },
    wrongAnswerButton:{
        backgroundColor : '#e99595',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
        height: 50
    },
    none:{
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
    },
    startTestContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100
    },
    resultBox:{
        backgroundColor: '#ccecf8',
        borderRadius: 20,
        height: '30%',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center'
    },
    testPassedText:{
        fontSize: 20,
        fontFamily:'Futura',
        color:'#39c636'
    },
    testFailedText:{
        fontSize: 20,
        fontFamily:'Futura',
        color:'#f54545'
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