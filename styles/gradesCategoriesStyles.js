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
    iconsContainer:{
        flexDirection: 'row',
        backgroundColor: '#e9e9e9',
        borderWidth: 0.25,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-around',
        borderRadius: 15,
    },
    searchBarContainer:{
        width: '90%',
        backgroundColor: '#dadada',
        height: 40,
        margin: 8,
        marginTop:10,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    searchIcon:{
        flex:1,
        width:null,
        height:null,
        resizeMode: 'contain',
    }
});