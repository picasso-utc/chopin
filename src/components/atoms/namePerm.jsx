import React from 'react';
import { Text, View } from 'react-native';

const NamePerm = ({ name, style }) => {
    return (
        <View style={style}>
            <Text
                style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                }}
            >
                {name}
            </Text>
        </View>
    );
};
export default NamePerm;
