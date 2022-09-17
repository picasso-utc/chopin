import { StyleSheet } from 'react-native';

const AtomStyle = StyleSheet.create({
    // ATOMS pour home.jsx

    newsPopUpHeaderText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'RobotoSlab-bold',
    },
    imageNewsPopUp: {
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    newsPopUpText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'RobotoSlab',
        paddingHorizontal: 20,
    },
    newsPopUpCredits: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'RobotoSlab',
        padding: 20,
    },

    // ATOMS POUR charte.jsx
    chartetext: {
        fontSize: 12,
        color: 'white',
        marginBottom: 20,
        textAlign: 'justify',
        fontFamily: 'RobotoSlab',
    },

    // ATOMS POUR events.jsx
    eventTimelineDate: {
        width: 60,
        fontSize: 16,
        color: 'white',
        fontFamily: 'RobotoSlab-bold',
    },
    eventTimelineDotNext: {
        backgroundColor: '#B22132',
        width: 19,
        height: 19,
        borderRadius: 90,
        marginRight: 30,
    },
    eventTimelineDot: {
        backgroundColor: 'white',
        width: 19,
        height: 19,
        borderRadius: 90,
        marginRight: 30,
    },
    eventTimelineLine: {
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        borderStyle: 'solid',
        height: 40,
        transform: [{ translateX: 10 }],
    },

    // ATOMS POUR howTo.jsx
    headerHowTo: {
        fontSize: 20,
        marginTop: 20,
        color: '#FFFFFF',
        fontFamily: 'RobotoSlab',
    },
    imageHowTo: {
        height: 84,
        width: 84,
    },
    textHowTo: {
        height: 48,
        width: 225,
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'RobotoSlab',
    },

    // ATOMS POUR news.jsx
    headerNewsLatest: {
        backgroundColor: '#B22132',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerNews: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeaderNews: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontFamily: 'RobotoSlab-medium',
        width: '95%',
        textAlign: 'center',
        paddingVertical: 5,
    },
    imageNews: {
        width: '100%',
        height: 175,
    },
    textNews: {
        width: '100%',
        padding: 15,
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'RobotoSlab',
        textAlign: 'justify',
    },

    // ATOMS POUR dayCalendar.jsx
    textNamePerm: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'RobotoSlab-medium',
    },
    textNumPerm: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'RobotoSlab-medium',
        textAlign: 'center',
    },
    textDayView: {
        width: 20,
        height: 110,
        marginLeft: 20,
        marginRight: 20,
    },
    textDayText: {
        color: '#FFFFFF',
        fontSize: 20,
        textTransform: 'uppercase',
        width: 120,
        height: 25,
        transform: [{ rotate: '-90deg' }, { translateX: -45 }, { translateY: -45 }],
        textAlign: 'center',
        fontFamily: 'RobotoSlab-medium',
    },
});

export default AtomStyle;
