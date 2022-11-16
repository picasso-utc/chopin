import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import DayCalendar from '../molecules/dayCalendar';
import ScreenStyle from '../style/screenStyle';

function CalendarScreen() {
    const [calendar, setCalendar] = useState({});

    useEffect(() => {
        const getCarte = async () => {
            const calendarFetched = await AsyncStorage.getItem('calendrier');
            setCalendar(JSON.parse(calendarFetched));
        };
        getCarte();
    }, []);

    const date = new Date().toISOString();
    const today = date.split('T')[0];

    const week = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    return (
        <View style={ScreenStyle.calendarScreenContainer}>
            <ScrollView contentContainerStyle={ScreenStyle.ScreenScrollContainer} scrollEnabled>
                {Object.entries(calendar).map(([key, value], index) => (
                    <DayCalendar
                        key={key}
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
