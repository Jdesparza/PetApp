import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/Home'
import { COLOR_PRIMARY, COLOR_TERTIARY } from '../utils/paleta';
import Chat from '../screens/Chat';
import Store from '../screens/Store';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator()

const OvalTabHeader = (props) => {
    return (
        <View style={{
            height: 50,
            backgroundColor: 'green',
        }}>
            <View style={styles.oval} />
            <BottomTabBar  {...props} />
        </View>
    );
};

const HomeBottomTabNavigator = ({ toggleDarkMode }) => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    // height: 50,
                    elevation: 0,
                    position: 'absolute',
                    bottom: 4,
                    borderTopWidth: 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                },
                tabBarActiveTintColor: COLOR_PRIMARY,
                tabBarShowLabel: false,

            }}
            tabBar={(props) => <OvalTabHeader {...props} />}
        >
            <Tab.Screen name={'Home'}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Foundation name='home' size={25} color={color} style={styles.icon} />
                            {color == COLOR_PRIMARY && <Text style={styles.textIcon(color)}>.</Text>}
                        </View>
                    )
                }}
            >
                {props => <Home {...props} toggleDarkMode={toggleDarkMode} />}
            </Tab.Screen>
            <Tab.Screen name={'Chat'} component={Chat}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Ionicons name='md-chatbubble-ellipses-outline' size={25} color={color} style={styles.icon} />
                            {color == COLOR_PRIMARY && <Text style={styles.textIcon(color)}>.</Text>}
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Store'} component={Store}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View>
                            <View style={styles.containerIconUploadWhite}>
                                <Feather name='shopping-cart' size={22} color={'white'} />
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen name={'Notification'}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Ionicons name='md-notifications-outline' size={25} color={color} style={styles.icon} />
                            {color == COLOR_PRIMARY && <Text style={styles.textIcon(color)}>.</Text>}
                        </View>
                    )
                }}
            >
                {props => <Notification {...props} toggleDarkMode={toggleDarkMode} />}
            </Tab.Screen>
            <Tab.Screen name={'Profile'} component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={styles.viewIcon}>
                            <Ionicons name='person-outline' size={25} color={color} style={styles.icon} />
                            {color == COLOR_PRIMARY && <Text style={styles.textIcon(color)}>.</Text>}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    viewIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginBottom: 7
    },
    textIcon: (color) => ({
        color,
        fontSize: 20,
        fontWeight: 'bold',
        bottom: -7,
        position: 'absolute',
    }),
    containerIconUploadWhite: {
        backgroundColor: COLOR_PRIMARY,
        width: 43,
        height: 43,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7
    },
    oval: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        borderRadius: 200,
        backgroundColor: COLOR_TERTIARY,
        transform: [
            { scaleX: 2.3 }
        ],
        position: 'absolute',
        top: -20,
        elevation: 5
    },
})

export default HomeBottomTabNavigator