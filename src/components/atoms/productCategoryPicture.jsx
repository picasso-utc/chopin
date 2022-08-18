import React from 'react';
import { Image } from 'react-native';

const ProductCategoryPicture = ({ picture, style }) => (
    <Image source={picture} style={style} resizeMode="contain" />
);

export default ProductCategoryPicture;
