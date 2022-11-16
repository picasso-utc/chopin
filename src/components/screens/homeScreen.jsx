import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import News from '../molecules/news';
import ScreenStyle from '../style/screenStyle';
import NewsPopUp from '../molecules/newsPopUp';

function HomeScreen() {
    const [news, setNews] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getNews = async () => {
            const newsFetched = await AsyncStorage.getItem('news');
            setNews(JSON.parse(newsFetched));
        };
        getNews();
    }, []);

    const Separator = () => <View style={{ height: 20 }} />;
    const Footer = () => (
        <Text style={ScreenStyle.newsFlatListFooter}>
            Il n&apos;y a rien d&apos;autre à voir ici... à bientôt !
        </Text>
    );

    return (
        <SafeAreaView style={ScreenStyle.scrollScreenBackground}>
            <FlatList
                style={ScreenStyle.flatListCentering}
                data={news}
                renderItem={(item) => (
                    <News
                        newsInfo={item.item}
                        latest={item.index === 0}
                        setDisplayed={setDisplayed}
                        setVisible={setVisible}
                        visible={visible}
                    />
                )}
                ItemSeparatorComponent={Separator}
                ListFooterComponent={Footer}
                initialNumToRender={2}
            />
            <NewsPopUp modalVisible={visible} setModalVisible={setVisible} newsInfo={displayed} />
        </SafeAreaView>
    );
}

export default HomeScreen;
