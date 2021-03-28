import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { colors } from '../src/colors';
import { ScreenWidth, ScreenHeight } from './ScreenSize';

const Card1 = ({ text1, text2, text3, renderLeftActions, renderRightActions }) => {
    return (
        <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions} >
            <View style={styles.view1}>
                <View style={{height: '100%', width: ScreenWidth * 0.50, alignItems: 'center', padding: 10, backgroundColor: colors.secondary}}>
                    <Text style={styles.text} >{text1}</Text>
                </View>
                <View style={{ height: "100%" ,width: ScreenWidth * 0.25, alignItems: 'center', backgroundColor: colors.light, padding: 10 }} >
                    <Text style={styles.text}>{text2}</Text>
                </View>
                <View style={{ height: '100%', width: ScreenWidth * 0.25, alignItems: 'center', backgroundColor: colors.primary, padding: 10}} >
                    <Text style={styles.text}>{text3}</Text>        
                </View>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    view1: {
        alignItems: 'center',
        backgroundColor: '#f2f3f7',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: ScreenWidth,
        borderBottomWidth: 1
        // height: ScreenHeight * 0.05
    },
    text: {
        color: 'black',
        fontSize: 18,
    }
});


export default Card1;