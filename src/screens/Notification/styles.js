import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'rgba(242, 242, 245, 1)',
        // paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 5, //+10
        // paddingBottom: 13,
    },
    contFlatList: {
        width: width,
        height: 230,
        // paddingBottom: 15,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 20
        },
        // shadowRadius: 10,
        elevation: 5,
    },
    itemCarousel: {
        width: width,
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    carouselImg: {
        width: '100%',
        height: 230,
        resizeMode: 'cover',
    },
    itemOverlay: {
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    titleScreen: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
        top: 0,
        marginHorizontal: 10,
        marginTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
        paddingHorizontal: 10,
        letterSpacing: 1,
    }
})

export default styles