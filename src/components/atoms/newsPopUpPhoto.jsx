import React from 'react';
import { Image } from 'react-native';
import atomsStyle from '../style/atomsStyle';

const NewsPopUpPhoto = ({ image }) => <Image source={image} style={atomsStyle.imageNewsPopUp} />;

export default NewsPopUpPhoto;
