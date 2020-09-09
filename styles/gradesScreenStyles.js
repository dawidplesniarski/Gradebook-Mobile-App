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
        height:'78%'
    },
    flatListContainerGreen:{
        borderRadius:12,
        marginBottom: 20,
        backgroundColor:'#D3E1D8'
    },
    flatListContainerRed:{
        borderRadius:12,
        marginBottom: 20,
        backgroundColor:'#F5C9C7'
    },
    flatListContainerYellow:{
        borderRadius:12,
        marginBottom: 20,
        backgroundColor:'#F5F3A8'
    },
    flatListView:{
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom:10,
        marginLeft: 5,
    },
    flatListText:{
        fontSize:14,
        fontFamily: 'Futura',
        paddingRight: 20,
    },
    userInfoBox:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    userInfoText:{
        marginTop: 10,
        fontSize:15,
        fontFamily:'Futura',
    },
    iconsContainer:{
        flexDirection: 'row',
        backgroundColor: '#dbd9d9',
        paddingTop: 20,
        paddingBottom: 30,
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
        padding:5
    }
});