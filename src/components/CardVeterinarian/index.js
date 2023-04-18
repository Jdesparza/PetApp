import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CardVeterinarian = ({ profession, name, ocuppation, experience, costConsultation }) => {
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View>
                    <Text style={styles.name}>{profession}. {name}</Text>
                    <Text style={styles.ocuppation}>{ocuppation}</Text>
                </View>
                <Text style={styles.costConsultation}><Text style={{ fontWeight: 'bold' }}>$</Text>{costConsultation}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.experience}>Experience: {experience} {experience === 1 ? 'year' : 'years'}</Text>
                <TouchableOpacity style={styles.btnCont}>
                    <Text style={styles.textBtn}>Open Practice</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardVeterinarian