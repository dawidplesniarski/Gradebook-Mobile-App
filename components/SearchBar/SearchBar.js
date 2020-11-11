import {View, TextInput, Image} from 'react-native';
import React from 'react';
import styles from './searchBarStyles';
import SearchIcon from '../../assets/search.png'

const SearchBar = ({placeholder, action}) => {
    return(
        <View style={styles.searchBarContainer}>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#3b3835'}
            placeHolderTextFamily={'Helvetica'}
            style={{width: '80%'}}
            onChangeText={action}
        />
        <Image source={SearchIcon} style={styles.searchIcon}/>
    </View>
    )
};

export default SearchBar;