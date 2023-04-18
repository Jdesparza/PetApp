import { View, Text, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import styles from './styles'
import notificationUser from '../../data/notificationUser'
import ListItemNoti from '../../components/ListItemNoti'
import { ScrollView } from 'react-native-gesture-handler'

const Notification = () => {

    const scrollRef = useRef(null)

    return (
        <View style={styles.main}>
            <View style={{ aspectRatio: 19 / 12, backgroundColor: 'yellow' }}>

            </View>
            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 0, flex: 1 }}>
                {notificationUser.map((noti) => (
                    <ListItemNoti key={noti.id} {...noti} simultaneousHandlers={scrollRef} />
                ))}
            </ScrollView>
        </View>
    )
}

export default Notification