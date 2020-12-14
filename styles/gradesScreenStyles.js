import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: 'space-between',
        paddingTop: 80,
    },
    container:{
        alignItems: 'center',
    },
    flatList:{
        width:'90%',
        marginTop: 10,
        height:'85%',
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
        marginLeft: 15,
    },
    flatListText:{
        fontSize:20,
        fontFamily: 'Helvetica',
        paddingRight: 20,
        fontWeight: '200',
        color: '#454545'
    },
    flatListSubjectText:{
        fontSize:20,
        fontFamily: 'Helvetica',
        paddingRight: 20,
        fontWeight: '400',
        color: '#454545'
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
    }
});