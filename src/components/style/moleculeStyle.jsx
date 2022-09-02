import { StyleSheet } from 'react-native';

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
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#B22132',
        fontSize: 20,
        padding: 20,
        width: '100%',
        height: 65,
        fontFamily: 'RobotoSlab-medium',
    },
    charteTextContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
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
        color: 'white',
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    charteConfrimContainer: {
        backgroundColor: '#B22132',
        borderRadius: 20,
        width: 100,
    },
    charteConfirmText: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'RobotoSlab-medium',
    },

    // style for credits.jsx
    creditsContainer: {
        alignItems: 'center',
        marginTop: 200,
    },
    creditsTextVersion: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'RobotoSlab',
    },
    creditsTextDevBy: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    creditsTextPic: {
        color: '#B22132',
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },

    // style for feedback.jsx
    feedbackContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
        width: 330,
        borderRadius: 20,
    },
    feedbackHeader: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'RobotoSlab-medium',
    },
    feedbackSubHeader: {
        color: 'white',
        fontSize: 14,
        marginBottom: 20,
        fontFamily: 'RobotoSlab',
    },
    feedbackInput: {
        paddingTop: 20,
        padding: 20,
        backgroundColor: '#000223',
        width: 300,
        height: 140,
        borderRadius: 20,
        color: 'white',
        fontSize: 14,
        textAlignVertical: 'top',
        fontFamily: 'RobotoSlab',
    },

    // Molecules for carteScreen.jsx

    // style for productCategory.jsx
    productCategoryContainerDiagonal: {
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
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
        backgroundColor: 'rgba(255, 255, 255, 0)',
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
        color: '#fff',
        position: 'absolute',
        bottom: 10,
        fontSize: 20,
        marginTop: 5,
        textTransform: 'capitalize',
        fontFamily: 'RobotoSlab',
    },

    // Style for products.jsx
    trendingProductContainer: {
        backgroundColor: '#B22132',
        borderRadius: 20,
        padding: 10,
    },
    trendingProductTitle: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
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
        width: '60%',
        justifyContent: 'space-evenly',
    },
    trendingProductName: {
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'RobotoSlab-bold',
    },
    trendingProductDesc: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },
    productListContainer: {
        width: '90%',
    },
    productContainerRed: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#B22132',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        height: 78,
        justifyContent: 'center',
    },
    productContainerWhite: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        height: 78,
        justifyContent: 'center',
    },
    productHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productHeaderText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'RobotoSlab-bold',
        width: '80%',
        overflow: 'hidden',
        textTransform: 'capitalize',
    },
    productHeaderPrice: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'RobotoSlab-bold',
        width: '20%',
        overflow: 'scroll',
        textAlign: 'right',
    },

    // Molecules pour viedupicScreen.jsx

    // style for divLinkVideo.jsx
    linkVideoContainer: {
        width: 350,
        height: 68,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(256,256,256,0.33)',
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
        color: '#FFFFFF',
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
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'RobotoSlab',
    },
    eventContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventText: {
        color: 'white',
        marginVertical: 10,
        fontSize: 14,
        fontFamily: 'RobotoSlab',
    },

    // style for howTo.jsx
    howToContainer: {
        width: 350,
        height: 241,
        borderRadius: 20,
        backgroundColor: 'rgba(256,256,256,0.33)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
    },
    howToRowContainer: {
        width: 318,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
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
        backgroundColor: 'rgba(256,256,256,0.33)',
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
        borderColor: '#B22132',
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
        backgroundColor: '#B22132',
    },
    dayDark: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        backgroundColor: '#000223',
    },
    dayLight: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(256,256,256,0.33)',
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
        backgroundColor: '#B22132',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameDark: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#000223',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameLight: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(256,256,256,0.33)',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    // Molecules for homeScreen.jsx

    // style for news.jsx
    newsContainerPressed: {
        backgroundColor: 'rgba(256,256,256,0.33)',
        height: 'auto',
        width: '90%',
        borderRadius: 20,
        marginTop: 20,
        overflow: 'hidden',
    },
    newsContainer: {
        backgroundColor: 'rgba(256,256,256,0.33)',
        height: 316,
        width: '90%',
        borderRadius: 20,
        marginTop: 20,
        overflow: 'hidden',
    },
});

export default MoleculeStyle;
