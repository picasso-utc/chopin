import React from 'react';
import { Image } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const ImageNews = ({ lien }) => <Image source={lien} style={AtomStyle.imageNews} />;

export default ImageNews;
