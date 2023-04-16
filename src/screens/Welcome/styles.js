import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    shadow: (elevation) => ({
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: elevation,
    }),
    main: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: COLOR_PRIMARY,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    head: {
        marginTop: 2,
        paddingHorizontal: 10,
        height: '45%',
        width,
        // backgroundColor: 'green'
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute'
    },
    img: {
        position: 'absolute',
        // top: -120,
        // left: -28,
        height: '100%',
        resizeMode: 'cover'
    },
    description: {
        padding: 30,
        paddingBottom: 50,
        alignItems: 'center',
        backgroundColor: 'rgb(242, 242, 245)',
        flex: 1,
        justifyContent: 'space-between'
        // borderTopLeftRadius: 25,
        // borderTopRightRadius: 25,
        // marginTop: '-2%'
    },
    // oval: {
    //     width: 170,
    //     height: 170,
    //     borderRadius: 170 / 2,
    //     backgroundColor: '#fff',
    //     transform: [
    //         { scaleX: 2.5 }
    //     ],
    //     position: 'absolute',
    //     top: -40
    // },
    oval: {
        width: '100%',
        height: '100%',
        borderRadius: 200,
        backgroundColor: 'rgb(242, 242, 245)',
        transform: [
            { scaleX: 2.5 }
        ],
        position: 'absolute',
        top: -30
    },
    titleDescription: {
        color: COLOR_SECONDARY,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        letterSpacing: 3,
        top: -25,
    },
    subtitleDescription: {
        color: COLOR_QUATERNARY,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    btnStart: {
        marginTop: 40,
        backgroundColor: COLOR_PRIMARY,
        paddingVertical: 7,
        paddingHorizontal: 9,
        width: '80%',
        height: 70,
        borderRadius: 50,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    titleBtnStart: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '500',
        marginLeft: 40
    },
    iconBtnStart: {
        padding: 14,
        backgroundColor: 'rgb(242, 242, 245)',
        color: COLOR_SECONDARY,
        borderRadius: 30,
        position: 'absolute',
        left: 7
    }
})

export default styles;