import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { colors } from '../src/colors';
import { ScreenWidth } from './ScreenSize';
import { Icon } from 'react-native-elements';

const EditItem = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name="pencil" type="material-community" size={30} color={colors.offWhite} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: ScreenWidth * 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditItem;