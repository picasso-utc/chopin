import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { getCarte } from '../../api/apiCalls';

import ProductCategory from '../molecules/productCategory';
import { ProductImages } from '../atoms/productCategoryImagesPath';

function CarteScreen() {
    const [carte, setCarte] = useState([]);

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
            {carte.map((product, key) => (
                <ProductCategory
                    id={product.id}
                    name={product.name}
                    picture={ProductImages[product.picture] || ProductImages.default}
                    key={key}
                />
            ))}
        </ScrollView>
    );
}

export default CarteScreen;
