import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import { AdjustText } from './AdjustedText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { colors } from '../src/colors';
import { ScreenHeight } from './ScreenSize';

const Card = ({ text, onPress, renderRightActions, val, icon }) => {
    var profitcolor;
    if(val >= 0){
        profitcolor = colors.primary;
    } else {
        profitcolor = colors.danger;
        val *= -1;
    }
    // const profitcolor = val >= 0 ? colors.primary : colors.danger;
    return (
        <Swipeable  renderRightActions={renderRightActions}>
            <TouchableOpacity style= {styles.view} onPress={onPress}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                        <View style={{ marginRight: 10, width: 40, height: 40, backgroundColor: colors.primary, justifyContent: 'center',alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontSize: 23 }} >{icon.toUpperCase()}</Text>
                        </View>
                        <AdjustText fontSize={25} text={text} numberOfLines={1} />
                    </View>
                    <AdjustText fontSize={25} text={`Rs. ${val}`} numberOfLines={1} style={{ color: profitcolor, fontWeight: "bold" }} />
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    view: {
        // marginTop: 10,
        width: '100%',
        height: ScreenHeight * 0.09,
        // borderWidth: 2,
        justifyContent: 'center',
        // borderRadius: 10
        borderBottomWidth: 1
    },
    text: {
        fontSize: 25,
    }
});

export default Card;