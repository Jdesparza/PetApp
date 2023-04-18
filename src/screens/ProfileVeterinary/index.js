import { View, Text, ScrollView, TouchableOpacity, Platform, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CardVeterinarian from '../../components/CardVeterinarian';


const MAX_LINES = 2;

const ProfileVeterinary = ({ toggleDarkMode, route }) => {

    const { item } = route.params;
    const navigation = useNavigation();

    const [isFavorite, setIsFavorite] = useState(false)
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    useFocusEffect(
        React.useCallback(() => {
            toggleDarkMode(false);
        }, [])
    );

    const handleReturnPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.main}>
            <ScrollView style={{ paddingHorizontal: 13, flex: 1 }}>
                <ImageBackground source={item.imageUri} resizeMode='cover' style={styles.imgBackground}>
                    <View style={styles.containerIcons}>
                        <TouchableOpacity style={styles.vectorIconBackCont} onPress={handleReturnPress}>
                            <Feather name='chevron-left' size={30} color={'white'} style={{ left: -1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.vectorIconBackCont} onPress={() => setIsFavorite(!isFavorite)}>
                            <Image source={require('../../assets/icon/favorite.png')} style={[styles.vectorIconImg, { tintColor: isFavorite ? 'red' : 'rgba(255, 255, 255, .7)' }]} />
                        </TouchableOpacity>
                    </View>
                    <CardVeterinarian {...item} />
                </ImageBackground>
                <View style={{ marginVertical: 7.5, paddingHorizontal: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.titleInfo}>About Veterinarian</Text>
                        {item.ranking > 0 &&
                            <View style={styles.ranking}>
                                <Fontisto name='star' size={18} color={'#f0da5b'} />
                                <Text style={[styles.titleInfo, { paddingLeft: 4 }]}>{item.ranking}</Text>
                            </View>
                        }
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            numberOfLines={showMore ? undefined : MAX_LINES}
                            style={styles.text}
                        >
                            {item.aboutVeterinarian}
                            {item.aboutVeterinarian.split('\n').length < MAX_LINES && (
                                <Text style={styles.link} onPress={handleToggleShowMore}>
                                    {showMore ? 'Ver menos' : 'Ver más'}
                                </Text>
                            )}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileVeterinary