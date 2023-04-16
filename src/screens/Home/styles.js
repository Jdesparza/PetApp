import { StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import { COLOR_PRIMARY, COLOR_QUATERNARY, COLOR_SECONDARY, COLOR_TERTIARY } from '../../utils/paleta';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    main: {
        flex: 1,
        backgroundColor: 'rgb(242, 242, 245)',
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 13,
        paddingHorizontal: 13,
        paddingBottom: 13
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    userName: {
        color: COLOR_SECONDARY,
        fontSize: 21,
        fontWeight: '600'
    },
    phrase: {
        color: COLOR_QUATERNARY,
        fontSize: 18,
        fontWeight: '400',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30
    },

    //section category horizontal
    sectionInfo: {
        marginTop: 35
    },
    titleCatContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    titleCategory: {
        fontSize: 18,
        fontWeight: '600',
        color: COLOR_SECONDARY
    },
    seeAll: {
        fontSize: 16,
        color: COLOR_QUATERNARY,
        fontWeight: '500'
    },
    btnCategory: {
        width: 65,
        height: 90,
        // backgroundColor: 'yellow'
    },
    iconCategoryContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCategory: {
        width: '72%',
        height: '47%',
        resizeMode: 'contain',
    },
    textCategory: {
        color: COLOR_SECONDARY,
        fontSize: 13,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '500',
    },

    // section nearby
})

export default styles;