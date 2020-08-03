import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import Button from '../components/Button';
import axios from 'axios';
import {connect} from 'react-redux';


const ChooseQuiz = ({loginReducer, navigation}) => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [includesAlbum, setIncludesAlbum] = useState(false);


    async function getCategories(){
        await axios.get('https://node-app-4fun.herokuapp.com/test/findAllCategories')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const checkPermission = async () => {
        setIncludesAlbum(false);
        try{
            const {data} = await axios.get(`https://node-app-4fun.herokuapp.com/permission/findByCategory/${selectedItem}`);
            if(data[0].userAlbums.includes(loginReducer.loginData.albumNo)){
                setIncludesAlbum(true);
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        getCategories();
    },[]);

    if(data.length === 0){
        return(
            <View/>
        )}
    else{
        return (
            <View>
                <Text style={styles.titleText}>Wybierz temat testu:</Text>
                <Picker
                    style={styles.datePicker}
                    selectedValue={selectedItem}
                    onValueChange={value => {setSelectedItem(value)}}>
                    {data.map((value, index)=><Picker.Item label={`${value}`} value={`${value}`} key={index}/>)}
                </Picker>
                <View style={{paddingLeft:'25%'}}>
                    <Button text={'Start test!'} isButtonDark={true} onPress={() => checkPermission()}/>
                    <Button text={'Test data pass'} isButtonDark={true} onPress={() => navigation.navigate('QuizScreen', {name: selectedItem})}/>
                </View>
                <Text style={styles.titleText}>{`${includesAlbum}`}</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    titleText:{
        fontSize:20,
        fontFamily: 'Futura',
        textAlign: 'center',
        paddingTop:10,
    },
    datePicker:{
        margin:10,
    },
    container:{
        flex:1,
    },
    button:{
        justifyContent:'center'
    }

});

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

export default connect(mapStateToProps)(ChooseQuiz);
