import React from 'react';
import { View, Text } from 'react-native';

import Constants from 'expo-constants';

import MoleculeStyle from '../style/moleculeStyle';

const Credits = () => (
    <View style={MoleculeStyle.creditsContainer}>
        <Text style={MoleculeStyle.creditsTextVersion}>Chopin v {Constants.manifest.version}</Text>
        <Text style={MoleculeStyle.creditsTextDevBy}>Développé avec passion par le</Text>
        <Text style={MoleculeStyle.creditsTextPic}>Pic&apos;Asso A22</Text>
    </View>
);

export default Credits;
