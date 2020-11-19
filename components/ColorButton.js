import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ColorButton = ({ onPress, text, buttonColor, disabled }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.container,
                disabled ? styles.disabled : null,
                {backgroundColor: buttonColor}
            ]}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    colorContainer: {
    },

    text: {
        fontFamily: 'Helvetica',
        letterSpacing: 1,
        fontWeight: '500',
        color: '#FFF',
        fontSize: 18
    },
    lightThemeText: {
        color: '#f1f1f1'
    },
    darkThemeText: {
        color: '#2d2d2d'
    },
    disabled: {
        opacity: 0.5
    }
});

ColorButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    buttonColor: PropTypes.string,
    disabled: PropTypes.bool
};

ColorButton.defaultProps = {
    disabled: false
};

export default ColorButton;