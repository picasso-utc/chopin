import React from 'react';
import { Text, View } from 'react-native';

const NumDay = ({ day, style }) => {
    return (
        <View style={style}>
            <Text
                style={{
                    fontSize: 24,
                    color: '#FFFFFF',
                }}
            >
                {day}
            </Text>
        </View>
    );
};
export default NumDay;
