import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { colors } from '../src/colors'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Box1({ title, children, style }) {
    return (
        <TouchableOpacity style={[styles.box, style]}>
            <Text style={[styles.text, style]}>{title}</Text>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        margin: 25,
        padding: 10,
        height: windowHeight * 0.18,
        width: windowWidth * 0.30,
        backgroundColor: 'grey',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: windowHeight * 0.02,
        borderWidth: 2,
        
    },
    text: {
        color: colors.white,
        fontSize: 20,
    }
});
