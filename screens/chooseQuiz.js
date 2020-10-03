import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Button from '../components/Button';
import axios from 'axios';
import {connect} from 'react-redux';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar/TabBar';

const ChooseQuiz = ({loginReducer, navigation}) => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('matematyka');
    const [includesAlbum, setIncludesAlbum] = useState(false);


    const getCategories = async () => {
        await axios.get(`${API_URL}/test/findAllCategories`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const checkPermission = async (successCallback) => {
        setIncludesAlbum(false);
        try{
            const {data} = await axios.get(`${API_URL}/permission/findByCategory/${selectedItem}`);
            if(data[0].userAlbums.includes(loginReducer.loginData.user.albumNo)){
                setIncludesAlbum(true);
                successCallback();
            } else {
            }
        } catch (err) {
        }
    }

    useEffect(() => {
        getCategories();
    },[]);

    if(data.length === 0){
        return(
            <View style={{alignItems: 'center'}}>
                <ActivityIndicator/>
            </View>
        )}
    else{
        return (
            <View style={styles.container}>
                <View style={{marginTop: '40%'}}>
                    <Text style={styles.titleText}>Wybierz temat testu:</Text>
                    <Picker
                        style={styles.datePicker}
                        selectedValue={selectedItem}
                        onValueChange={value => {
                            setSelectedItem(value);
                        }}>
                        {data.map((value, index) => <Picker.Item label={`${value}`} value={`${value}`} key={index}/>)}
                    </Picker>
                    <View style={{paddingLeft: '25%'}}>
                        <Button text={'Start test!'} isButtonDark={true}
                                onPress={() =>
                                    checkPermission(() => navigation.navigate('QuizScreen', {testCategory: selectedItem}))}
                        />
                    </View>
                </View>
                <TabBar navigation={navigation} currentScreen={'ChooseQuiz'}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between'
    },
    titleText:{
        fontSize:20,
        fontFamily: 'Futura',
        textAlign: 'center',
        paddingTop:10,
    },
    datePicker:{
        margin:10,
    },
    button:{
        justifyContent:'center'
    }
});

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

export default connect(mapStateToProps)(ChooseQuiz);
