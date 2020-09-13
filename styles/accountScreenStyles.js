import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    userImage:{
        width:300,
        height:300,
        borderRadius: 200,
        borderWidth: 0.25,
        marginBottom: 15
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
    },
    userInfoContainer:{
        alignItems: 'center',
        // paddingLeft:20,
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
        borderBottomWidth: 0.25,
        borderColor: '#676767'
    },
    userImageContainer:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: '#cce8f1',
        paddingTop: '15%',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200
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
        paddingTop: 13,
        paddingBottom: 13,
    },
    latestGradesLeftContainer:{
        marginLeft: 5,
        width: '70%'
    },
    latestGradesRightContainer:{
        marginRight: 5
    }
});