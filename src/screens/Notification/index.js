import { View, Text, Dimensions, Animated, StyleSheet } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import styles from './styles'
import notificationUser from '../../data/notificationUser'
import ListItemNoti from '../../components/ListItemNoti'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const Notification = ({ toggleDarkMode }) => {

    const scrollRef = useRef(null)
    const flatListRef = useRef(null);
    const scrollAnimation = React.useRef(new Animated.Value(0)).current
    const [contCarouselIndex, setContCarouselIndex] = useState(1)
    // const [isManualScroll, setIsManualScroll] = useState(false);

    // const handleScrollBegin = () => {
    //     setIsManualScroll(true);
    // };
    // const handleScrollEnd = () => {
    //     setIsManualScroll(false);
    // };

    useFocusEffect(
        React.useCallback(() => {
            toggleDarkMode(true);
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            const scrollToNextItem = () => {
                // Obtén el índice actual del elemento visible en la FlatList
                const currentIndex = Math.floor(scrollAnimation._value / width);

                // Calcula el índice del siguiente elemento sumando 1 al índice actual
                const nextIndex = currentIndex + contCarouselIndex;

                // Verifica que el índice del siguiente elemento no supere el número total de elementos en la data
                if (nextIndex < carousel.length) {
                    // Calcula el desplazamiento del siguiente elemento usando snapToInterval
                    const nextOffset = nextIndex * width;

                    // Desplaza la FlatList al siguiente offset con animación
                    flatListRef.current.scrollToOffset({ offset: nextOffset, animated: true });
                }
            };


            if (contCarouselIndex <= carousel.length - 1) {
                setTimeout(() => {
                    scrollToNextItem()
                    setContCarouselIndex((contCarouselIndex) => contCarouselIndex + 1)
                    // console.log(contCarouselIndex)
                }, 3000);
            } else {
                setContCarouselIndex(0)
            }
        }, [contCarouselIndex])
    );

    const carousel = [
        {
            id: 0,
            imageUri: require('../../assets/img/notificationImg/c-0.jpg')
        },
        {
            id: 1,
            imageUri: require('../../assets/img/notificationImg/c-1.jpg')
        },
        {
            id: 2,
            imageUri: require('../../assets/img/notificationImg/c-2.jpg')
        },
        {
            id: 3,
            imageUri: require('../../assets/img/notificationImg/c-3.jpg')
        },
        {
            id: 4,
            imageUri: require('../../assets/img/notificationImg/c-4.jpg')
        },
        {
            id: 5,
            imageUri: require('../../assets/img/notificationImg/c-5.jpg')
        },
        {
            id: 6,
            imageUri: require('../../assets/img/notificationImg/c-6.jpg')
        }
    ]

    return (
        <View style={styles.main}>
            <View style={styles.contFlatList}>
                <Animated.FlatList
                    ref={flatListRef}
                    data={carousel}
                    horizontal
                    pagingEnabled
                    // snapToInterval={300}
                    // decelerationRate="fast"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    onScroll={
                        Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
                            {
                                useNativeDriver: true,
                                // listener: event => {
                                //     const index = Math.round(
                                //         event.nativeEvent.contentOffset.x / width
                                //     );
                                //     // setCurrentIndex(index);
                                //     if (contCarouselIndex != index && index >= 0) setContCarouselIndex(index)

                                // },

                            }
                        )
                    }
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.itemCarousel}>
                                <Animated.Image source={item.imageUri} style={[styles.carouselImg, {
                                    transform: [{
                                        translateX: scrollAnimation.interpolate({
                                            inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                            outputRange: [-width * 0.5, 0, width * 0.5]
                                        })
                                    }]
                                }]} />
                                <Animated.View style={[StyleSheet.absoluteFillObject, styles.itemOverlay]} />
                            </View>
                        )
                    }}
                    // scrollEventThrottle={1}
                    scrollEnabled={true}
                // onScrollBeginDrag={handleScrollBegin}
                // onScrollEndDrag={handleScrollEnd}
                />
                <Text style={styles.titleScreen}>Notificaciones</Text>
            </View>
            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 0, flex: 1, paddingTop: 10 }}>
                {notificationUser.map((noti) => (
                    <ListItemNoti key={noti.id} {...noti} />
                ))}
                <View style={{ paddingTop: 35 }} />
            </ScrollView>
        </View>
    )
}

export default Notification