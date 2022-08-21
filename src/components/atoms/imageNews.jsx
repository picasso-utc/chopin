import React from 'react';
import { Image } from 'react-native';

const ImageNews = ({ lien }) => {
    return (
        <Image
            source={{ uri: lien }}
            style={{
                width: '100%',
                height: 175,
            }}
        />
    );
};

export default ImageNews;
