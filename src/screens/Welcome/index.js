import { View, Text, Image, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useRef, useEffect } from 'react'
import styles from './styles';
import { COLOR_PRIMARY } from '../../utils/paleta';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather'

const Welcome = ({ toggleDarkMode }) => {

    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            toggleDarkMode(true);
        }, [])
    );

    const fadeAnimText = useRef(new Animated.Value(0)).current;
    const fadeAnimImg = useRef(new Animated.Value(0)).current;

    Animated.timing(fadeAnimText, {
        toValue: 1,
        duration: 1200,
        easing: Easing.circle,
        useNativeDriver: true, // <-- Set this to true
    }).start();

    Animated.timing(fadeAnimImg, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true, // <-- Set this to true
    }).start();

    const transformText = {
        transform: [
            {
                translateX: fadeAnimText.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-90, 10]
                })
            },
            {
                translateY: fadeAnimText.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-60, 2]
                })
            },
            {
                scale: fadeAnimText.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                })
            },
        ]
    };

    const transformImg = {
        transform: [
            {
                translateX: fadeAnimImg.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -28]
                })
            },
            {
                translateY: fadeAnimImg.interpolate({
                    inputRange: [0, 1],
                    outputRange: [30, 0]
                })
            },
        ]
    };

    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <Animated.Text style={[styles.title, transformText]}>Homey {'\n'}Pet</Animated.Text>
                <Animated.Image source={require('../../assets/img/cat.png')} style={[styles.img, transformImg]} />
            </View>
            <View style={[styles.description, styles.shadow(13)]}>
                <View style={styles.oval} />
                <View>
                    <Text style={styles.titleDescription}>Take Care Of {'\n'}Your Pet</Text>
                    <Text style={styles.subtitleDescription}>Make your bonding relationship between
                        <Text style={{ color: COLOR_PRIMARY, fontWeight: 'bold' }}> Pets & humans</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('HomeBottomTabNavigator')}>
                    <Feather name='chevron-right' size={30} style={styles.iconBtnStart} />
                    <Text style={styles.titleBtnStart}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome