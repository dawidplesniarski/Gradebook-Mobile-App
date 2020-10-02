import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    container:{
        alignItems: 'center',
    },
    flatList:{
        width:'90%',
        marginTop: 10,
    },
    flatListElemContainer:{
        borderRadius:12,
        marginBottom: 20,
        backgroundColor:'#ececec',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    flatListElemText: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        color: '#707070',
    },
    headerText: {
        fontFamily: 'Helvetica',
        fontSize:30,
        color: '#707070',
        marginTop: 20,
        marginBottom: 20
    }
});