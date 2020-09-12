import React,{useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/gradesScreenStyles';
import { API_URL } from '../utils/helpers';
import SearchIcon from '../assets/search.png'
import TabBar from '../components/TabBar';

const GradesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [typedSubject, setTypedSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        axios.get(`${API_URL}/grades/findByAlbum/${loginReducer.loginData.user.albumNo}`)
            .then( res =>{
                setData(res.data)
            })
            .catch(err =>{
                console.log(err)
            });
    }

    const updateList = () => {
        try{
            setIsLoading(true);
            fetchData();
        } catch(err){
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        placeholder={'Wyszukaj przedmiot'}
                        placeholderTextColor={'#25221E'}
                        style={{width: '80%'}}
                        onChangeText={(text) => setTypedSubject(text)}
                    />
                        <Image source={SearchIcon} style={styles.searchIcon}/>
                </View>
                <FlatList
                    refreshing={isLoading}
                    onRefresh={() => updateList()}
                    style={styles.flatList}
                    data={data.filter(({subject}) => subject.includes(typedSubject))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=>(
                        <View style={item.grade === 3 || item.grade === 3.5 || item.grade === 4  ? styles.flatListContainerYellow : item.grade===4.5 || item.grade === 5 ? styles.flatListContainerGreen : styles.flatListContainerRed}>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Ocena: {item.grade}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Przedmiot: {item.subject}</Text>
                            </View>
                            <View style={styles.flatListView}>
                                <Text style={styles.flatListText}>Data wystawienia: {item.date.substring(0,10)}</Text>
                            </View>
                        </View>
                    )}
                />
                <View>
                </View>
            </View>
            <TabBar navigation={navigation}/>
        </View>
    );
}

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesScreen);
