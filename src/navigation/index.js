import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome'
import HomeBottomTabNavigator from './homeBottomTabNavigator';

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
                <Stack.Screen name='HomeBottomTabNavigator'>
                    {props => <HomeBottomTabNavigator {...props} toggleDarkMode={toggleDarkMode} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation