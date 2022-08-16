import React from 'react';
import { Text } from 'react-native';

const TextHowTo = ({ content }) => {
    return (
        <Text
            style={{
                height: 48,
                width: 225,
                fontSize: 12,
                color: '#FFFFFF',
            }}
        >
            {content}
        </Text>
    );
};

export default TextHowTo;
