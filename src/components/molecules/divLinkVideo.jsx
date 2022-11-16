import React from 'react';
import { Image, TouchableOpacity, Linking, Text } from 'react-native';

import MoleculeStyle from '../style/moleculeStyle';

const DivLinkVideo = () => (
    <TouchableOpacity
        style={MoleculeStyle.linkVideoContainer}
        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=91bKukiTL8s')}
    >
        <Image
            source={require('../../../assets/vieDuPicImages/LogoYoutube.png')}
            style={MoleculeStyle.youtubeLogo}
        />
        <Text style={MoleculeStyle.linkVideoText}>Video de présentation du Pic sur Youtube</Text>
    </TouchableOpacity>
);

export default DivLinkVideo;
