import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../src/colors';
import { ScreenWidth } from './ScreenSize';
import { Icon } from 'react-native-elements';

const Deleteitem = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name="trash-can" type="material-community" size={30} color={colors.offWhite} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: ScreenWidth * 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Deleteitem;