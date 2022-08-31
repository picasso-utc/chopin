import React from 'react';
import { View, Text } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';

const Products = ({ products }) => (
    <View style={MoleculeStyle.productListContainer}>
        {products.map((product, key) => (
            <View
                key={product.id}
                style={
                    key % 2 === 0
                        ? MoleculeStyle.productContainerRed
                        : MoleculeStyle.productContainerWhite
                }
            >
                <View style={MoleculeStyle.productHeaderContainer}>
                    <Text style={MoleculeStyle.productHeaderText}>{product.name}</Text>
                    <Text style={MoleculeStyle.productHeaderPrice}>{`${
                        product.price / 100
                    }€`}</Text>
                </View>
            </View>
        ))}
    </View>
);

export default Products;
