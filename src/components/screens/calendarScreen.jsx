import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import DayCalendar from '../molecules/dayCalendar';
import { getCalendar } from '../../api/apiCalls';
import ScreenStyle from '../style/screenStyle';

function CalendarScreen() {
    const [calendar, setCalendar] = useState({});

    useEffect(() => {
        getCalendar()
            .then((res) => {
                setCalendar(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }, []);

    const date = new Date().toISOString();
    let today = date.split('T')[0];

    const week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    return (
        <View style={ScreenStyle.calendarScreenContainer}>
            <ScrollView contentContainerStyle={ScreenStyle.ScreenScrollContainer} scrollEnabled>
                {Object.entries(calendar).map(([key, value], index) => (
                    <DayCalendar
                        key={index}
                        id={index}
                        today={key === today}
                        weekday={week[new Date(key).getDay()]}
                        day={new Date(key).getDate()}
                        perms={value}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default CalendarScreen;
