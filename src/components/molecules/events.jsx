import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import EventTimelineDate from '../atoms/eventTimelineDate';
import EventTimelineLine from '../atoms/eventTimelineLine';
import EventTimelineDot from '../atoms/eventTimelineDot';
import MoleculeStyle from '../style/moleculeStyle';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const eventsFetched = await AsyncStorage.getItem('events');
            setEvents(JSON.parse(eventsFetched));
        };
        getEvents();
    }, []);

    return (
        <View style={MoleculeStyle.eventHeaderContainer}>
            <Text style={MoleculeStyle.eventHeaderText}>Evenements du Semestre</Text>
            <View>
                {events.map((event) => (
                    <View style={MoleculeStyle.eventContainer} key={event.id}>
                        <EventTimelineLine />
                        <EventTimelineDot nextEvent={event.nextEvent} />
                        <EventTimelineDate date={event.date} />
                        <Text style={MoleculeStyle.eventText}>{event.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Events;
