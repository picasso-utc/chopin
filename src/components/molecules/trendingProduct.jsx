import React from 'react';
import { Text, View } from 'react-native';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import { ProductImages } from '../atoms/productCategoryImagesPath';

import moleculeStyle from '../style/moleculeStyle';

const TrendingProduct = ({ category, name, description }) => (
    <View style={moleculeStyle.trendingProductContainer}>
        <Text style={moleculeStyle.trendingProductTitle}>Produit du Moment</Text>
        <View style={moleculeStyle.trendingProductSubContainer}>
            <ProductCategoryPicture
                picture={ProductImages[category] || ProductImages.default}
                style={moleculeStyle.trendingProductPicture}
            />
            <View style={moleculeStyle.trendingProductTextsContainer}>
                <Text style={moleculeStyle.trendingProductName}>{name}</Text>
                <Text style={moleculeStyle.trendingProductDesc}>{description}</Text>
            </View>
        </View>
    </View>
);

export default TrendingProduct;
