import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        alignItems: 'center',
    },
    userImage: {
        width: 250,
        height: 250,
        borderRadius: 200,
    },
    userInfoText: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        color: '#707070',
    },
    userCoursesText: {
      fontFamily: 'Helvetica',
      fontSize: 18,
      color: '#707070'
    },
    userNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        marginTop: 12,
    },
    userInfoContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        paddingBottom: 10,
        borderColor: '#676767',
    },
    userImageContainer: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 0.25,
        borderColor: '#888888',
        paddingTop: '10%',
        paddingBottom: '5%',
        marginBottom: 25,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    userSmallText: {
        fontFamily: 'Helvetica',
        color: '#707070',
    },
    latestGradesContainer: {
        flexDirection: 'row',
        width: '100%',
        borderColor: '#676767',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    latestGradesLeftContainer: {
        marginLeft: 5,
        width: '70%',
    },
    latestGradesRightContainer: {
        marginRight: 5,
    },
    userCoursesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    userInfoItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -50
    },
    userInfoItemIcon: {
        width: 50,
        height: 50
    }
});