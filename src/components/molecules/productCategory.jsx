import React from 'react';
import { View } from 'react-native';

import ProductCategoryName from '../atoms/productCategoryName';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import MoleculeStyle from '../style/moleculeStyle';

const ProductCategory = ({ id, name, picture }) => {
    const background = [1, 2, 5, 6, 9, 10, 13, 14].includes(id);

    return (
        <View
            style={
                background
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
