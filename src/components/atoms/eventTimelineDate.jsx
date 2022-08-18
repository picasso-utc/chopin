import React from 'react';
import { Text } from 'react-native';

const EventTimelineDate = ({ date }) => {
    const [, month, day] = date.split('-');

    return (
        <Text style={{ width: 50, color: 'white', fontWeight: 'bold' }}>
            {day}/{month}
        </Text>
    );
};

export default EventTimelineDate;
