import React from 'react';
import { View, Text } from 'react-native';
import ImageBeer from './imageBeer';

import AtomStyle from '../style/atomsStyle';

const PopUpHeader = ({ name, price, url }) => {
    // String Contains Decimal
    const roundedPrice = (Math.round(price) / 100).toFixed(2);

    return (
        <View style={{}}>
            <View style={AtomStyle.popUpHeader}>
                <ImageBeer src={url} />

                <Text style={AtomStyle.beerNameText}>{name}</Text>
                <View style={AtomStyle.beerPriceContainer}>
                    <Text style={AtomStyle.beerPriceText}>{roundedPrice}€</Text>
                </View>
            </View>
        </View>
    );
};
export default PopUpHeader;
