import { StyleSheet } from 'react-native';
import { styleConstants } from './styleConstants';

const MoleculeStyle = StyleSheet.create({
    // Molecules for profileScreen.jsx

    // style for charte.jsx
    charteComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        marginBottom: 20,
        overflow: 'hidden',
        borderRadius: 20,
    },
    charteEntete: {
        color: styleConstants.color_details,
        textAlign: 'center',
        backgroundColor: styleConstants.color_enhance,
        fontSize: 20,
        padding: 20,
        width: '100%',
        height: 65,
        fontFamily: 'RobotoSlab-medium',
    },
    charteTextContainer: {
        backgroundColor: styleConstants.color_back2,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    charteCheckboxContainer: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
    },
    charteCheckbox: {
        marginRight: 10,
        width: 15,
        height: 15,
    },
    charteCheckboxText: {
        color: styleConstants.color_details,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    charteConfirmContainer: {
        backgroundColor: styleConstants.color_enhance,
        borderRadius: 20,
        width: 100,
    },
    charteConfirmText: {
        color: styleConstants.color_details,
        padding: 10,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'RobotoSlab-medium',
    },

    // style for credits.jsx
    creditsContainer: {
        alignItems: 'center',
        marginTop: '60%',
    },
    socialsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    creditsTextVersion: {
        color: styleConstants.color_details,
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'RobotoSlab',
    },
    creditsTextDevBy: {
        color: styleConstants.color_details,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    creditsTextPic: {
        color: styleConstants.color_enhance,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },

    // style for feedback.jsx
    feedbackContainer: {
        backgroundColor: styleConstants.color_back2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
        width: 330,
        borderRadius: 20,
    },
    feedbackHeader: {
        color: styleConstants.color_details,
        fontSize: 20,
        fontFamily: 'RobotoSlab-medium',
    },
    feedbackSubHeader: {
        color: styleConstants.color_details,
        fontSize: 14,
        marginBottom: 20,
        fontFamily: 'RobotoSlab',
    },
    feedbackInput: {
        paddingTop: 20,
        padding: 20,
        backgroundColor: styleConstants.color_back1,
        width: 300,
        height: 140,
        borderRadius: 20,
        color: styleConstants.color_details,
        fontSize: 14,
        textAlignVertical: 'top',
        fontFamily: 'RobotoSlab',
    },

    // Molecules for carteScreen.jsx

    popUpContainer: {
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: styleConstants.color_back1,
        borderRadius: 30,
        padding: 20,
    },
    exitCrossContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 20,
        right: 20,
    },

    // style for productCategory.jsx
    productCategoryContainerDiagonal: {
        backgroundColor: styleConstants.color_back2,
        height: 165,
        width: 165,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productCategoryContainer: {
        backgroundColor: styleConstants.color_back1,
        height: 165,
        width: 165,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productCategoryPicture: {
        position: 'absolute',
        top: 15,
        width: 110,
        height: 110,
    },
    productCategoryName: {
        color: styleConstants.color_details,
        position: 'absolute',
        bottom: 10,
        fontSize: 20,
        marginTop: 5,
        textTransform: 'capitalize',
        fontFamily: 'RobotoSlab',
    },

    // Style for products.jsx
    trendingProductContainer: {
        backgroundColor: styleConstants.color_enhance,
        borderRadius: 20,
        width: '90%',
        padding: 15,
    },
    trendingProductTitle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: styleConstants.color_details,
        fontSize: 20,
        marginBottom: 10,
        fontFamily: 'RobotoSlab-bold',
    },
    trendingProductSubContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    trendingProductTextsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
    },
    trendingProductName: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: styleConstants.color_details,
        fontSize: 20,
        fontFamily: 'RobotoSlab-bold',
    },
    trendingProductPicture: {
        height: '100%',
        maxWidth: '30%',
    },
    trendingProductDesc: {
        textAlign: 'center',
        color: styleConstants.color_details,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    productListContainer: {
        width: '90%',
        paddingBottom: 20,
    },
    productContainerRed: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: styleConstants.color_enhance,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'center',
    },
    productContainerWhite: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: styleConstants.color_details,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: 'center',
    },
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productHeaderText: {
        color: styleConstants.color_details,
        fontSize: 20,
        fontFamily: 'RobotoSlab-bold',
        width: '70%',
        overflow: 'hidden',
        textTransform: 'capitalize',
    },
    productHeaderPrice: {
        color: styleConstants.color_details,
        fontSize: 20,
        fontFamily: 'RobotoSlab-bold',
        width: '20%',
        overflow: 'scroll',
        textAlign: 'right',
        marginRight: 10,
    },

    // Molecules pour viedupicScreen.jsx

    // style for telVSS.jsx
    telVSSContainer: {
        backgroundColor: styleConstants.color_tel_vss,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 15,
    },
    telVSSText: {
        color: styleConstants.color_details,
        fontSize: 20,
    },

    // style for divLinkVideo.jsx
    linkVideoContainer: {
        width: 350,
        height: 68,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: styleConstants.color_back2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    youtubeLogo: {
        width: 93,
        height: 56,
    },
    linkVideoText: {
        fontSize: 14,
        color: styleConstants.color_details,
        width: 266,
        fontFamily: 'RobotoSlab',
    },

    // style for event.jsx
    eventHeaderContainer: {
        marginVertical: 20,
        width: '80%',
    },
    eventHeaderText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: styleConstants.color_details,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'RobotoSlab',
    },
    eventContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventText: {
        color: styleConstants.color_details,
        marginVertical: 10,
        paddingLeft: 10,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
        maxWidth: '70%',
    },

    // style for howTo.jsx
    howToContainer: {
        marginLeft: '5%',
        width: '90%',
        height: 250,
        borderRadius: 20,
        backgroundColor: styleConstants.color_back2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    contentHowTo: {
        flex: 2,
        display: 'flex',
        justifyContent: 'space-around',
    },

    // Molecules for calendarScreen.jsx

    // Style for dayCalendar.jsx
    containerDark: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    containerLight: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: styleConstants.color_back2,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    containerToday: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: styleConstants.color_enhance,
        alignItems: 'center',
        marginBottom: 10,
    },
    dayToday: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: styleConstants.color_enhance,
    },
    dayDark: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        backgroundColor: styleConstants.color_back1,
    },
    dayLight: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: styleConstants.color_back2,
    },
    containerPerms: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: 205,
        justifyContent: 'space-evenly',
        marginLeft: '5%',
    },
    nameToday: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: styleConstants.color_enhance,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameDark: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: styleConstants.color_general,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameLight: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: styleConstants.color_back2,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    // Molecules for homeScreen.jsx

    popUpPosition: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    popUpBackground: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleConstants.color_back3,
    },
    newsPopUpContainer: {
        width: '95%',
        maxWidth: 700,
        flexDirection: 'column',
        backgroundColor: styleConstants.color_back1,
        borderRadius: 30,
        maxHeight: '90%',
    },
    newsExitCrossContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    newsExitCross: {
        position: 'absolute',
        top: 20,
        right: 20,
    },

    // style for news.jsx
    newsContainerPressed: {
        height: 'auto',
    },
    newsContainer: {
        overflow: 'hidden',
    },
    newsContainerOverall: {
        backgroundColor: styleConstants.color_back2,
        width: '90%',
        alignSelf: 'center',
        maxWidth: 600,
        borderRadius: 20,
        paddingBottom: 5,
    },
});

export default MoleculeStyle;
