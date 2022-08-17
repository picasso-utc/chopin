import React from 'react';
import { View, StyleSheet } from 'react-native';

import TextDays from '../atoms/textDay';
import NumDay from '../atoms/numDay';
import NamePerm from '../atoms/namePerm';

const DayCalendar = ({ id, day, morning, noon, night, today, weekday }) => {
    return (
        <View
            style={
                today
                    ? styles.containerToday
                    : id % 2 === 0
                    ? styles.containerLight
                    : styles.containerDark
            }
        >
            <TextDays weekday={weekday} />
            <NumDay
                day={day}
                style={today ? styles.dayToday : id % 2 === 0 ? styles.dayDark : styles.dayLight}
            />
            <View style={styles.containerPerms}>
                <NamePerm
                    name={morning}
                    style={
                        today ? styles.nameToday : id % 2 === 0 ? styles.nameDark : styles.nameLight
                    }
                />
                <NamePerm
                    name={noon}
                    style={
                        today ? styles.nameToday : id % 2 === 0 ? styles.nameDark : styles.nameLight
                    }
                />
                <NamePerm
                    name={night}
                    style={
                        today ? styles.nameToday : id % 2 === 0 ? styles.nameDark : styles.nameLight
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerDark: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    containerLight: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(256,256,256,0.33)',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    containerToday: {
        width: 350,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#B22132',
        alignItems: 'center',
        marginBottom: 20,
    },
    dayToday: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: '#B22132',
    },
    dayDark: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        backgroundColor: '#000223',
    },
    dayLight: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(256,256,256,0.33)',
    },
    containerPerms: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: 205,
        justifyContent: 'space-evenly',
        marginLeft: '5%',
    },
    nameToday: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#B22132',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameDark: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#000223',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    nameLight: {
        width: 205,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(256,256,256,0.33)',
        display: 'flex',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
});

export default DayCalendar;
