import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import News from '../molecules/news';
import ScreenStyle from '../style/screenStyle';
import { getNewsletter } from '../../api/apiCalls';
import NewsPopUp from '../molecules/newsPopUp';

function HomeScreen() {
    const [news, setNews] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getNewsletter()
            .then((res) => {
                res.data.sort((a, b) => (a.publication_date < b.publication_date ? 1 : -1));
                const today = new Date().toISOString();
                setNews(res.data.filter((a) => a.publication_date <= today));
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
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
