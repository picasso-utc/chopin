import React from 'react';
import { Text } from 'react-native';

const TextNews = ({ content, pressed }) => {
    return (
        <Text
            style={{
                width: '100%',
                padding: 15,
                color: '#FFFFFF',
                fontSize: 15,
                textAlign: 'justify',
            }}
            numberOfLines={pressed ? 0 : 4}
        >
            {content}
        </Text>
    );
};
export default TextNews;
