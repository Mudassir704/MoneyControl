import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableHighlightComponent } from 'react-native';

const ButtonBox = ({ text, onPress }) => {
    return ( 
        <TouchableOpacity onPress={onPress}>
            <View style={styles.box}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
     );
}
 

const styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 20,
    } 
});
export default ButtonBox;