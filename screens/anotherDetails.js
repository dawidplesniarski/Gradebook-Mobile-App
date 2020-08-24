import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';

import ExamIcon from '../assets/exam.png';
import HomeIcon from '../assets/home.png';
import QuizIcon from '../assets/quiz.png';
import SettingsIcon from '../assets/settings.png';

// import {DrawerActions} from '@react-navigation/native';

const AnotherDetails = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        axios.get(`https://node-app-4fun.herokuapp.com/grades/findByStudentId/${loginReducer.loginData.user._id}`)
            .then( res =>{
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            });
    },[]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.userInfoBox}>
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Imie: {loginReducer.loginData.user.name}</Text>}
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Nazwisko: {loginReducer.loginData.user.lastName}</Text>}
                    {loginReducer.loginData && <Text style={styles.userInfoText}>Album: {loginReducer.loginData.user.albumNo}</Text>}
                </View>
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
                                <Text style={styles.flatListText}>Przedmiot: {item.subject}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Data wystawienia: {item.date.substring(0,9)}</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                </View>
            </View>
            <View style={styles.iconsContainer}>

                {/*<TouchableOpacity*/}
                {/*    styles={{width:'auto'}}*/}
                {/*    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
                {/*>*/}
                {/*    <Image*/}
                {/*        style={styles.topBarIcons}*/}
                {/*        source={HamburgerIcon}*/}
                {/*    />*/}
                {/*</TouchableOpacity>*/}

                <TouchableOpacity
                    styles={{width:'auto'}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={HomeIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    styles={{width:'auto'}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={ExamIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    styles={{width:'auto'}}
                    onPress={() => {navigation.navigate('ChooseQuiz')}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={QuizIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    styles={{width:'auto'}}
                    onPress={() => {navigation.navigate('ChooseQuiz')}}
                >
                    <Image
                        style={styles.topBarIcons}
                        source={SettingsIcon}
                    />
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
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
    flatListContainer:{
        //borderWidth:1,
        borderRadius:12,
        marginBottom: 20,
        backgroundColor:'#D3E1D8'

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
        backgroundColor: '#FFAC95',
        paddingTop: 20,
        paddingBottom: 40,
        justifyContent: 'space-around',
        borderRadius: 15
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
