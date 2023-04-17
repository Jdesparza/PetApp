import { View, Text, Image, ImageBackground, TouchableOpacity, Animated as ReactNativeAnimated, Easing } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import styles from './styles';
import { COLOR_PRIMARY, COLOR_TERTIARY } from '../../utils/paleta';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, interpolateColor, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const BUTTOM_WIDTH = 240
const BUTTOM_HEIGHT = 70
const BUTTOM_PADDING = 7
const SWIPEABLE_DIMENSIONS = BUTTOM_HEIGHT - 2 * BUTTOM_PADDING

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTOM_PADDING
const H_SWIPE_RANGE = BUTTOM_WIDTH - 2 * BUTTOM_PADDING - SWIPEABLE_DIMENSIONS

const Welcome = ({ toggleDarkMode }) => {

    const navigation = useNavigation()

    const [toggled, setToggled] = useState(false);
    const [timingAnim, setTimingAnim] = useState(100)

    const gestureTranslationX = useSharedValue(0);

    const fadeAnimText = useRef(new ReactNativeAnimated.Value(0)).current;
    const fadeAnimImg = useRef(new ReactNativeAnimated.Value(0)).current;

    useFocusEffect(
        React.useCallback(() => {
            toggleDarkMode(true);
            startAnimations();
        }, [])
    );

    const resetAnimations = () => {
        fadeAnimText.setValue(0)
        fadeAnimImg.setValue(0)
        gestureTranslationX.value = 0
        // console.log('reset')
    }

    React.useEffect(() => {
        if (toggled) {
            const timer = window.setInterval(() => {
                navigation.navigate('HomeBottomTabNavigator')
                resetAnimations()
                setToggled(false)

                // return () => {
                //     clearTimeout(animationTimeout);
                //   };
            }, timingAnim);

            return () => {
                window.clearInterval(timer);
            };
        }
    }, [toggled]);

    const startAnimations = () => {
        ReactNativeAnimated.timing(fadeAnimText, {
            toValue: 1,
            duration: 1200,
            easing: Easing.circle,
            useNativeDriver: true, // <-- Set this to true
        }).start();

        ReactNativeAnimated.timing(fadeAnimImg, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true, // <-- Set this to true
        }).start();
    };

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

    const animatedGestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.completed = toggled
        },
        onActive: (e, ctx) => {
            let newValue

            if (ctx.completed) {
                newValue = H_SWIPE_RANGE + e.translationX
            } else {
                newValue = e.translationX
            }

            if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
                gestureTranslationX.value = newValue
            }
        },
        onEnd: () => {
            if (gestureTranslationX.value < BUTTOM_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
                gestureTranslationX.value = withSpring(0)
                runOnJS(setToggled)(false)
            } else {
                gestureTranslationX.value = withSpring(H_SWIPE_RANGE)

                if (gestureTranslationX.value >= 160) {
                    runOnJS(setTimingAnim)(100)
                } else if (gestureTranslationX.value >= 135 && gestureTranslationX.value < 160) {
                    runOnJS(setTimingAnim)(400)
                } else {
                    runOnJS(setTimingAnim)(700)
                }

                runOnJS(setToggled)(true)
            }
        }
    })

    const interpolateGestureXInput = [0, H_SWIPE_RANGE]
    const AnimatedStylesGesture = {
        swipeable: useAnimatedStyle(() => {
            return {
                transform: [{ translateX: gestureTranslationX.value }],
                backgroundColor: interpolateColor(
                    gestureTranslationX.value,
                    [0, BUTTOM_WIDTH - SWIPEABLE_DIMENSIONS - BUTTOM_PADDING],
                    ['#fff', COLOR_PRIMARY]
                )
            }
        }),
        swipeText: useAnimatedStyle(() => {
            return {
                opacity: interpolate(
                    gestureTranslationX.value,
                    interpolateGestureXInput,
                    [0.8, 0],
                    Extrapolate.CLAMP
                ),
                transform: [
                    {
                        translateX: interpolate(gestureTranslationX.value, interpolateGestureXInput, [
                            0,
                            BUTTOM_WIDTH / 2 - SWIPEABLE_DIMENSIONS,
                            Extrapolate.CLAMP,
                        ])
                    }
                ]
            }
        }),
        colorWave: useAnimatedStyle(() => {
            return {
                width: H_WAVE_RANGE + gestureTranslationX.value,
                opacity: interpolate(gestureTranslationX.value, interpolateGestureXInput, [0, 1])
            }
        })
    }

    return (
        <View style={styles.main}>
            <View style={styles.head}>
                <ReactNativeAnimated.Text style={[styles.title, transformText]}>Homey {'\n'}Pet</ReactNativeAnimated.Text>
                <ReactNativeAnimated.Image source={require('../../assets/img/cat.png')} style={[styles.img, transformImg]} />
            </View>
            <View style={[styles.description, styles.shadow(13)]}>
                <View style={styles.oval} />
                <View>
                    <Text style={styles.titleDescription}>Take Care Of {'\n'}Your Pet</Text>
                    <Text style={styles.subtitleDescription}>Make your bonding relationship between
                        <Text style={{ color: COLOR_PRIMARY, fontWeight: 'bold' }}> Pets & humans</Text>
                    </Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0, .1)', borderRadius: 70 }}>
                    <View style={styles.swipeContainer}>
                        <AnimatedLinearGradient
                            colors={['transparent', COLOR_TERTIARY, 'rgb(245, 245, 245)']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={[styles.colorWave, AnimatedStylesGesture.colorWave]}
                        />
                        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                            <Animated.View style={[styles.swipeable, AnimatedStylesGesture.swipeable]}>

                            </Animated.View>
                        </PanGestureHandler>
                        <Animated.Text style={[styles.swipeText, AnimatedStylesGesture.swipeText]}>Get Started</Animated.Text>
                    </View>
                </View>


                {/* <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('HomeBottomTabNavigator')}>
                    <Feather name='chevron-right' size={30} style={styles.iconBtnStart} />
                    <Text style={styles.titleBtnStart}>Get Started</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Welcome