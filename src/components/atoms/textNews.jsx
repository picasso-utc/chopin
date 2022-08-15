import React from 'react';
import { Text } from 'react-native';

const TextNews = ({ content }) => {
    return (
        <Text
            style={{
                width: '100%',
                padding: 15,
                color: '#FFFFFF',
                fontSize: 15,
            }}
        >
            {content}
        </Text>
    );
};
export default TextNews;
