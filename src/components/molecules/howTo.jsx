import React from 'react';
import { View } from 'react-native';

import HeaderHowTo from '../atoms/headerHowTo';
import TextHowTo from '../atoms/textHowTo';
import ImageHowTo from '../atoms/imageHowTo';

const HowTo = () => {
    return (
        <View
            style={{
                width: 350,
                height: 241,
                borderRadius: 20,
                backgroundColor: 'rgba(256,256,256,0.33)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
            }}
        >
            <HeaderHowTo />
            <View
                style={{
                    width: 318,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    justifyContent: 'space-between',
                }}
            >
                <ImageHowTo src={require('../../../assets/vieDuPicImages/Television.png')} />
                <TextHowTo content="Les télés du Pic sont ouvertes à l’affichage ! N’hésitez pas à demander à un membre de la team pour les utiliser." />
            </View>
            <View
                style={{
                    width: 318,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    justifyContent: 'space-between',
                }}
            >
                <TextHowTo content="Pour demander une permanence pour le semestre, rendez-vous dans l’onglet profil, et cliquez sur Demande de Perm." />
                <ImageHowTo src={require('../../../assets/vieDuPicImages/PeopleTalking.png')} />
            </View>
        </View>
    );
};

export default HowTo;
