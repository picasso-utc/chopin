import React from 'react';
import { View, Text } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const NamePerm = ({ name, style }) => (
    <View style={style}>
        <Text style={AtomStyle.textNamePerm}> {name} </Text>
    </View>
);
export default NamePerm;
