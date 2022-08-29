import React from 'react';
import { View } from 'react-native';

import ProductCategoryName from '../atoms/productCategoryName';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import MoleculeStyle from '../style/moleculeStyle';

const ProductCategory = ({ id, name, picture }) => {
    const isDiagonal = () => {
        if (id === '2' || id === '3' || id === '6' || id === '7') {
            return true;
        }
        return false;
    };

    return (
        <View
            style={
                isDiagonal()
                    ? MoleculeStyle.productCategoryContainerDiagonal
                    : MoleculeStyle.productCategoryContainer
            }
        >
            <ProductCategoryPicture
                style={MoleculeStyle.productCategoryPicture}
                picture={picture}
            />
            <ProductCategoryName style={MoleculeStyle.productCategoryName} name={name} />
        </View>
    );
};

export default ProductCategory;
