import React from 'react';
import { View, ScrollView } from 'react-native';

import DayCalendar from '../molecules/dayCalendar';
import ScreenStyle from '../style/screenStyle';

function CalendarScreen() {
    return (
        <View style={ScreenStyle.calendarScreenContainer}>
            <DayCalendar
                id={1}
                today
                weekday="lundi"
                day="21"
                morning="FEVITE"
                noon="FEVITE"
                night="FEVITE"
            />
            <ScrollView contentContainerStyle={ScreenStyle.ScreenScrollContainer} scrollEnabled>
                <DayCalendar
                    id={2}
                    today={false}
                    weekday="mardi"
                    day="21"
                    morning="Pic en Transition"
                    noon="Formul'UT"
                    night="Perm Chefs"
                />
                <DayCalendar
                    id={3}
                    today={false}
                    weekday="mercredi"
                    day="21"
                    morning="Ackrockeur"
                    noon="Integ"
                    night="Perms des Profs"
                />
                <DayCalendar
                    id={4}
                    today={false}
                    weekday="jeudi"
                    day="21"
                    morning="Rugby"
                    noon="Rugby"
                    night="Rugby"
                />
                <DayCalendar
                    id={5}
                    today={false}
                    weekday="vendredi"
                    day="21"
                    morning="FEVITE"
                    noon="FEVITE"
                    night="FEVITE"
                />
                <DayCalendar
                    id={6}
                    today={false}
                    weekday="samedi"
                    day="21"
                    morning="FEVITE"
                    noon="FEVITE"
                    night="FEVITE"
                />
                <DayCalendar
                    id={7}
                    today={false}
                    weekday="dimanche"
                    day="21"
                    morning="FEVITE"
                    noon="FEVITE"
                    night="FEVITE"
                />
            </ScrollView>
        </View>
    );
}

export default CalendarScreen;
