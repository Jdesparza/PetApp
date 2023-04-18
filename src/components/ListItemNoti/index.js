import { View, Text, Dimensions, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR_TERTIARY } from '../../utils/paleta'
import { interpolate } from 'react-native-reanimated'
import { Extrapolate } from 'react-native-reanimated'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const ListItemNoti = ({ title, message, simultaneousHandlers }) => {
    // console.log(title, simultaneousHandlers)

    const translateX = useSharedValue(0)
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const Translate_X_Threshold = -SCREEN_WIDTH * .2
    const itemHeight = useSharedValue(70)
    const marginVertical = useSharedValue(10)

    const showToast = () => {
        ToastAndroid.show(`🔔 ${noti.title.toLowerCase()}, eliminada...`, ToastAndroid.SHORT);
    };

    const createAlert = () => {

        Alert.alert('🚨  Eliminar Notificación', 'Estás seguro que deseas eliminar la notificación', [
            {
                text: 'Cancelar',
                onPress: () => {
                    // console.log('Cancel Pressed')
                    translateX.value = withTiming(0)
                },
                style: 'cancel',
            },
            {
                text: 'Si', onPress: () => {
                    // console.log('OK Pressed'),
                    translateX.value = withTiming(-SCREEN_WIDTH)
                    marginVertical.value = withTiming(0)
                    itemHeight.value = withTiming(0, undefined, (isFinished) => {
                        if (isFinished) {
                            runOnJS(showToast)()
                        }
                    })
                }
            },
        ],
            {
                cancelable: true,
                onDismiss: () => {
                    // console.log('Cancel Pressed')
                    translateX.value = withTiming(0)
                }
            }
        );
    }

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < Translate_X_Threshold
            if (shouldBeDismissed) {
                runOnJS(createAlert)()
            } else {
                translateX.value = withTiming(0)
            }
        }
    })

    const reanimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value
            }
        ]
    }))

    const reanimatedIconStyle = useAnimatedStyle(() => {
        const opacity = withTiming(
            interpolate(
                translateX.value < Translate_X_Threshold,
                [1, 0],
                [1, 0.5],
                Extrapolate.CLAMP
            )
        )
        return { opacity }
    })

    const reanimatedNotiStyle = {
        reanimatedContNoti: useAnimatedStyle(() => {
            return {
                height: itemHeight.value,
                marginVertical: marginVertical.value
            }
        }),
        reanimatedIconNoti: useAnimatedStyle(() => {
            return {
                height: itemHeight.value,
                opacity: interpolate(
                    itemHeight.value === 0,
                    [1, 0],
                    [0.8, 0.4],
                    Extrapolate.CLAMP
                )
            }
        }),
    }

    return (
        <Animated.View style={[styles.main, reanimatedNotiStyle.reanimatedContNoti]}>
            <AnimatedLinearGradient
                colors={['transparent', COLOR_TERTIARY]}
                start={{ x: .3, y: 0.5 }}
                end={{ x: .7, y: 0.5 }}
                style={[styles.btnContainer, reanimatedIconStyle, reanimatedNotiStyle.reanimatedIconNoti]}
            >
                <MaterialCommunityIcons name='delete' size={70 * 0.4} color={'red'} style={styles.iconBtn} />
            </AnimatedLinearGradient>
            <PanGestureHandler simultaneousHandlers={simultaneousHandlers} onGestureEvent={panGesture}>
                <Animated.View style={[styles.noti, reanimatedStyle]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text numberOfLines={1} style={styles.message}>{message}</Text>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    )
}

export default ListItemNoti