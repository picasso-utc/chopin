import React from 'react';
import { View, Text } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const TextDays = ({ weekday }) => (
    <View style={AtomStyle.textDayView}>
        <Text style={AtomStyle.textDayText}> {weekday} </Text>
    </View>
);
export default TextDays;
