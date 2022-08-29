import React from 'react';
import { Image } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const ImageHowTo = ({ src }) => <Image source={src} style={AtomStyle.imageHowTo} />;

export default ImageHowTo;
