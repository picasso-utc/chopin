import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MoleculeStyle from '../style/moleculeStyle';

const Credits = () => (
    <View style={MoleculeStyle.creditsContainer}>
        <View style={MoleculeStyle.socialsContainer}>
            <Pressable onPress={() => Linking.openURL('https://www.instagram.com/ted_picasso/')}>
                <Ionicons name="logo-instagram" color="white" size={26} />
            </Pressable>
            <Pressable
                onPress={() =>
                    Linking.openURL('https://www.facebook.com/profile.php?id=100012146945654')
                }
            >
                <Ionicons name="logo-facebook" color="white" size={26} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://twitter.com/UTC_Picasso')}>
                <Ionicons name="logo-twitter" color="white" size={26} />
            </Pressable>
        </View>
        <Text style={MoleculeStyle.creditsTextVersion}>Chopin v {Constants.manifest.version}</Text>
        <Text style={MoleculeStyle.creditsTextDevBy}>Développé avec passion par le</Text>
        <Text style={MoleculeStyle.creditsTextPic}>Pic&apos;Asso A22</Text>
    </View>
);

export default Credits;
