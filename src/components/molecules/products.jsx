import React from 'react';
import { View, Text } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';

const Products = ({ products }) => {
    return (
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
                        <Text style={MoleculeStyle.productHeaderPrice}>{`${(
                            Math.round(product.price) / 100
                        ).toFixed(2)}€`}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Products;
