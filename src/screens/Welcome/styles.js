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
        // position: 'absolute',
    },
    imgPaws: {
        width: 47,
        height: 47,
        position: 'absolute',
        tintColor: 'rgba(240, 240, 240, .45)',
        top: 53,
        left: 75,
        transform: [{
            rotate: '20deg'
        }]
    },
    imgIt: {
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

    // BTN swipe
    swipeContainer: {
        width: 240,
        height: 70,
        padding: 7,
        backgroundColor: COLOR_PRIMARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70,
        // overflow: 'hidden',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.18,
        // shadowRadius: 1.00,
        // elevation: 1,
    },
    colorWave: {
        position: 'absolute',
        left: 0,
        height: 70,
        borderRadius: 70,
    },
    swipeable: {
        height: 70 - 2 * 7,
        width: 70 - 2 * 7,
        borderRadius: 70 - 2 * 7,
        backgroundColor: 'rgb(242, 242, 245)',
        position: 'absolute',
        left: 7,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swipeText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 19,
        fontWeight: '500',
        // marginLeft: 30,
        zIndex: 2
    },

    //
    // btnStart: {
    //     marginTop: 40,
    //     backgroundColor: COLOR_PRIMARY,
    //     paddingVertical: 7,
    //     paddingHorizontal: 9,
    //     width: '80%',
    //     height: 70,
    //     borderRadius: 50,
    //     // flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'relative',
    // },
    // titleBtnStart: {
    //     color: '#fff',
    //     fontSize: 19,
    //     fontWeight: '500',
    //     marginLeft: 40
    // },
    // iconBtnStart: {
    //     padding: 14,
    //     backgroundColor: 'rgb(242, 242, 245)',
    //     color: COLOR_SECONDARY,
    //     borderRadius: 30,
    //     position: 'absolute',
    //     left: 7
    // }
})

export default styles;