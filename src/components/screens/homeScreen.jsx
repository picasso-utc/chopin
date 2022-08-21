import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { getNewsletter } from '../../api/apiCalls';

import News from '../molecules/news';
import LoadMoreButton from '../atoms/loadMoreButton';

const HomeScreen = () => {
    //On recupère les infos de la newsletter et on les mets dans le array newsletter en les triants par date de publication
    const [newsletter, setNewsletter] = useState([]);

    useEffect(() => {
        getNewsletter()
            .then((res) => {
                res.data.data.sort((a, b) => (a.publication_date < b.publication_date ? 1 : -1));
                setNewsletter(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }, []);

    //On definie une variable qui determine le nombre de news que l'on affiche
    const [nbNews, setNbNews] = useState(2);

    //On definie la fonction qui vas augmenter le nombre de news afficher
    const getMore = () => setNbNews((prevNbNews) => prevNbNews + 2);

    //Une fonction qui determine si un article de la newsletter est afficher ou non et qui gere cette affichage
    const printNews = (nbmax, key, product) => {
        if (nbmax > key) {
            //on recupère le contenue de l'article
            let content = product.content;
            //On trouve et retire le lien de l'image (si il y en a) qui est en markdown dans le contenue
            let content2 = content.replace(/!\[\]\(https?:\/\/.*\)/, '');
            //On retrouve le lien de l'image mais cette fois on garde que le lien (on trouve en un premier temps le ![]() qui marque une image)
            let result = content.match(/!\[\]\(https?:\/\/.*\)/);
            //On clean le resultat en gardant que le lien et le ) de la fin
            let link2 = result[0].match(/https?:\/\/.*\)$/);
            //On clean une dernière fois le lien pour qu'il nous reste que le lien de l'image que l'on vas afficher
            link2 = link2[0].slice(0, link2[0].length - 1);
            return (
                <News
                    latest={key === 0}
                    linkimg={link2}
                    name={product.title}
                    content={content2}
                    key={key}
                />
            );
        }
    };

    return (
        <ScrollView
            style={{
                backgroundColor: '#000223',
                flex: 1,
            }}
            contentContainerStyle={{
                alignItems: 'center',
            }}
            scrollEnabled={true}
        >
            {newsletter.map((product, key) => printNews(nbNews, key, product))}
            <LoadMoreButton getMore={getMore} />
        </ScrollView>
    );
};

export default HomeScreen;
