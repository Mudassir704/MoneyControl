import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Box from '../components/Box';
import SmallBackground from '../components/SmallBackground'

const HomePage = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <SmallBackground title="Overview">
                <Text>Hi Mudassir</Text>
            </SmallBackground>
            <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <View style={styles.boxContainer}>
                <Box title = "Investment" onPress = {() => navigation.navigate('Investment')}/>
                <Box title = "Liablities" onPress = {() => navigation.navigate('Liablities')}/>
            </View>
            <View style={styles.boxContainer}>
                <Box title = "Borrowed" onPress = {() => navigation.navigate('Borrowed')}/>
                <Box title = "Given" onPress = {() => navigation.navigate('Given')}/>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContainer: {
       flexDirection: 'row',
    }
});

export default HomePage;