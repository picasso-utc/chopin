import React, { useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import ProductCategoryPicture from '../atoms/productCategoryPicture';
import Products from '../molecules/products';
import ScreenStyle from '../style/screenStyle';
import { ProductImages } from '../atoms/productCategoryImagesPath';

function NestedCarteScreen({ navigation, route }) {
    const category = route.params.category;

    useLayoutEffect(() => {
        navigation.setOptions({ title: category.name });
    }, [navigation, route]);

    return (
        <ScrollView
            style={ScreenStyle.scrollScreenBackground}
            contentContainerStyle={ScreenStyle.ScreenScrollContainer}
        >
            <ProductCategoryPicture
                picture={ProductImages[category.name] || ProductImages.default}
            />
            <Products products={category.products} />
        </ScrollView>
    );
}
export default NestedCarteScreen;
