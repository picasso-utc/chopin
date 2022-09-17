import React from 'react';

import { Text } from 'react-native';
import AtomStyle from '../style/atomsStyle';

const TextNews = ({ content }) => (
    <Text style={AtomStyle.textNews} numberOfLines={7} ellipsizeMode="tail">
        {content}
    </Text>
);
export default TextNews;
