import React from 'react';
import { Text, View } from 'react-native';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import { ProductImages } from '../atoms/productCategoryImagesPath';

const TrendingProduct = ({ category, name, description }) => {
    return (
        <View
            style={{
                backgroundColor: '#B22132',
                margin: 20,
                borderRadius: 20,
                padding: 10,
            }}
        >
            <Text
                style={{
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    marginBottom: 10,
                }}
            >
                Produit du Moment
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}
            >
                <ProductCategoryPicture
                    picture={ProductImages[category] || ProductImages.default}
                    style={{ height: 96 }}
                />
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Text
                        style={{
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 24,
                        }}
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 14,
                        }}
                    >
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default TrendingProduct;
