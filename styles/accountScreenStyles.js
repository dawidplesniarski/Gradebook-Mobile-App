import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: 'space-between',
    },
    container:{
        //flex: 1,
        alignItems: 'center',
    },
    userImage:{
        width:300,
        height:300,
        borderRadius: 200,
        borderWidth: 0.25,
    },
    userInfoText:{
        fontFamily: 'Helvetica',
        fontSize: 22,
        color: '#707070'
    },
    userNameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        marginTop: 7
    },
    userInfoContainer:{
        alignItems: 'center',
        // paddingLeft:20,
        justifyContent: 'space-around',
        width: '100%',
        borderBottomWidth: 0.25,
        borderColor: '#676767'
    },
    userImageContainer:{
        width: '100%',
        height: '51%',
        alignItems: 'center',
        // backgroundColor: '#cce8f1',
        borderWidth: 0.25,
        borderColor: '#888888',
        paddingTop: '10%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    userSmallText:{
        fontFamily: "Helvetica",
        color: '#707070'
    },
    latestGradesContainer:{
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 0.25,
        borderColor: '#676767',
        justifyContent: 'space-around',
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    latestGradesLeftContainer:{
        marginLeft: 5,
        width: '70%'
    },
    latestGradesRightContainer:{
        marginRight: 5
    }
});