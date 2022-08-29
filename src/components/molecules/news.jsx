import React, { useState } from 'react';
import { Pressable } from 'react-native';

import HeaderNews from '../atoms/headerNews';
import ImageNews from '../atoms/imageNews';
import TextNews from '../atoms/textNews';
import MoleculeStyle from '../style/moleculeStyle';

const News = ({ latest, name, linkimg, content }) => {
    const [Pressed, setPressed] = useState(false);
    return (
        <Pressable
            onPress={() => {
                setPressed((current) => !current);
            }}
            style={
                Pressed === true ? MoleculeStyle.newsContainerPressed : MoleculeStyle.newsContainer
            }
        >
            <HeaderNews content={name} latest={latest} />
            <ImageNews lien={linkimg} />
            <TextNews content={content} />
        </Pressable>
    );
};
export default News;
