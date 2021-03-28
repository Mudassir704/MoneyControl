import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from '../screen/Account';
import HomeNavigator from './HomeNavigator';

const TabNavigator = createBottomTabNavigator();

export default () => {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="HomePage" component={HomeNavigator}/>
            <TabNavigator.Screen name="Account" component={Account}/>
        </TabNavigator.Navigator>
    )
}
