import React from 'react';
import { Text, View } from 'react-native';

const TextDays = ({ weekday }) => {
    const TEXT_LENGTH = 110;
    const TEXT_HEIGHT = 20;
    const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2;
    return (
        <View
            style={{
                width: TEXT_HEIGHT,
                height: TEXT_LENGTH,
                marginLeft: 20,
                marginRight: 20,
            }}
        >
            <Text
                style={{
                    color: '#FFFFFF',
                    fontSize: 20,
                    textTransform: 'uppercase',
                    width: TEXT_LENGTH,
                    height: TEXT_HEIGHT,
                    transform: [
                        { rotate: '-90deg' },
                        { translateX: -OFFSET },
                        { translateY: -OFFSET },
                    ],
                    textAlign: 'center',
                }}
            >
                {weekday}
            </Text>
        </View>
    );
};
export default TextDays;
