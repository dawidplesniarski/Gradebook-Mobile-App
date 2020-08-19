import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import Button from '../components/Button';
import HamburgerIcon from '../assets/open-menu.png';

const AnotherDetails = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    useEffect(() => {
        axios.get(`https://node-app-4fun.herokuapp.com/grades/findByStudentId/${loginReducer.loginData.user._id}`)
            .then( res =>{
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            });
    },[]);

    const openMenu = () => {
        if(isMenuOpened === false) {
            setIsMenuOpened(true);
        } else {
            setIsMenuOpened(false);
        }
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity
                    styles={{width:'auto'}}
                    onPress={() => openMenu()}
                >
                    <Image
                        style={styles.hamburgerIcon}
                        source={HamburgerIcon}
                    />
                </TouchableOpacity>
            </View>
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
                                <Text style={styles.flatListText}>Przedmiot:: {item.subject}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Data wystawienia: {item.date.substring(0,9)}</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                    <Button text={'Go to quiz'} isButtonDark={true} onPress={() => {navigation.navigate('ChooseQuiz')}}/>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop: 50
    },
    container:{
        //flex:1,
        alignItems: 'center',
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
    hamburgerIcon:{
        marginLeft: 15
    },
    iconsContainer:{
        flexDirection: 'row'
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
