import React from 'react';
import { Image } from 'react-native';

import AtomStyle from '../style/atomsStyle';
const ImageBeer = ({ src }) => <Image source={{ uri: src }} style={AtomStyle.imageBeer} />;

export default ImageBeer;
