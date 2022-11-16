import React from 'react';
import { Dimensions, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import TextHowTo from '../atoms/textHowTo';
import ImageHowTo from '../atoms/imageHowTo';
import TitreHowTo from '../atoms/titreHowTo';
import MoleculeStyle from '../style/moleculeStyle';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const howTos = [
    {
        titre: 'Affichage Télés',
        text: 'Les télés du Pic sont ouvertes à l’affichage ! N’hésitez pas à demander à un membre de la team pour les utiliser.',
        image: require('../../../assets/vieDuPicImages/teles.jpg'),
    },
    {
        titre: 'Emprunt de jeux',
        text: 'Le Pic prête des jeux ! Que ce soit des balles, raquettes, ou manettes, il suffira de donner sa carte étudiante en caution.',
        image: require('../../../assets/vieDuPicImages/jeux.jpg'),
    },
    {
        titre: "Besoin d'aide ?",
        text: "En cas de problème quel qu'il soit tu peux toujours t'adresser à un membre du foyer, nous sommes là pour vous aider !",
        image: require('../../../assets/vieDuPicImages/aide.jpg'),
    },
    {
        titre: 'Prêt de matériel',
        text: "Nous pouvons prêter du gros matériel aux assos en fonction des disponnibilités, en échange d'un chèque de caution.",
        image: require('../../../assets/vieDuPicImages/matos.jpg'),
    },
    {
        titre: 'Confiance',
        text: 'Le Pic repose sur la confiance, ainsi, pensez à payer sur les bornes ce que vous consommez pour le bien du foyer!',
        image: require('../../../assets/vieDuPicImages/caisses.jpg'),
    },
];

const renderItem = (data) => (
    <View style={MoleculeStyle.howToContainer}>
        <ImageHowTo src={data.image} />
        <View style={MoleculeStyle.contentHowTo}>
            <TitreHowTo content={data.titre} />
            <TextHowTo content={data.text} />
        </View>
    </View>
);

const HowTo = () => (
    <GestureHandlerRootView>
        <Carousel
            autoPlay
            autoPlayInterval={3000}
            data={howTos}
            height={250}
            loop
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 70,
            }}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
            renderItem={({ item }) => renderItem(item)}
            scrollAnimationDuration={2000}
            width={Dimensions.get('window').width}
        />
    </GestureHandlerRootView>
);

export default HowTo;
