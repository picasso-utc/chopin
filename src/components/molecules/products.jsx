import React from 'react';
import { View, Text } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';

const Products = ({ products }) => (
    <View style={MoleculeStyle.productListContainer}>
        {products.map((product) => (
            <View
                key={product.id}
                style={
                    product.id % 2 === 0
                        ? MoleculeStyle.productContainerRed
                        : MoleculeStyle.productContainerWhite
                }
            >
                <View style={MoleculeStyle.productHeaderContainer}>
                    <Text style={MoleculeStyle.productHeaderText}>{product.name}</Text>
                    <Text style={MoleculeStyle.productHeaderText}>{`${product.price}€`}</Text>
                </View>
                <Text style={MoleculeStyle.productDescText}> {product.description} </Text>
            </View>
        ))}
    </View>
);

export default Products;
