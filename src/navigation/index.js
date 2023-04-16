import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome'
import Home from '../screens/Home';

const Stack = createStackNavigator()

const RootNavigation = ({ toggleDarkMode }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Welcome'>
                    {props => <Welcome {...props} toggleDarkMode={toggleDarkMode} />}
                </Stack.Screen>
                <Stack.Screen name='Home'>
                    {props => <Home {...props} toggleDarkMode={toggleDarkMode} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation