import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';

const AnotherDetails = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://node-app-4fun.herokuapp.com/grades/findByStudentId/${loginReducer.loginData._id}`)
            .then( res =>{
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            });
    },[]);


    return(
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item})=>(
                    <View style={styles.flatListContainer}>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Ocena: {item.grade}</Text>
                        </View>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Przedmiot:: {item.subject}</Text>
                        </View>
                        <View style={styles.flatListView}>
                            <Text style={styles.flatListText}>Data wystawienia: {item.date}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    flatList:{
        width:'90%',
        marginTop: 10,
    },
    flatListContainer:{
        borderWidth:1,
        borderRadius:7,
        marginBottom: 20,
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
    }
});

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnotherDetails);
