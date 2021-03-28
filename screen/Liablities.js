import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Background from '../components/Background'

export default function Liablities({ navigation }) {
    return (
        <Background title="Liablities" onBack={() => navigation.goBack() }>
            <Text>Liablities</Text>
        </Background>
    )
}

const styles = StyleSheet.create({

});
