import React from 'react';
import { Image } from 'react-native';

import AtomStyle from '../style/atomsStyle';
import { BASE_URL } from '../../api/config';

const ImageNews = ({ lien }) => (
    <Image source={{ uri: BASE_URL + lien }} style={AtomStyle.imageNews} />
);

export default ImageNews;
