import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:'20%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    questionText:{
        fontSize: 20,
        fontFamily: 'Futura',
        fontWeight: '500',
        marginLeft: 10,
        marginRight: 10
    },
    answersContainer:{
        borderRadius:10,
        width:'90%',
        justifyContent: 'space-around',
        paddingLeft: 5
    },
    answersText:{
        fontSize:20,
        fontFamily:'Futura'
    },
    correctAnswerButton:{
        backgroundColor : '#CAF5C6',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
    },
    wrongAnswerButton:{
        backgroundColor : '#EC8686',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
    },
    none:{
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
        paddingTop: 7,
        paddingBottom: 7,
    },
    startTestContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
});