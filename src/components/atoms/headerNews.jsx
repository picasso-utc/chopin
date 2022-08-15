import React from 'react';
import { View, Text } from 'react-native';

const HeaderNews = ({ content, latest }) => {
    return (
        <View
            style={{
                backgroundColor: latest == true ? '#B22132' : '',
                height: 36,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#FFFFFF',
                }}
            >
                {content}
            </Text>
        </View>
    );
};

export default HeaderNews;
