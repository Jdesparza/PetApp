import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { COLOR_PRIMARY, COLOR_TERTIARY } from '../../utils/paleta'

import { useNavigation } from '@react-navigation/native'

const CardVeterinaryNearby = (item) => {
    const navigation = useNavigation()

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.containerImg}>
                    <Image source={item.imageUri} style={styles.imgProfile} />
                    {item.ranking > 0 &&
                        <View style={styles.ranking}>
                            <Fontisto name='star' size={12} color={'yellow'} />
                            <Text style={styles.rankingText}>{item.ranking}</Text>
                        </View>
                    }
                </View>
                <View style={styles.containerInfo}>
                    <View>
                        <Text style={styles.peopleName}>{item.profession}. {item.name}</Text>
                        <Text style={styles.peopleOccupation}>{item.ocuppation}</Text>
                    </View>
                    <View style={styles.veterinaryPeoInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.iconVeterinary, { textAlign: 'center', fontSize: 12, fontWeight: '700', color: COLOR_PRIMARY }]}>$</Text>
                            <Text style={styles.veterinaryInfo}>{item.costConsultation}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.iconVeterinary, { justifyContent: 'center', alignItems: 'center', }]}>
                                <Ionicons name='location-sharp' size={12} color={COLOR_PRIMARY} />
                            </View>
                            <Text style={styles.veterinaryInfo}>{item.location.distanceKm}<Text style={{ fontSize: 11 }}>km</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('ProfileVeterinary', { item })}>
                <Feather name='chevron-right' size={25} style={styles.iconBtnStart} />
            </TouchableOpacity>
        </View>
    )
}

export default CardVeterinaryNearby