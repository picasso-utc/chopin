import React from 'react';
import { View } from 'react-native';
import AtomStyle from '../style/atomsStyle';

export function PopUpRating({ rating }) {
    let circles = [];

    for (let i = 0; i < rating; i++) {
        circles[i] = <View style={AtomStyle.ratingFullCircle} key={i}></View>;
    }

    for (let i = rating; i < 5; i++) {
        circles[i] = <View style={AtomStyle.ratingEmptyCircle} key={i}></View>;
    }

    return <View style={AtomStyle.ratingAlignCircles}>{circles}</View>;
}
