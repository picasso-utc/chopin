import React, { useEffect, useState } from 'react';

import { Pressable, ScrollView, Text } from 'react-native';
import { getCarte } from '../../api/apiCalls';

import ProductCategory from '../molecules/productCategory';
import { ProductImages } from '../atoms/productCategoryImagesPath';
import ProductCategoryPicture from '../atoms/productCategoryPicture';
import Products from '../molecules/products';

function CarteScreen() {
    const [carte, setCarte] = useState([]);
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
    }, []);

    return (
        <ScrollView
            style={{
                backgroundColor: '#000223',
                height: '100%',
            }}
            contentContainerStyle={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
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
                            picture={ProductImages[categories.picture] || ProductImages.default}
                        />
                    </Pressable>
                ))}

            {category && (
                <ScrollView
                    style={{
                        display: 'flex',
                    }}
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ProductCategoryPicture
                        picture={ProductImages[category.picture] || ProductImages.default}
                    />
                    <Products products={category.products} />
                    <Pressable
                        onPress={() => {
                            setCategory(null);
                        }}
                        style={{
                            marginTop: 20,
                            backgroundColor: 'rgba(255, 255, 255, 0.33)',
                            padding: 15,
                            borderRadius: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 16,
                            }}
                        >
                            Retour au Menu
                        </Text>
                    </Pressable>
                </ScrollView>
            )}
        </ScrollView>
    );
}

export default CarteScreen;
