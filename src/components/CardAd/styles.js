import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        height: 175,
    },
    titleCard: {
        fontSize: 19,
        color: 'white',
        fontWeight: '500',
        letterSpacing: .5
    },
    btnCard: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 13,
        marginBottom: 5,
        width: 110
    },
    btnTextCard: {
        color: COLOR_SECONDARY,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
    },
    imgCard: {
        position: 'absolute',
        width: 67,
        height: 90,
    },
    imgCardHorizontal: {
        position: 'absolute',
        width: 80,
        height: 50
    }
})

export default styles;