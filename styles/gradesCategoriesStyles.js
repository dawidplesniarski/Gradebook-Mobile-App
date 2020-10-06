import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 80,
    },
    container: {
        alignItems: 'center',
    },
    flatList: {
        width: '90%',
        marginTop: 10,
    },
    flatListElemContainer: {
        borderRadius: 12,
        marginBottom: 20,
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    flatListElemText: {
        fontFamily: 'Helvetica',
        fontSize: 22,
        color: '#707070',
    },
    miniChartsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%'
    },
    miniChart: {
        alignItems: 'center'
    },
    miniChartText: {
        fontFamily: 'Helvetica',
        fontWeight: '200'
    }
});