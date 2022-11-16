import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';

import ProductCategoryPicture from '../atoms/productCategoryPicture';
import BeerProducts from '../molecules/beerProducts';
import ScreenStyle from '../style/screenStyle';
import { ProductImages } from '../atoms/productCategoryImagesPath';

function BeerCarteScreen({ navigation, route }) {
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
            <BeerProducts products={category.products} navigation={navigation} />
        </ScrollView>
    );
}
export default BeerCarteScreen;
