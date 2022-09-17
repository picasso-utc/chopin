import { PopUpRating } from './popUpRating';
import React from 'react';
import { View, Text } from 'react-native';
import AtomStyle from '../style/atomsStyle';

const PopUpLigne = ({ name, rating }) => {
    let list = [];

    for (let i = 0; i < rating; i++) {
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
