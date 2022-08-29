import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { getEvenements } from '../../api/apiCalls';
import EventTimelineDate from '../atoms/eventTimelineDate';
import EventTimelineLine from '../atoms/eventTimelineLine';
import EventTimelineDot from '../atoms/eventTimelineDot';
import MoleculeStyle from '../style/moleculeStyle';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvenements()
            .then((res) => {
                // on ajoute un attribut nextEvent à chaque événement
                res.data.data.nextEvent = false;

                // on recupere aujourd'hui
                const today = new Date().toISOString().split('T')[0];

                // on trie
                res.data.data.sort((a, b) => (a.date > b.date ? 1 : -1));

                // on check quel est le prochain evenement du semestre
                const nextEvent = res.data.data.find((event) => event.date >= today);

                // on set a true le prochain evenement du semestre
                nextEvent.nextEvent = true;
                setEvents(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
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
                        <Text style={MoleculeStyle.eventText}>{event.nom}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Events;
