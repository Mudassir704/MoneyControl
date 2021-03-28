import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Investment from '../screen/Investment';
import HomePage from '../screen/HomePage';
import Liablities from '../screen/Liablities';
import Borrowed from '../screen/Borrowed';
import Given from '../screen/Given';
import ModalScreen from '../components/Modal';
import CustomerDetails from '../screen/CustomerDetails';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerShown: false
        }}>
            <Stack.Screen name ="Home" component={HomePage}/>
            <Stack.Screen name ="Investment" component={Investment}/>
            <Stack.Screen name ="Liablities" component={Liablities} />
            <Stack.Screen name ="Borrowed" component={Borrowed} />
            <Stack.Screen name ="Given" component={Given} />
            <Stack.Screen name="Modal" component={ModalScreen}/>
            <Stack.Screen name="Details" component={CustomerDetails} />
        </Stack.Navigator>
    )
}


