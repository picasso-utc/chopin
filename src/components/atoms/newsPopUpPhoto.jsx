import React from 'react';
import { Image } from 'react-native';
import atomsStyle from '../style/atomsStyle';
import { BASE_URL } from '../../api/config';

const NewsPopUpPhoto = ({ image }) => (
    <Image source={{ uri: BASE_URL + image }} style={atomsStyle.imageNewsPopUp} />
);

export default NewsPopUpPhoto;
