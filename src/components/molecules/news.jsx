import React from 'react';
import { View, Pressable } from 'react-native';

import HeaderNews from '../atoms/headerNews';
import ImageNews from '../atoms/imageNews';
import TextNews from '../atoms/textNews';
import MoleculeStyle from '../style/moleculeStyle';

const News = ({ newsInfo, latest, setDisplayed, setVisible, visible }) => {
    return (
        <View style={MoleculeStyle.newsContainerOverall}>
            <Pressable
                onPress={() => {
                    setDisplayed(newsInfo);
                    setVisible(!visible);
                }}
                style={MoleculeStyle.newsContainer}
                r
            >
                <HeaderNews content={newsInfo.title} latest={latest} />
                <ImageNews lien={newsInfo.image} />
                <TextNews content={newsInfo.content} />
            </Pressable>
        </View>
    );
};
export default News;
