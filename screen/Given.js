import React from 'react'
import { View, Text } from 'react-native'
import Background from '../components/Background'

export default function Given({ navigation }) {
    return (
        <Background title="Given Amount" onBack={() => navigation.goBack() }>
            <Text>GIven Amount</Text>
        </Background>
    )
}
