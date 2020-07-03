import React from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const Screen = ({ navigation, children, theme = 'dark', isLoggedIn }) => {
    return (
        <View
            style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableOpacity style={styles.absoluteView} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.mainTitle}>buyIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.leftButton}
                    onPress={() => {
                        isLoggedIn ? navigation.navigate('Account') : navigation.navigate('Login');
                    }}
                >
                </TouchableOpacity>

                <View style={styles.childrenWrapper} />
                {children}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    darkBackground: {
        backgroundColor: '#2d2d2d',
        color: '#f1f1f1'
    },
    lightBackground: {
        backgroundColor: '#f1f1f1',
        color: '#2d2d2d'
    },
    absoluteView: {
        position: 'absolute',
        height: 60,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    mainTitle: {
        color: '#868990',
        fontFamily: 'Futura',
        fontSize: 28,
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: [{ translateX: -35 }],
        zIndex: 5
    },
    leftButton: {
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 2
    },
    rightButtons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 15,
        top: 12,
        zIndex: 2,
        alignItems: 'center'
    },
    childrenWrapper: {
        marginBottom: 60
    },
    text: {
        color: '#fff',
        fontSize: 15
    }
});

export default Screen;
