import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    noti: {
        backgroundColor: 'white', //rgba(242, 242, 245, 1),
        width: '90%',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowRadius: 10,
        elevation: 3,
        borderRadius: 15
    },
    title: {
        color: COLOR_PRIMARY,
        fontSize: 16,
        fontWeight: '500',
    },
    message: {
        color: COLOR_QUATERNARY,
        fontSize: 14,
        fontWeight: '400'
    },
    btnContainer: {
        // backgroundColor: COLOR_TERTIARY,
        height: 70,
        width: '90%',
        position: 'absolute',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: '7%'
    },
    iconBtn: {
    }
})

export default styles