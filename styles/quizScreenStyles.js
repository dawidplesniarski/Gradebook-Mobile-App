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
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20,
    },
    none:{
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20
    },
    startTestContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});