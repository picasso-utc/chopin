import React from 'react';
import { View } from 'react-native';

import TextDays from '../atoms/textDay';
import NumDay from '../atoms/numDay';
import NamePerm from '../atoms/namePerm';
import MoleculeStyle from '../style/moleculeStyle';

const DayCalendar = ({ id, day, perms, today, weekday }) => {
    let morning = null;
    let noon = null;
    let night = null;

    perms.map(({ nom, periode }) => {
        if (periode == 'M') {
            morning = nom;
        } else if (periode == 'D') {
            noon = nom;
        } else if (periode == 'S') {
            night = nom;
        }
    });

    return (
        <View
            style={
                today
                    ? MoleculeStyle.containerToday
                    : id % 2 === 0
                    ? MoleculeStyle.containerLight
                    : MoleculeStyle.containerDark
            }
        >
            <TextDays weekday={weekday} />
            <NumDay
                day={day}
                style={
                    today
                        ? MoleculeStyle.dayToday
                        : id % 2 === 0
                        ? MoleculeStyle.dayDark
                        : MoleculeStyle.dayLight
                }
            />
            <View style={MoleculeStyle.containerPerms}>
                <NamePerm
                    name={morning}
                    style={
                        today
                            ? MoleculeStyle.nameToday
                            : id % 2 === 0
                            ? MoleculeStyle.nameDark
                            : MoleculeStyle.nameLight
                    }
                />
                <NamePerm
                    name={noon}
                    style={
                        today
                            ? MoleculeStyle.nameToday
                            : id % 2 === 0
                            ? MoleculeStyle.nameDark
                            : MoleculeStyle.nameLight
                    }
                />
                <NamePerm
                    name={night}
                    style={
                        today
                            ? MoleculeStyle.nameToday
                            : id % 2 === 0
                            ? MoleculeStyle.nameDark
                            : MoleculeStyle.nameLight
                    }
                />
            </View>
        </View>
    );
};

export default DayCalendar;
