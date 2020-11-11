import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Button from '../components/Button';
import axios from 'axios';
import {connect} from 'react-redux';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar/TabBar';
import AlertComponent from '../components/Alert/AlertComponent';
import QuizImage from '../assets/choose-quiz.png';
import ColorButton from '../components/ColorButton';

const ChooseQuiz = ({loginReducer, navigation}) => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('matematyka');
    const [includesAlbum, setIncludesAlbum] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);


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
                setAlertVisible(true);
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
            <>
                {alertVisible && <AlertComponent type={'error'} message={`Brak dostępu do testu ${selectedItem}`} onClick={() => setAlertVisible(false)}/>}
                <View style={styles.container}>
                    <View style={{marginTop: '25%'}}>
                        <View style={styles.contentWrapper}>
                            <Image source={QuizImage} style={{width: 250, height: 150}}/>
                            <Text style={styles.headerText}>Wybierz temat testu</Text>
                        </View>
                        <Picker
                            style={styles.datePicker}
                            selectedValue={selectedItem}
                            onValueChange={value => {
                                setSelectedItem(value);
                            }}>
                            {data.map((value, index) => <Picker.Item label={`${value}`} value={`${value}`} key={index}/>)}
                        </Picker>
                        <View style={[styles.contentWrapper, {marginTop: 20}]}>
                            <ColorButton buttonColor={'#0e8ae5'} text={'Zacznij test'} isButtonDark={true}
                                    onPress={() =>
                                        checkPermission(() => navigation.navigate('QuizScreen', {testCategory: selectedItem}))}
                            />
                        </View>
                    </View>
                    <TabBar navigation={navigation} currentScreen={'ChooseQuiz'}/>
                </View>
            </>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    titleText:{
        fontSize:20,
        fontFamily: 'Futura',
        textAlign: 'center',
        paddingTop:10,
    },
    datePicker:{
        marginTop: 25,
        marginBottom: 25,
        width: '85%',
        alignSelf: 'center',
        borderWidth: 0.25,
        borderColor: '#0e8ae5',
        borderRadius: 15
    },
    button:{
        justifyContent:'center'
    },
    headerText: {
        fontFamily: 'Helvetica',
        fontSize: 30,
        fontWeight: '500',
        color: '#0e8ae5',
        marginTop: 20,
        marginBottom: 20
    }
});

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

export default connect(mapStateToProps)(ChooseQuiz);
