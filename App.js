import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './Navigation/AppNavigator';
// import Card from './components/Card';
// import CustomerDetails from './screen/CustomerDetails';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <CustomerDetails />
  );
}


