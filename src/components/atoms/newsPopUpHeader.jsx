import React from 'react';
import { Text } from 'react-native';
import atomsStyle from '../style/atomsStyle';

const NewsPopUpHeader = ({ title }) => <Text style={atomsStyle.newsPopUpHeaderText}>{title}</Text>;

export default NewsPopUpHeader;
