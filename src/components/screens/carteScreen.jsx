import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenStyle from '../style/screenStyle';

import ProductCategory from '../molecules/productCategory';
import { ProductImages } from '../atoms/productCategoryImagesPath';
import TrendingProduct from '../molecules/trendingProduct';

function CarteScreen({ navigation }) {
    const [carte, setCarte] = useState([]);
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        const getCarte = async () => {
            const carteFetched = await AsyncStorage.getItem('carte');
            setCarte(JSON.parse(carteFetched));
        };

        const getTrending = async () => {
            const trendingFetched = await AsyncStorage.getItem('trending');
            setTrending(JSON.parse(trendingFetched));
        };

        getCarte();
        getTrending();
    }, []);

    return (
        <ScrollView
            style={ScreenStyle.scrollScreenBackground}
            contentContainerStyle={ScreenStyle.carteContentContainer}
        >
            {trending && (
                <TrendingProduct
                    category={trending.nom_categorie}
                    name={trending.nom_produit}
                    description={trending.description}
                />
            )}
            {carte.map((categories, key) => (
                <Pressable
                    onPress={() => {
                        if (categories.name === 'Pressions' || categories.name === 'Bouteilles') {
                            navigation.navigate('nestedBeerCarte', {
                                category: categories,
                            });
                        } else {
                            navigation.navigate('nestedCarte', {
                                category: categories,
                            });
                        }
                    }}
                    key={categories.id}
                >
                    {categories.products.length !== 0 && (
                        <ProductCategory
                            id={key}
                            name={categories.name}
                            picture={ProductImages[categories.name] || ProductImages.default}
                        />
                    )}
                </Pressable>
            ))}
        </ScrollView>
    );
}

export default CarteScreen;
