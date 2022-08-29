import React from 'react';

import { Text } from 'react-native';
import AtomStyle from '../style/atomsStyle';

const EventTimelineDate = ({ date }) => {
    const [, month, day] = date.split('-');

    return <Text style={AtomStyle.eventTimelineDate}> {`${day} / ${month}`} </Text>;
};

export default EventTimelineDate;
