import { StyleSheet } from 'react-native';
import { styleConstants } from './styleConstants';

const ScreenStyle = StyleSheet.create({
    // General screen styles
    scrollScreenBackground: {
        backgroundColor: styleConstants.color_general,
        height: '100%',
        display: 'flex',
    },
    ScreenScrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    newsFlatListFooter: {
        color: styleConstants.color_details,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
        textAlign: 'center',
        padding: 40,
    },

    // style for homeScreen.jsx
    flatListCentering: {
        width: '100%',
    },

    // style for calendarScreen.jsx
    calendarScreenContainer: {
        backgroundColor: styleConstants.color_general,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    // style for carteScreen.jsx
    carteContentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    carteButtonContainer: {
        marginTop: 20,
        backgroundColor: styleConstants.color_back2,
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    carteButtonText: {
        color: styleConstants.color_details,
        fontSize: 16,
        fontFamily: 'RobotoSlab',
    },

    // style for profileScreen.jsx NOT CONNECTED
    profileConnectionButtonText: {
        fontSize: 20,
        color: styleConstants.color_details,
        fontFamily: 'RobotoSlab',
    },
    profileConnectionButtonContainer: {
        backgroundColor: styleConstants.color_enhance,
        padding: 20,
        borderRadius: 30,
        width: 250,
        alignItems: 'center',
    },
    profileAlertText: {
        color: styleConstants.color_details,
        fontSize: 20,
        textAlign: 'center',
        width: 250,
        fontFamily: 'RobotoSlab',
    },
    profileConnectionContainer: {
        marginTop: 20,
        backgroundColor: styleConstants.color_back2,
        width: 330,
        height: 250,
        borderRadius: 20,
        alignItems: 'center',
    },
    profileConnectionTextContainer: {
        height: '80%',
        justifyContent: 'space-evenly',
    },
    profileTeddyImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },

    // style for profileScreen.jsx CONNECTED
    profileHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    profileHeaderText: {
        color: styleConstants.color_details,
        fontSize: 20,
        fontFamily: 'RobotoSlab',
    },
    profileLogOutButton: {
        position: 'absolute',
        right: 0,
    },
});

export default ScreenStyle;
