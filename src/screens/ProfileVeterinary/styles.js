import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(242, 242, 245, 1)',
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), //+10
        // paddingBottom: 13,
    },
    imgBackground: {
        width: width - 26,
        height: height / 2 + 20, //height / 2
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 37,
        overflow: 'hidden',
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 7.5,
        marginTop: 5
    },
    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vectorIconBackCont: {
        width: 47,
        height: 47,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255, .35)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    vectorIconImg: {
        width: '47%',
        height: '47%',
        resizeMode: 'contain',
        transform: [{
            scaleX: -1
        }]
    },
    titleInfo: {
        color: COLOR_SECONDARY,
        fontSize: 19,
        fontWeight: 'bold',
    },
    ranking: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center'
    },
    aboutVeterinarian: {
        color: COLOR_QUATERNARY,
        fontSize: 16,
        letterSpacing: .2,
        textAlign: 'justify',
        fontWeight: '400',
    },
    locationMap: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 25,
        marginTop: 12
    },
    appointmentBtnCont: {
        backgroundColor: 'rgba(242, 242, 245, .95)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 85,
        width,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingVertical: 10,
        paddingHorizontal: 22,
        // elevation: 5
    },
    appointmentBtnTouchCont: {
        backgroundColor: COLOR_PRIMARY,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    appointmentBtnTextCont: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: .5
    }
})

export default styles;