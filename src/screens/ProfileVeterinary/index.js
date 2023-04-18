import { View, Text, ScrollView, TouchableOpacity, Platform, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CardVeterinarian from '../../components/CardVeterinarian';

import ReadMore from '@fawazahmed/react-native-read-more';
import { COLOR_PRIMARY } from '../../utils/paleta';


const MAX_LINES = 2;

const ProfileVeterinary = ({ route }) => {

    const { item } = route.params;
    const navigation = useNavigation();

    const [isFavorite, setIsFavorite] = useState(false)

    const handleReturnPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 13, flex: 1 }}>
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
                <View style={{ marginTop: 11, paddingHorizontal: 11 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.titleInfo}>About Veterinarian</Text>
                        {item.ranking > 0 &&
                            <View style={styles.ranking}>
                                <Fontisto name='star' size={18} color={'#f0da5b'} />
                                <Text style={[styles.titleInfo, { paddingLeft: 4 }]}>{item.ranking}</Text>
                            </View>
                        }
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <ReadMore
                            numberOfLines={2}
                            seeMoreText='see more'
                            seeMoreStyle={{ color: COLOR_PRIMARY, fontWeight: '500' }}
                            seeLessText='see less'
                            seeLessStyle={{ color: COLOR_PRIMARY, fontWeight: '500' }}
                            style={styles.aboutVeterinarian}
                        >
                            {item.aboutVeterinarian}
                        </ReadMore>

                    </View>
                </View>
                <View style={{ marginTop: 11, paddingHorizontal: 11 }} >
                    <Text style={styles.titleInfo}>Location</Text>
                    <Image source={require('../../assets/img/map-location.png')} style={styles.locationMap} />
                </View>
                <View style={{ paddingTop: 95 }} />
            </ScrollView>
            <View style={styles.appointmentBtnCont}>
                <TouchableOpacity style={styles.appointmentBtnTouchCont}>
                    <Text style={styles.appointmentBtnTextCont}>Make on Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileVeterinary