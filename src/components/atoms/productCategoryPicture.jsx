import React from 'react';
import { Image } from 'react-native';

const ProductCategoryPicture = ({ picture }) => {
    return (
        <Image
            source={picture}
            style={{
                position: 'absolute',
                top: 15,
                width: 110,
                height: 110,
            }}
            resizeMode="contain"
        />
    );
};

export default ProductCategoryPicture;
