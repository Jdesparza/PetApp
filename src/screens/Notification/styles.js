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
})

export default styles