import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors } from '../src/colors'

const ScrWidth = Dimensions.get("screen").width;

const CustomButton = ({ onPress, style, title }) => {
    return (
        <TouchableOpacity style={[styles.view, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {
        width: ScrWidth * .90 ,
        backgroundColor: colors.primary
    },
    text: {
        color: "black", 
        fontWeight: "bold", 
        fontSize: 18,
        // backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 30,
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
    }
}); 

export default CustomButton;