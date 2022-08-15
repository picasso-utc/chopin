import React from 'react';
import { Text } from 'react-native';

const ProductCategoryName = ({ name }) => {
    return (
        <Text
            style={{
                color: '#fff',
                position: 'absolute',
                bottom: 10,
                fontSize: 20,
                marginTop: 5,
                textTransform: 'capitalize',
            }}
        >
            {name}
        </Text>
    );
};

export default ProductCategoryName;
