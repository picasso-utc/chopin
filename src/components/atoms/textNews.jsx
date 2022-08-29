import React from 'react';

import { Text } from 'react-native';
import AtomStyle from '../style/atomsStyle';

const TextNews = ({ content }) => <Text style={AtomStyle.textNews}> {content} </Text>;
export default TextNews;
