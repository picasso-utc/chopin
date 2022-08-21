import React from 'react';
import { View, Text } from 'react-native';

const HeaderNews = ({ content, latest, pressed }) => {
    return (
        <View
            style={{
                backgroundColor: latest == true ? '#B22132' : '',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#FFFFFF',
                    width: '80%',
                    textAlign: 'center',
                }}
                numberOfLines={pressed ? 0 : 1}
            >
                {content}
            </Text>
        </View>
    );
};

export default HeaderNews;
