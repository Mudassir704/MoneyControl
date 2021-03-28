import React from 'react'
import { ScrollView, Text } from 'react-native'
import Background from '../components/Background'
import Box1 from '../components/Box1'
import { colors } from '../src/colors'

export default function Borrowed({ navigation }) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
            <Background title="Borrowed" onBack = {() => navigation.goBack()}>
                <Box1 title="Borrowed">
                    <Text>Rs. 10000</Text>
                </Box1>
                <Box1 title="Returned">
                    <Text>Rs. 10000</Text>
                </Box1>
            </Background>
        </ScrollView>
    )
}
