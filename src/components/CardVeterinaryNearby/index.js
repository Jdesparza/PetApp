import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR_PRIMARY, COLOR_TERTIARY } from '../../utils/paleta'

const CardVeterinaryNearby = () => {
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.containerImg}>
                    <Image source={require('../../assets/img/profile-2.png')} style={styles.imgProfile} />
                </View>
                <View style={styles.containerInfo}>
                    <View>
                        <Text style={styles.peopleName}>Drh. Kevin Julio</Text>
                        <Text style={styles.peopleOccupation}>Veterinary Dentist</Text>
                    </View>
                    <View style={styles.veterinaryPeoInfo}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.iconVeterinary, { textAlign: 'center', fontSize: 12, fontWeight: '700', color: COLOR_PRIMARY }]}>$</Text>
                            <Text style={styles.veterinaryInfo}>150</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.iconVeterinary, { justifyContent: 'center', alignItems: 'center', }]}>
                                <Ionicons name='location-sharp' size={12} color={COLOR_PRIMARY} />
                            </View>
                            <Text style={styles.veterinaryInfo}>1.5<Text style={{ fontSize: 11 }}>km</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.btnStart} onPress={() => console.log('Btn veterinary')}>
                <Feather name='chevron-right' size={25} style={styles.iconBtnStart} />
            </TouchableOpacity>
        </View>
    )
}

export default CardVeterinaryNearby