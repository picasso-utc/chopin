import React from 'react';
import { View, Text } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const HeaderNews = ({ content, latest }) => (
    <View style={latest ? AtomStyle.headerNewsLatest : AtomStyle.headerNews}>
        <Text style={AtomStyle.textHeaderNews}> {content} </Text>
    </View>
);

export default HeaderNews;
