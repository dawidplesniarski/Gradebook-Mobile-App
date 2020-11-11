import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {loginFunction} from '../actions/loginActions';
import {connect} from 'react-redux';
import styles from '../styles/gradesCategoriesStyles';
import {API_URL} from '../utils/helpers';
import TabBar from '../components/TabBar/TabBar';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../components/SearchBar/SearchBar';
import PieChart from '../components/PieChart';

const GradesCategoriesScreen = ({navigation, loginReducer}) => {
    const [data, setData] = useState([]);
    const [typedSubject, setTypedSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [studentEcts, setStudentEcts] = useState('');
    const [totalEcts, setTotalEcts] = useState('');
    const courseName = navigation.getParam('course');
    const courseIndex = navigation.getParam('index');
    let semester = loginReducer.loginData.user.semesters[courseIndex];

    const fetchData = () => {
        if (!semester) {
            semester = 1;
        }
        axios.get(`${API_URL}/courseSubjects/findBySemester/${courseName}/${semester}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    async function fetchEcts() {
        await axios.get(`${API_URL}/subject/totalEcts/${courseName}/${semester}/${loginReducer.loginData.user.albumNo}`)
            .then(res => {
            setStudentEcts(res.data.ects);
            setTotalEcts(res.data.totalEcts);
        }).catch(err => {
            console.log(err);
        });
    };

    const updateList = () => {
        try {
            setIsLoading(true);
            fetchData();
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        fetchEcts();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>

                <View style={styles.miniChartsContainer}>
                    <View style={styles.miniChart}>
                        <Text style={styles.miniChartText}>Semestr {semester}/7</Text>
                        <PieChart radius={25} innerRadius={20} percentage={(semester / 7) * 100} color={'#FF5E5B'} backgroundColor={'#ddd'}/>
                    </View>
                    <View style={styles.miniChart}>
                        <Text style={styles.miniChartText}>Rok {Math.ceil(semester / 2)}/4</Text>
                        <PieChart radius={25} innerRadius={20} percentage={(Math.ceil(semester / 2) / 4) * 100} color={'#FF5E5B'} backgroundColor={'#ddd'}/>
                    </View>
                    <View style={styles.miniChart}>
                        <Text style={styles.miniChartText}>ECTS {studentEcts}/{totalEcts}</Text>
                        {studentEcts !== '' && totalEcts !== '' && studentEcts !== 0 ?
                            <PieChart radius={25} innerRadius={20} percentage={(studentEcts / totalEcts) * 100} color={'#FF5E5B'} backgroundColor={'#ddd'}/>
                            :
                            <PieChart radius={25} innerRadius={20} percentage={50} color={'#FF5E5B'} backgroundColor={'#ddd'}/>
                        }
                    </View>
                </View>

                <SearchBar action={(text) => setTypedSubject(text)} placeholder={'Wyszukaj po przedmiocie'}/>

                <TouchableOpacity
                    style={{width: '90%', marginTop: 10}}
                    onPress={() => navigation.navigate('GradesScreen', {subject: ''})}
                >
                    <LinearGradient colors={['#bee3ec', '#e3f8fc', '#bee3ec']} style={styles.flatListElemContainer}>
                        <View>
                            <Text style={styles.flatListElemText}>Wszystkie oceny</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <FlatList
                    refreshing={isLoading}
                    onRefresh={() => updateList()}
                    style={styles.flatList}
                    data={data.filter(data => data.includes(typedSubject))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GradesScreen', {subject: item})}
                        >
                            <LinearGradient colors={['#e0e0e0', '#f1f1f1', '#e0e0e0']}
                                            style={styles.flatListElemContainer}>
                                <View>
                                    <Text style={styles.flatListElemText}>{item}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TabBar navigation={navigation} currentScreen={'Grades'}/>
        </View>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password) => dispatch(loginFunction(login, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GradesCategoriesScreen);
