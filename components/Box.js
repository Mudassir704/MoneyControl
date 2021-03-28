import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Box({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.box} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        margin: 30,
        height: windowHeight * 0.20,
        width: windowWidth * 0.30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: windowHeight * 0.02,
        borderWidth: 2,
    },
});
