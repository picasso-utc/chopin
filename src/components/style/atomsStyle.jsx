import { StyleSheet } from 'react-native';
import { styleConstants } from './styleConstants';

const AtomStyle = StyleSheet.create({
    // ATOMS pour home.jsx

    newsPopUpHeaderText: {
        fontSize: 20,
        color: styleConstants.color_details,
        fontFamily: 'RobotoSlab-bold',
    },
    imageNewsPopUp: {
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    newsPopUpText: {
        color: styleConstants.color_details,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'RobotoSlab',
        paddingHorizontal: 20,
    },
    newsPopUpCredits: {
        color: styleConstants.color_details,
        fontSize: 12,
        fontFamily: 'RobotoSlab',
        padding: 20,
    },

    // ATOMS POUR charte.jsx
    chartetext: {
        fontSize: 12,
        color: styleConstants.color_details,
        marginBottom: 20,
        textAlign: 'justify',
        fontFamily: 'RobotoSlab',
    },

    // ATOMS POUR events.jsx
    eventTimelineDate: {
        width: 60,
        fontSize: 16,
        color: styleConstants.color_details,
        fontFamily: 'RobotoSlab-bold',
    },
    eventTimelineDotNext: {
        backgroundColor: styleConstants.color_enhance,
        width: 19,
        height: 19,
        borderRadius: 90,
        marginRight: 30,
    },
    eventTimelineDot: {
        backgroundColor: styleConstants.color_details,
        width: 19,
        height: 19,
        borderRadius: 90,
        marginRight: 30,
    },
    eventTimelineLine: {
        borderLeftColor: styleConstants.color_details,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        height: 40,
        transform: [{ translateX: 10 }],
    },

    // ATOMS POUR howTo.jsx
    imageHowTo: {
        flex: 1,
        height: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    titleHowTo: {
        fontSize: 18,
        color: styleConstants.color_details,
        fontFamily: 'RobotoSlab-bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
        textTransform: 'uppercase',
    },
    textHowTo: {
        fontSize: 16,
        color: styleConstants.color_details,
        fontFamily: 'RobotoSlab',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    // ATOMS POUR news.jsx
    headerNewsLatest: {
        backgroundColor: styleConstants.color_enhance,
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
        color: styleConstants.color_details,
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: styleConstants.color_details,
        fontSize: 15,
        fontFamily: 'RobotoSlab',
        textAlign: 'justify',
    },

    // ATOMS POUR dayCalendar.jsx
    textNamePerm: {
        color: styleConstants.color_details,
        fontSize: 14,
        fontFamily: 'RobotoSlab-medium',
    },
    textNumPerm: {
        fontSize: 24,
        color: styleConstants.color_details,
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
        color: styleConstants.color_details,
        fontSize: 20,
        textTransform: 'uppercase',
        width: 120,
        height: 25,
        transform: [{ rotate: '-90deg' }, { translateX: -45 }, { translateY: -45 }],
        textAlign: 'center',
        fontFamily: 'RobotoSlab-medium',
    },

    // ATOMS POUR popUp.jsx
    imageBeer: { height: 104, width: 104 },
    popUpHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    beerNameText: {
        fontSize: 28,
        fontFamily: 'RobotoSlab-bold',
        color: styleConstants.color_details,
        textAlign: 'center',
        marginBottom: 20,
    },
    beerPriceContainer: {
        backgroundColor: styleConstants.color_enhance,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    beerPriceText: {
        fontSize: 22,
        fontFamily: 'RobotoSlab-bold',
        color: styleConstants.color_details,
    },
    ratingRowContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingText: {
        fontSize: 20,
        fontFamily: 'RobotoSlab-medium',
        color: styleConstants.color_details,
        textTransform: 'capitalize',
        flex: 1,
        textAlign: 'right',
    },
    ratingFullCircle: {
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: styleConstants.color_details,
        marginRight: 7,
    },
    ratingEmptyCircle: {
        width: 16,
        height: 16,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: styleConstants.color_details,
        marginRight: 7,
    },
    ratingAlignCircles: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        flex: 1,
    },
    popUpText: {
        fontFamily: 'RobotoSlab',
        fontSize: 14,
        color: styleConstants.color_details,
        textAlign: 'justify',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
});

export default AtomStyle;
