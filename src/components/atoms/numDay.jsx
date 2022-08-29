import React from 'react';
import { View, Text } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const NumDay = ({ day, style }) => (
    <View style={style}>
        <Text style={AtomStyle.textNumPerm}>{day}</Text>
    </View>
);
export default NumDay;
