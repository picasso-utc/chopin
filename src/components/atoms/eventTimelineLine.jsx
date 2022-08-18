import React from 'react';
import { View } from 'react-native';

const EventTimelineLine = () => (
    <View
        style={{
            borderLeftColor: 'white',
            borderLeftWidth: 1,
            borderStyle: 'solid',
            height: 40,
            transform: [{ translateX: 10 }],
        }}
    />
);

export default EventTimelineLine;
