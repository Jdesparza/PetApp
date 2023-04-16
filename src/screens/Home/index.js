import { View, Text, ScrollView, Image, FlatList, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta'
import styles from './styles'
import CardAd from '../../components/CardAd';
import CardVeterinaryNearby from '../../components/CardVeterinaryNearby';

const Home = ({ toggleDarkMode }) => {

    const [isActiveBtnCategory, setIsActiveBtnCategory] = useState(0)

    useFocusEffect(
        React.useCallback(() => {
            toggleDarkMode(false);
        }, [])
    );

    const scrollAnimation = React.useRef(new Animated.Value(0)).current

    const categories = [
        {
            id: 0,
            icon: require('../../assets/icon/paw-1.png'),
            title: 'Veterinary'
        },
        {
            id: 1,
            icon: require('../../assets/icon/grooming-1.png'),
            title: 'Grooming'
        },
        {
            id: 2,
            icon: require('../../assets/icon/pet-food-1.png'),
            title: 'Foods'
        },
        {
            id: 3,
            icon: require('../../assets/icon/training-1.png'),
            title: 'Training'
        },
    ]

    return (
        <View style={styles.main}>
            <ScrollView>
                <View style={styles.head}>
                    <View>
                        <Text style={styles.userName}>Hi Jordy Esparza</Text>
                        <Text style={styles.phrase}>Good Morning!</Text>
                    </View>
                    <Image source={require('../../assets/img/profile.jpg')} style={styles.avatar} />
                </View>
                <CardAd />
                <View style={styles.sectionInfo}>
                    <View style={styles.titleCatContainer}>
                        <Text style={styles.titleCategory}>Category</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>
                    <Animated.FlatList
                        data={categories}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.btnCategory, styles.shadow]} onPress={() => setIsActiveBtnCategory(index)}>
                                    <View style={[styles.iconCategoryContainer, { backgroundColor: isActiveBtnCategory === index ? COLOR_PRIMARY : COLOR_TERTIARY }]}>
                                        <Image source={item.icon} style={[styles.iconCategory, { tintColor: isActiveBtnCategory === index ? 'white' : COLOR_QUATERNARY }]} />
                                    </View>
                                    <Text style={styles.textCategory}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimation } } }],
                            { useNativeDriver: true })}
                        ItemSeparatorComponent={() => <View style={{ padding: 15.5 }}></View>}
                    />
                </View>
                <View style={styles.sectionInfo}>
                    <View style={styles.titleCatContainer}>
                        <Text style={styles.titleCategory}>Nearby Veterinary</Text>
                        <Text style={styles.seeAll}>See all</Text>
                    </View>
                    <CardVeterinaryNearby />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home