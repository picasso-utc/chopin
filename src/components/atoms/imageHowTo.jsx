import React from 'react';
import { Image } from 'react-native';

const ImageHowTo = ({ src }) => {
    return (
        <Image
            source={src}
            style={{
                height: 84,
                width: 84,
            }}
        />
    );
};

export default ImageHowTo;
