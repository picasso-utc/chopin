import React from 'react';
import { Text } from 'react-native';
import AtomStyle from '../style/atomsStyle';

const PopUpText = ({ text }) => <Text style={AtomStyle.popUpText}>{text}</Text>;
export default PopUpText;
