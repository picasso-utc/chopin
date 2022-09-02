import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView, Text } from 'react-native';
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
            {trending && !category && (
                <TrendingProduct
                    category={trending.nom_categorie}
                    name={trending.nom_produit}
                    description={trending.description}
                />
            )}

            {category === null &&
                carte.map((categories, key) => (
                    <Pressable
                        onPress={() => {
                            setCategory(categories);
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
    );
}

export default CarteScreen;
