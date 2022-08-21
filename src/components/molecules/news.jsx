import React, { useState } from 'react';
import { Pressable } from 'react-native';

import HeaderNews from '../atoms/headerNews';
import ImageNews from '../atoms/imageNews';
import TextNews from '../atoms/textNews';

const News = ({ latest, name, linkimg, content }) => {
    const [Pressed, setPressed] = useState(false);
    return (
        <Pressable
            onPress={() => {
                setPressed((current) => !current);
            }}
            style={{
                backgroundColor: 'rgba(256,256,256,0.33)',
                height: Pressed === true ? 'auto' : 316,
                width: '90%',
                borderRadius: 20,
                marginTop: 20,
                overflow: 'hidden',
            }}
        >
            <HeaderNews content={name} latest={latest} pressed={Pressed} />
            <ImageNews lien={linkimg} />
            <TextNews content={content} pressed={Pressed} />
        </Pressable>
    );
};
export default News;
