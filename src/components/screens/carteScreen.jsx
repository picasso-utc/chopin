import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView, Text, View } from 'react-native';
import { getCarte, getTrendingProduct } from '../../api/apiCalls';
import ScreenStyle from '../style/screenStyle';

import ProductCategory from '../molecules/productCategory';
import { ProductImages } from '../atoms/productCategoryImagesPath';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import Products from '../molecules/products';
import TrendingProduct from '../molecules/trendingProduct';

function CarteScreen() {
    const [carte, setCarte] = useState([]);
    const [trending, setTrending] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        getCarte()
            .then((res) => {
                setCarte(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();

        getTrendingProduct()
            .then((res) => {
                setTrending(res.data.data[0]);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }, []);

    return (
        <View style={ScreenStyle.scrollScreenBackground}>
            {trending && !category && (
                <TrendingProduct
                    category={trending.category}
                    name={trending.name}
                    description={trending.desc}
                />
            )}

            <ScrollView contentContainerStyle={ScreenStyle.carteContentContainer}>
                {category === null &&
                    carte.map((categories) => (
                        <Pressable
                            onPress={() => {
                                setCategory(categories);
                            }}
                            key={categories.id}
                        >
                            <ProductCategory
                                id={categories.id}
                                name={categories.name}
                                picture={ProductImages[categories.name] || ProductImages.default}
                            />
                        </Pressable>
                    ))}

                {category && (
                    <ScrollView
                        style={{
                            display: 'flex',
                        }}
                        contentContainerStyle={ScreenStyle.ScreenScrollContainer}
                    >
                        <ProductCategoryPicture
                            picture={ProductImages[category.name] || ProductImages.default}
                        />
                        <Products products={category.products} />
                        <Pressable
                            onPress={() => {
                                setCategory(null);
                            }}
                            style={ScreenStyle.carteButtonContainer}
                        >
                            <Text style={ScreenStyle.carteButtonText}>Retour au Menu</Text>
                        </Pressable>
                    </ScrollView>
                )}
            </ScrollView>
        </View>
    );
}

export default CarteScreen;
