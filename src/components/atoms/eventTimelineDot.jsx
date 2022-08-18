import React from 'react';
import { View } from 'react-native';

const EventTimelineDot = ({ nextEvent }) => (
    <View
        style={{
            backgroundColor: nextEvent ? '#B22132' : 'white',
            width: 19,
            height: 19,
            borderRadius: 90,
            marginRight: 30,
        }}
    />
);

export default EventTimelineDot;
