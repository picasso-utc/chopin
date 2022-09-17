import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView } from 'react-native';
import { getCarte, getTrendingProduct } from '../../api/apiCalls';
import ScreenStyle from '../style/screenStyle';

import ProductCategory from '../molecules/productCategory';
import { ProductImages } from '../atoms/productCategoryImagesPath';
import TrendingProduct from '../molecules/trendingProduct';

function CarteScreen({ navigation }) {
    const [carte, setCarte] = useState([]);
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getCarte()
            .then((res) => {
                setCarte(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();

        getTrendingProduct()
            .then((res) => {
                setTrending(res.data[0]);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
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
                    <ProductCategory
                        id={key}
                        name={categories.name}
                        picture={ProductImages[categories.name] || ProductImages.default}
                    />
                </Pressable>
            ))}
        </ScrollView>
    );
}

export default CarteScreen;
