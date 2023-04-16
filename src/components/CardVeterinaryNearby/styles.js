import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({

    main: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: COLOR_TERTIARY,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 20,
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center'
        // position: 'relative'
    },

    containerImg: {
        width: 90,
        height: '100%',
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 17,
        overflow: 'hidden'
    },
    imgProfile: {
        width: '100%',
        height: '100%',

        // resizeMode: 'cover'
    },
    containerInfo: {
        justifyContent: 'space-between',
        marginLeft: '5%',
    },
    peopleName: {
        color: COLOR_SECONDARY,
        fontSize: 17,
        fontWeight: '600'
    },
    peopleOccupation: {
        color: COLOR_QUATERNARY,
        fontSize: 14,
        fontWeight: '400'
    },
    veterinaryPeoInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 135
    },
    iconVeterinary: {
        backgroundColor: 'rgba(252, 147, 64, .3)',
        width: 18,
        height: 18,
        borderRadius: 30,
        marginRight: 3,
    },
    veterinaryInfo: {
        color: COLOR_PRIMARY,
        fontSize: 16,
        fontWeight: '500'
    },
    btnStart: {
        backgroundColor: COLOR_PRIMARY,
        width: 45,
        height: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtnStart: {
        color: 'white',
    },
})

export default styles;