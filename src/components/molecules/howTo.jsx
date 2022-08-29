import React from 'react';
import { View } from 'react-native';

import HeaderHowTo from '../atoms/headerHowTo';
import TextHowTo from '../atoms/textHowTo';
import ImageHowTo from '../atoms/imageHowTo';
import MoleculeStyle from '../style/moleculeStyle';

const HowTo = () => (
    <View style={MoleculeStyle.howToContainer}>
        <HeaderHowTo />
        <View style={MoleculeStyle.howToRowContainer}>
            <ImageHowTo src={require('../../../assets/vieDuPicImages/Television.png')} />
            <TextHowTo content="Les télés du Pic sont ouvertes à l’affichage ! N’hésitez pas à demander à un membre de la team pour les utiliser." />
        </View>
        <View style={MoleculeStyle.howToRowContainer}>
            <TextHowTo content="Pour demander une permanence pour le semestre, rendez-vous dans l’onglet profil, et cliquez sur Demande de Perm." />
            <ImageHowTo src={require('../../../assets/vieDuPicImages/PeopleTalking.png')} />
        </View>
    </View>
);

export default HowTo;
