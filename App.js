import React from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack'

export default function App() {
        return (
            <Navigator/>
        );
};




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     FlatList
// } from 'react-native';
//
//
// export default class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             dataSource: []
//         }
//     }
//     renderItem = ( {item} ) => {
//         return(
//             <View style={styles.listItem}>
//                 <Text>
//                     {item.name}
//                 </Text>
//                 <Text>
//                     {item.lastName}
//                 </Text><Text>
//                 {item.albumNo}
//             </Text><Text>
//                 {item.university}
//             </Text>
//             </View>
//         )
//     }
//
//     componentDidMount() {
//         const url = 'https://node-app-4fun.herokuapp.com/users/findAll';
//
//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     dataSource : responseJson
//                 })
//             })
//             .catch((error => {
//
//             }))
//     }
//
//     render(){
//         return (
//             <View style={styles.container}>
//                 <FlatList style={styles.list}
//                           data={this.state.dataSource}
//                           renderItem={this.renderItem}
//                 />
//             </View>
//         );
//     }
//
//
// };
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent: 'center',
//         width:'100%',
//         padding:10,
//         paddingTop:50,
//     },
//     list:{
//         borderWidth:1,
//     },
//     listItem:{
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         paddingBottom:10,
//         paddingTop: 10,
//     }
// });
