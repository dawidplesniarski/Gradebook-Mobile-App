import { StyleSheet } from 'react-native';
export default StyleSheet.create({
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
    },
    searchIcon:{
        flex:1,
        width:null,
        height:null,
        resizeMode: 'contain',
    }
})