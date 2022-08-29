import { StyleSheet } from 'react-native';

const ScreenStyle = StyleSheet.create({
    // General screen styles
    scrollScreenBackground: {
        backgroundColor: '#000223',
        height: '100%',
    },
    ScreenScrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    // style for calendarScreen.jsx
    calendarScreenContainer: {
        backgroundColor: '#000223',
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
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    carteButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'RobotoSlab',
    },

    // style for profileScreen.jsx NOT CONNECTED
    profileConnectionButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'RobotoSlab',
    },
    profileConnectionButtonContainer: {
        backgroundColor: '#B22132',
        padding: 20,
        borderRadius: 30,
        width: 250,
        alignItems: 'center',
    },
    profileAlertText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: 250,
        fontFamily: 'RobotoSlab',
    },
    profileConnectionContainer: {
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        width: 330,
        height: 250,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    // style for profileScreen.jsx CONNECTED
    profileHeaderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    profileHeaderText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'RobotoSlab',
    },
    profileLogOutButton: {
        position: 'absolute',
        right: 0,
    },
});

export default ScreenStyle;
