import React from 'react';
import { View } from 'react-native';

import ProductCategoryName from '../atoms/productCategoryName';
import ProductCategoryPicture from '../atoms/productCategoryPicture';

const ProductCategory = ({ id, name, picture }) => {
    const isDiagonal = () => {
        if (id === '2' || id === '3' || id === '6' || id === '7') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <View
            style={{
                backgroundColor: isDiagonal()
                    ? 'rgba(255, 255, 255, 0.33)'
                    : 'rgba(255, 255, 255, 0)',
                height: 165,
                width: 165,
                borderRadius: 20,
                marginTop: 10,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ProductCategoryPicture picture={picture} />
            <ProductCategoryName name={name} />
        </View>
    );
};

export default ProductCategory;
