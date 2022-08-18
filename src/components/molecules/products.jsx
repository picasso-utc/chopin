import React from 'react';
import { Text, View } from 'react-native';

const Products = ({ products }) => (
    <View style={{ width: '90%' }}>
        {products.map((product) => (
            <View
                key={product.id}
                style={{
                    marginTop: 20,
                    borderStyle: 'solid',
                    borderWidth: 3,
                    borderColor: product.id % 2 === 0 ? '#B22132' : 'white',
                    paddingHorizontal: 20,
                    borderRadius: 30,
                    height: 78,
                    justifyContent: 'center',
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>{product.name}</Text>
                    <Text style={{ color: 'white', fontSize: 20 }}>{product.price} €</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 12, marginTop: 3, width: '75%' }}>
                    {product.description}
                </Text>
            </View>
        ))}
    </View>
);

export default Products;
