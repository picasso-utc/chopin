import React from 'react';
import { View } from 'react-native';
import AtomStyle from '../style/atomsStyle';

export default function PopUpRating({ rating }) {
    const circles = [];

    for (let i = 0; i < rating; i += 1) {
        circles[i] = <View style={AtomStyle.ratingFullCircle} key={i} />;
    }

    for (let i = rating; i < 5; i += 1) {
        circles[i] = <View style={AtomStyle.ratingEmptyCircle} key={i} />;
    }

    return <View style={AtomStyle.ratingAlignCircles}>{circles}</View>;
}
