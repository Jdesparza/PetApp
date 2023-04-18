import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: 'white',
        // marginHorizontal: 10,
        paddingTop: 19,
        paddingBottom: 14,
        paddingHorizontal: 17,
        borderRadius: 33,
        height: 135,
        justifyContent: 'space-between'
    },
    name: {
        color: COLOR_SECONDARY,
        fontSize: 20,
        fontWeight: '500'
    },
    ocuppation: {
        color: COLOR_QUATERNARY,
        fontSize: 16,
        fontWeight: '400'
    },
    costConsultation: {
        color: COLOR_PRIMARY,
        fontWeight: '600',
        fontSize: 20
    },
    experience: {
        color: COLOR_QUATERNARY,
        fontSize: 14,
        fontWeight: '500'
    },
    btnCont: {
        backgroundColor: COLOR_TERTIARY,
        width: 105,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    textBtn: {
        color: COLOR_PRIMARY,
        fontSize: 12,
        fontWeight: '700',
    }
})

export default styles;