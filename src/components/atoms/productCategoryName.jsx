import React from 'react';
import { Text } from 'react-native';

const ProductCategoryName = ({ name, style }) => {
    return <Text style={style}>{name}</Text>;
};

export default ProductCategoryName;
