import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const HomeBottomTabNavigator = ({ toggleDarkMode }) => {
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLOR_TERTIARY,
                    height: 50,
                    elevation: 0,
                },
                tabBarActiveTintColor: COLOR_PRIMARY,
                tabBarShowLabel: false,
            }}>
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
                <Tab.Screen name={'Notification'} component={Notification}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={styles.viewIcon}>
                                <Ionicons name='md-notifications-outline' size={25} color={color} style={styles.icon} />
                                {color == COLOR_PRIMARY && <Text style={styles.textIcon(color)}>.</Text>}
                            </View>
                        )
                    }}
                />
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
            {/* <View >
                <View style={styles.oval} />
                <Text>Hola</Text>
            </View> */}
        </>
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
        // backgroundColor: 'green',
        bottom: -7,
        position: 'absolute',
    }),
    containerIconUploadWhite: {
        backgroundColor: COLOR_PRIMARY,
        width: 45,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7
    },
    oval: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        borderRadius: 200,
        backgroundColor: COLOR_PRIMARY,
        transform: [
            { scaleX: 2.5 }
        ],
        position: 'absolute',
        top: -30,
    },
})

export default HomeBottomTabNavigator