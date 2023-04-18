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
        height: height / 2,
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 37,
        overflow: 'hidden',
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 7.5
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
        fontWeight: 'bold'
    },
    ranking: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center'
    },
    aboutVeterinarian: {
        color: COLOR_QUATERNARY
    },

    rowContainer: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: COLOR_QUATERNARY
    },
    link: {
        color: 'blue',
    },
})

export default styles;