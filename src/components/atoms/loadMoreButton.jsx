import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

const LoadMoreButton = ({ getMore }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 10,
                width: '90%',
                backgroundColor: 'rgba(256,256,256,0.10)',
                height: 50,
                justifyContent: 'center',
                borderRadius: 20,
            }}
            onPress={getMore}
        >
            <Text
                style={{
                    color: '#FFFFFF',
                    fontSize: 20,
                }}
            >
                Voire plus de News
            </Text>
        </TouchableOpacity>
    );
};

export default LoadMoreButton;
