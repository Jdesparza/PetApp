import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const CardAd = () => {
    return (
        <View style={styles.main}>
            <View style={{ justifyContent: 'space-between', width: '100%', height: '100%', zIndex: 1 }}>
                <Text style={styles.titleCard}>Join our Pet Lover {'\n'}Community</Text>
                <TouchableOpacity style={styles.btnCard} onPress={() => console.log('Join')}>
                    <Text style={styles.btnTextCard}>Join now</Text>
                </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                <Image source={require('../../assets/img/dog-1.png')} style={[styles.imgCard, { right: 15, bottom: 15, zIndex: 1 }]} />
                <Image source={require('../../assets/img/dog-2.png')} style={[styles.imgCard, { right: 60, bottom: 20, transform: [{ scaleX: -1 }] }]} />
                <Image source={require('../../assets/img/cat-2.png')} style={[styles.imgCardHorizontal, { right: 75, bottom: 5, zIndex: 1, }]} />
            </View>
        </View>
    )
}

export default CardAd