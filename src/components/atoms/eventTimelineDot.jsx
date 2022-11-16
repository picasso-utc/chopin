import React from 'react';
import { View } from 'react-native';

import AtomStyle from '../style/atomsStyle';

const EventTimelineDot = ({ nextEvent }) => (
    <View style={nextEvent ? AtomStyle.eventTimelineDotNext : AtomStyle.eventTimelineDot} />
);

export default EventTimelineDot;
