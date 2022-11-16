import React from 'react';
import { View, Text } from 'react-native';
import PopUpRating from './popUpRating';
import AtomStyle from '../style/atomsStyle';

const PopUpLigne = ({ name, rating }) => {
    const list = [];

    for (let i = 0; i < rating; i += 1) {
        list[i] = 'full';
    }

    return (
        <View style={AtomStyle.ratingRowContainer}>
            <Text style={AtomStyle.ratingText}>{name}</Text>
            <PopUpRating rating={rating} />
        </View>
    );
};
export default PopUpLigne;
